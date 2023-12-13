import { Auction, Lot, Make, Model, Vehicle } from "@prisma/client";
import {
  RawSearchResponseItem,
  RawSearchResponsePage,
  SearchResponseItem,
  SearchResponsePage,
} from "./search.types";

const mapDashesToNull = (value: string): string =>
  value === "---" ? "" : value;

const nullOrMutate = <T>(value: string | null, mutate: (value: string) => T) =>
  value === null || value === undefined || value === "" ? null : mutate(value);

const mapPriceToNumber = (price: string): number =>
  parseFloat(price.replace(",", "").replace("$", ""));

const mapNumberToDate = (timestamp: number): Date => new Date(timestamp);

const selectNameByParts = (
  names: string[],
  nameParts: string[],
): [string | undefined, string[]] => {
  for (const name of names) {
    const remainingNameParts = nameParts.slice();

    let remainingNamePart = name;

    while (remainingNamePart.length > 0 && remainingNameParts.length > 0) {
      const tagPart = remainingNameParts.shift()!;

      if (!remainingNamePart.startsWith(tagPart)) {
        continue;
      }

      if (remainingNamePart.length === tagPart.length) {
        return [name, nameParts];
      }

      remainingNamePart = remainingNamePart.substring(tagPart.length + 1);
    }
  }

  return [undefined, nameParts];
};

const parseLotType = (lotType: string): Auction => {
  switch (lotType) {
    case "0":
      return "iaai";
    case "1":
      return "copart";
    default:
      throw new Error(`Unknown lot type ${lotType}`);
  }
};

const parseLot = (lot: string): Pick<Lot, "auction" | "lotNumber"> => {
  const [lotType, lotNumber] = lot.split("-");

  return {
    auction: parseLotType(lotType),
    lotNumber: parseInt(lotNumber),
  };
};

type MapRawSearchResponsePage = (
  rawSearchResponsePage: RawSearchResponsePage,
) => SearchResponsePage;

export const createRawToSearchResponsePageMapper: (
  mapRawToSearchItem: MapRawToSearchItem,
) => MapRawSearchResponsePage =
  (mapRawToSearchItem) =>
  ({
    current_page: currentPage,
    data,
    first_page_url,
    from,
    next_page_url,
    path,
    per_page: perPage,
    prev_page_url,
    to,
  }) => ({
    currentPage,
    data: data.map(mapRawToSearchItem),
    from: from === null ? null : from - 1,
    to,
    perPage,
  });

type MapRawToSearchItem = (
  rawSearchResponseItem: RawSearchResponseItem,
) => SearchResponseItem;

export const createRawToSearchItemMapper: (
  parseTag: ParseTag,
) => MapRawToSearchItem =
  (parseTag) =>
  ({
    // @ts-ignore
    number_trans, // trash
    // @ts-ignore
    vin_trans, // trash
    // @ts-ignore
    milage_trans, // trash
    // @ts-ignore
    location_trans, // trash
    // @ts-ignore
    miles_trans, // trash
    prebid_closed_trans: prebidClosedTrans, // TODO: Что это блять?
    // @ts-ignore
    prebid_closed_info_trans, // trash
    // @ts-ignore
    sold_by_buy_now_trans, // trash
    // @ts-ignore
    buy_now_trans, // trash
    left_trans: leftTrans, // TODO: Что это блять ?
    // @ts-ignore
    seller_trans, // trash
    // @ts-ignore
    final_bid_trans, // trash
    // @ts-ignore
    document_trans, // trash
    // @ts-ignore
    status_trans, // trash
    // @ts-ignore
    damage_trans, // trash
    seller,
    // @ts-ignore
    has_video: hasVideo, // useless
    // @ts-ignore
    has_360_view: has360View, // useless
    // @ts-ignore
    language, // trash
    name,
    // @ts-ignore
    need_login_trans,
    tag,
    lot,
    vin,
    sold_before: soldBefore, // TODO: Что это блять?
    odometer,
    // @ts-ignore
    odometer_substr, // trash
    // @ts-ignore
    odometer_km_substr, // trash
    location,
    // @ts-ignore
    sale_document, // trash
    // @ts-ignore
    sale_document_state, // trash
    sale_document_split: titleType,
    // @ts-ignore
    need_login,
    // @ts-ignore
    see_price_trans,
    loss_type: loss,
    primary_damage: primaryDamage,
    start_code: startCode,
    prebid_close_time: auctionDateTime, // TODO: Проверить в карточке
    // @ts-ignore
    time_left, // trash
    // @ts-ignore
    time_left_formatted, // trash,
    prebid_price: lastPreBid,
    final_bid: finalBid,
    final_bid_formatted: finalBidFormatted, // trash,
    buy_now_close_time: buyNowCloseTime, // время окончания возможности by now
    buy_now_price: buyNowPrice,
    status, // status с карточки о продаже
    // @ts-ignore
    watchlist, // something like favorites locally on bid.cars
    img,
  }) => {
    const { year, makeName, modelName } = parseTag(tag);

    const lotFinalBid =
      typeof finalBid === "number"
        ? finalBid
        : finalBidFormatted !== null
          ? mapPriceToNumber(finalBidFormatted)
          : null;

    return {
      vehicleData: {
        makeName,
        modelName,
        vin,
        year,
        unprocessed: {
          name,
        },
      },
      lotData: {
        ...parseLot(lot),
        seller: mapDashesToNull(seller),
        odometer,
        location,
        titleType,
        loss: mapDashesToNull(loss),
        primaryDamage,
        startCode,
        auctionDateTime: new Date(Date.parse(auctionDateTime)).toISOString(),
        lastPreBid: nullOrMutate(mapDashesToNull(lastPreBid), mapPriceToNumber),
        finalBid: lotFinalBid,
        buyNowPrice: nullOrMutate(
          mapDashesToNull(buyNowPrice),
          mapPriceToNumber,
        ),
        unprocessed: {
          leftTrans,
          prebidClosedTrans,
          buyNowCloseTime:
            buyNowCloseTime === undefined
              ? null
              : new Date(buyNowCloseTime).toISOString(),
          soldBefore: soldBefore === undefined ? null : soldBefore,
          status,
          imgs: Object.values(img),
        },
      },
    };
  };

type ParseTag = (tag: string) => {
  year: number;
  makeName: Make["name"];
  modelName: Model["name"];
  vin: Vehicle["vin"] | null;
};

const vinRegEx = /\b[(A-H|J-N|P|R-Z|0-9)]{17}\b/;

export const createTagParser: (
  modelNamesByMakeName: Record<Make["name"], Model["name"][]>,
) => ParseTag = (modelNameSetByMakeName) => (tag: string) => {
  const tagParts = tag.split("-");

  const lastTagPart = tagParts.at(-1)!;

  const vin = vinRegEx.test(lastTagPart) ? lastTagPart : null;

  const makeAndModel = tagParts
    .slice(1, vin === null ? undefined : -1)
    .map((part) => part.toLowerCase());

  const makeNames = Object.keys(modelNameSetByMakeName);

  const [makeName, remainingModelParts] = selectNameByParts(
    makeNames,
    makeAndModel,
  );

  if (makeName === undefined) {
    throw new Error("");
  }

  const modelNames = modelNameSetByMakeName[makeName];

  const [modelName] = selectNameByParts(modelNames, remainingModelParts);

  if (modelName === undefined) {
    throw new Error("");
  }

  return {
    year: parseInt(tagParts[0]),
    makeName,
    modelName,
    vin,
  };
};
