import { get, set } from "lodash";

// type R<T> = Record<string, R> | T;

// export const addInRecord = <T>(
//   record: R<T>,
//   path: string | string[],
//   value: T,
// ) => {
//   let set = get(record, path);
//
//   if (array === undefined) {
//     new Set([value]);
//
//     record, path, [value];
//
//     return;
//   }
//
//   array.push(value);
// };

export const pushInRecord = <T>(
  record: object,
  path: string | string[],
  value: T,
) => {
  let array = get(record, path);

  if (array === undefined) {
    set(record, path, [value]);

    return;
  }

  array.push(value);
};

export const plusInRecord = (
  record: object,
  path: string | string[],
  value: number,
) => {
  let storedValue = get(record, path, 0);

  const result = storedValue + value;

  set(record, path, result);

  return result;
};
