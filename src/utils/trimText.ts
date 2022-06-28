export const trimText = (text: string, length: number = 10) => {
  if (text.length > length) {
    return text.slice(0, length) + `...`
  }
  return text
}
