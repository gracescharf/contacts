/**
 * Turn any string into a handle (lowercase, seperated by '-') and remove accents
 * Useful for turning a string into the end of  link
 * @param string eg 'Marie Hélène'
 * @returns 'marie-helene'
 */
export const handleize = (string: string): string => {
  const stringArr = string.split(" ")
  if (stringArr.length < 2) {
    return string.toLocaleLowerCase()
  }

  return stringArr
    .join("-")
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}
