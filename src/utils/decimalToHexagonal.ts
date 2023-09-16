const decimalToHexagonal = (decimal: number): string => {
  const hexagonal = decimal.toString(16);
  return hexagonal.padStart(2, "0");
}

export default decimalToHexagonal;
