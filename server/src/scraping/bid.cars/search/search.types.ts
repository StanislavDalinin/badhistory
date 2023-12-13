import { Lot, Make, Model, Vehicle } from "@prisma/client";

export type Count = {
  active: string | null;
  live: string | null;
  ended: string | null;
  "fast-buy": string | null;
  upcoming: string | null;
};

export type RawSearchResponseItem = {
  need_login: 0 | 1; // 1
  number_trans: string; // "Число"
  vin_trans: string; // "VIN"
  milage_trans: string; // "Километраж"
  location_trans: string; // "Место расположение"
  miles_trans: string; // "мили"
  prebid_closed_trans: string; // "Final auction ended"
  prebid_closed_info_trans: string; // "Final auction ended"
  sold_by_buy_now_trans: string; // "Продавец Купить сейчас"
  buy_now_trans: string; // "Купить сейчас"
  left_trans: string; // "окончилось"
  seller_trans: string; // "Продавец"
  final_bid_trans: string; // "Final bid"
  document_trans: string; // "Sale doc."
  status_trans: string; // "Status"
  damage_trans: string; // "Damage"
  seller: string; // "Usaa Guidewire"
  has_video: boolean; // true
  has_360_view: boolean; // true
  language: null | string; // "ru"
  name: string; // "2017 Mercedes-Benz GLC-Class,..."
  tag: string; // "2017-Mercedes-Benz-GLC-Class-WDC0G4KB5HF241525"
  lot: string; // "0-37718999"
  vin: string; // "WDC0G4KB5HF241525"
  sold_before?: number; // 0
  odometer: number; // 62401
  odometer_substr: number; // 62
  odometer_km_substr: number; // 100
  need_login_trans: string; // Log in to see the final bid
  location: string; // "Philadelphia (PA)"
  sale_document: string; // "Salvage"
  sale_document_state: string; // "Pennsylvania"
  sale_document_split: string; // "Salvage (Pennsylvania)"
  loss_type: string; // "Столкноевение"
  primary_damage: string; // "Правая сторона"
  see_price_trans: string; // See price
  start_code: string; // "Run and Drive"
  prebid_close_time: string; // "пт 24 нояб., 15:30 GMT+1"
  time_left: string | number; // "0"
  time_left_formatted: string | number; //"0"
  prebid_price: string; // "$8,625"
  final_bid: number | null | {}; // 9325
  final_bid_formatted: string | null; // "$9,325"
  buy_now_close_time?: number; // 0
  buy_now_price: string; // "$0"
  status: number; // 2
  watchlist: boolean; // false
  img: Record<string, string>; // {
  //   img_1: "https://images.bid.cars/37718999_655f26ab14789/2017-Mercedes-Benz-GLC-Class-WDC0G4KB5HF241525-1.jpg?par=1";
  //   img_2: "https://images.bid.cars/37718999_655f26ab14789/2017-Mercedes-Benz-GLC-Class-WDC0G4KB5HF241525-2.jpg?par=1";
  //   img_3: "https://images.bid.cars/37718999_655f26ab14789/2017-Mercedes-Benz-GLC-Class-WDC0G4KB5HF241525-3.jpg?par=1";
  //   img_4: "https://images.bid.cars/37718999_655f26ab14789/2017-Mercedes-Benz-GLC-Class-WDC0G4KB5HF241525-4.jpg?par=1";
  //   img_5: "https://images.bid.cars/37718999_655f26ab14789/2017-Mercedes-Benz-GLC-Class-WDC0G4KB5HF241525-5.jpg?par=1";
  // }
};

export type RawSearchResponsePage = {
  current_page: number;
  data: RawSearchResponseItem[];
  first_page_url: string;
  from: number | null;
  next_page_url: string | null;
  path: string | []; // ??
  per_page: number;
  prev_page_url: number | null;
  to: number | null;
  count?: Count;
};

export type SearchResponsePage = {
  currentPage: number;
  data: SearchResponseItem[];
  from: number | null;
  perPage: number;
  to: number | null;
};

export type SearchResponseItem = {
  vehicleData: Pick<Vehicle, "vin" | "year" | "unprocessed"> & {
    makeName: Make["name"];
    modelName: Model["name"];
  };
  lotData: Pick<
    Lot,
    | "auction"
    | "seller"
    | "lotNumber"
    | "odometer"
    | "location"
    | "titleType"
    | "loss"
    | "primaryDamage"
    | "startCode"
    | "lastPreBid"
    | "finalBid"
    | "buyNowPrice"
  > & {
    auctionDateTime: string;
    unprocessed: Omit<Lot["unprocessed"], "buyNowCloseTime"> & {
      buyNowCloseTime: string | null;
    };
  };
};

// leftTrans: string;
// prebidClosedTrans: string;
// soldBefore: number;
// seller: string; // + "Usaa Guidewire"
// name: string; // + "2017 Mercedes-Benz GLC-Class,..."
// tag: string; // + "2017-Mercedes-Benz-GLC-Class-WDC0G4KB5HF241525"
// lotNumber: string; // + "0-37718999"
// vin: string; // + "WDC0G4KB5HF241525"
// odometer: number; // + 62401
// location: string; // + "Philadelphia (PA)"
// titleType: string; // + "sale_document_split"
// loss: string | null; // + "Столкноевение"
// primaryDamage: string; // + "Правая сторона"
// startCode: string; // + "Run and Drive"
// auctionDateTime: string; // + "пт 24 нояб., 15:30 GMT+1"
// lastPreBid: string; // + "$8,625"
// finalBid: number; // + 9325
// buyNowPrice: string; // + "$0"
// buyNowCloseTime: number; // 0
// status: number;
// imgs: string[]; // +
