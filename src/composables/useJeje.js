// libs
import _toLower from 'lodash/toLower'

const isProbablyTrue = () => Math.random() > 0.4
const isVowel = char => char && 'aeiou'.includes(_toLower(char))
const isLastCharVowel = str => isVowel(str[str.length - 1])

export default () => {
  function toJeje (str) {
    const jejeCharacterMap = {
      a: ['4'],
      e: ['3'],
      i: ['1', '!'],
      g: ['6'],
      o: ['0'],
      s: ['5', 'cxs', 'zxcs']
    }

    const jejeWordMap = {
      hello: ['eow'],
      po: ['phoews'],
      i: ['1', '!'],
      g: ['6'],
      o: ['0'],
      s: ['5']
    }

    const toJejeChar = char => {
      const isJeje = isProbablyTrue()
      const isUpper = isProbablyTrue()

      const jejeChar = jejeCharacterMap[char]

      if (isJeje && jejeChar) {
        return jejeChar[Math.floor(Math.random() * jejeChar.length)]
      }

      return (isUpper ? char.toUpperCase() : char)
    }

    return _toLower(str)
      .trim()
      .split(' ')
      .map(word => {
        const prefixWithH = isProbablyTrue()
        const isPrefixableWithH = isLastCharVowel(word)

        const newWord = prefixWithH && isPrefixableWithH
          ? `${word}h`
          : word

        return Array.from(newWord)
          .map(toJejeChar)
          .join('')
      })
      .join(' ')
  }

  return {
    toJeje
  }
}
