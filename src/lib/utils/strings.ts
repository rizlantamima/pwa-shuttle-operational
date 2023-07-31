export const ucwords = (str: string | undefined): string | undefined => {
  let stringResult: string = "";
  if (str != "undefined") {
    stringResult = str as string;
  }
  return stringResult.replace(/\b\w/g, (match) => match.toUpperCase());
};
