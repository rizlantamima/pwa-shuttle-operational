export const last = (
  array: Array<any> | undefined
): string | number | undefined => {
  if (array && array.length > 0) {
    return array[array.length - 1];
  } else {
    return undefined; // or any other default value you prefer
  }
};
