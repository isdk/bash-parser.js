/*
  Check if a string represents a valid POSIX shell name, as specified in
  http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap03.html#tag_03_231
*/

const isValidName = (text: string): boolean => {
  return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(text);
};

export default isValidName;
export { isValidName };
