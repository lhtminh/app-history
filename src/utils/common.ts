export function getRandomArray(arr: any[], numberOfElements: number) {
  const shuffled = arr.sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(numberOfElements, arr.length))
}

export function getRandomString(length: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  const charactersLength = characters.length

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }

  return result
}

export const removeDiacritics = (text: string) => {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}
