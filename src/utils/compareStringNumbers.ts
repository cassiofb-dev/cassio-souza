import numericRegex from "./numericRegex";

/**
 * Converts two strings to numbers and compares them.
 */
const compareStringNumbers = (a: string, b: string) => {
  a = String(a);
  b = String(b);

  const x = Number(a?.match(numericRegex)?.shift()) || 0;
  const y = Number(b?.match(numericRegex)?.shift()) || 0;

  return x - y;
};

export default compareStringNumbers;
