const mapCamelToKebabCase = (string: string) => {
  let subs: string[] = [];
  let char: string = "";
  let j: number = 0;

  for (let i = 0; i < string.length; i++) {
    char = string[i];

    if (string[i] === char.toUpperCase()) {
      subs.push(string.slice(j, i));
      j = i;
    }

    if (i == string.length - 1) {
      subs.push(string.slice(j, string.length));
    }
  }

  return subs
    .map((el) => el.charAt(0).toLowerCase() + el.substring(1, el.length))
    .join("-");
};

export const getBidCarsSearchResultPageUrl = (params: {
  type?: string;
  make?: string;
  model?: string;
  yearFrom?: number;
  yearTo?: number;
  exteriorColor?: string;
  odometerFrom?: number;
  odometerTo?: number;
  page?: number;
  orderBy?: string;
}) => {
  const notEmptyUrlSearchParams = Object.fromEntries(
    Object.entries(params)
      .filter(([_, value]) => value !== undefined)
      .map(([key, value]) => [mapCamelToKebabCase(key), value]),
  );

  const urlSearchParamsString = new URLSearchParams({
    "search-type": "filters",
    "order-by": "dateDesc",
    ...notEmptyUrlSearchParams,
  }).toString();

  return `https://bid.cars/app/search/archived/request?${urlSearchParamsString}`;
};
