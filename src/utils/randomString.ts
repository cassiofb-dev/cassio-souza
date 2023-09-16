import characters from "./characters";

const randomString = (size = 64) => {
  let result = "";

  while (result.length < size) {
    const random = Math.random();

    const char = characters.charAt(Math.floor(random * characters.length));

    result += char;
  }

  return result;
}

export default randomString;
