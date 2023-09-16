import decimalToHexagonal from "./decimalToHexagonal";

const randomString = () => {
  const array = new Uint32Array(32);

  window.crypto.getRandomValues(array);

  return Array.from(array, decimalToHexagonal).join('');
}

export default randomString;
