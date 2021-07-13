/**
 * Turn any string into a handle (lowercase, seperated by '-') and remove accents
 * Useful for turning a string into the end of  link
 * @param string eg 'Marie Hélène'
 * @returns 'marie-helene'
 */
export const handleize = (string: string): string => {
  return string
    .split(" ")
    .join("-")
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}
