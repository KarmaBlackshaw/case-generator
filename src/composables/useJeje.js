// libs
import _toLower from 'lodash/toLower'

const isProbablyTrue = () => Math.random() > 0.4
const isVowel = char => 'aeiou'.includes(_toLower(char))
const isLastCharVowel = str => isVowel(str[str.length - 1])

export default () => {
  function toJeje (str) {
    const jejeMap = {
      a: ['4'],
      e: ['3'],
      i: ['1', '!'],
      g: ['6'],
      o: ['0'],
      s: ['5']
    }

    return Array.from(_toLower(str).trim())
      .map(char => {
        const isJeje = isProbablyTrue()
        const isUpper = isProbablyTrue()

        const jejeChar = jejeMap[char]

        if (isJeje && jejeChar) {
          return jejeChar[Math.floor(Math.random() * jejeChar.length)]
        }

        return (isUpper ? char.toUpperCase() : char)
      })
      .join('')
      .split(' ')
      .map(word => {
        const prefixWithH = isProbablyTrue()
        const isPrefixableWithH = isLastCharVowel(word)

        if (prefixWithH && isPrefixableWithH) {
          const isUpper = isProbablyTrue()

          return `${word}${isUpper ? 'H' : 'h'}`
        }

        return word
      })
      .join(' ')
  }

  return {
    toJeje
  }
}
