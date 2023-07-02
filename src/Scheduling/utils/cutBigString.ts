/**
 * Cut big string according max quantity of words
 * 
 * @param {string} str
 * @param {number} wordsQuantity
 * @returns {string}
 */
const cutBigString = (str: string, wordsQuantity: number): string => {
  const splittedString = str.split(' ')

  if (splittedString.length > wordsQuantity) {
    return splittedString.slice(0, wordsQuantity).join(' ') + '...'
  }

  return str
}

export default cutBigString