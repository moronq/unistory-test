export const trimText = (text: string, length: number = 10) => {
  if (text.length > length) {
    return text.slice(length) + `...`
  }
  return text
}
