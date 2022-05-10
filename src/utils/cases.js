// libs
import _toLower from 'lodash/toLower'
import _camelCase from 'lodash/camelCase'
import _capitalize from 'lodash/capitalize'
import _snakeCase from 'lodash/snakeCase'

const isProbablyTrue = () => Math.random() > 0.4
const isVowel = char => char && 'aeiou'.includes(_toLower(char))
const isLastCharVowel = str => isVowel(str[str.length - 1])
const isUpper = char => toUpper(char) === char

export function toJeje (str) {
  const jejeCharacterMap = {
    a: ['4'],
    e: ['3'],
    i: ['1', '!'],
    g: ['6'],
    o: ['0'],
    s: ['5', 'cxs', 'zxcs']
  }

  const toJejeChar = char => {
    const isJeje = isProbablyTrue()
    const isUpperProbability = isProbablyTrue()

    const jejeChar = jejeCharacterMap[char]

    if (isJeje && jejeChar) {
      return jejeChar[Math.floor(Math.random() * jejeChar.length)]
    }

    return (isUpperProbability ? char.toUpperCase() : char)
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

export function toKebab (str) {
  return str
    .replace(/[^a-z]/gi, '-')
    .replace(/\B([A-Z])/g, '-$1')
    .toLowerCase()
}

export function toLower (str) {
  return String(str)
    .toLowerCase()
}

export function toUpper (str) {
  return String(str)
    .toUpperCase()
}

export function toCamel (str) {
  return _camelCase(str)
}

export function toCapital (str) {
  return _capitalize(str)
}

export function toSnake (str) {
  return _snakeCase(str)
}

export function toAlternating (str) {
  return str
    .split('')
    .map((char, i) => i % 2 === 0 ? toUpper(char) : toLower(char))
    .join('')
}

export function toAlternatingInverse (str) {
  return str
    .split('')
    .map((char, i) => i % 2 === 1 ? toUpper(char) : toLower(char))
    .join('')
}

export function toInverse (str) {
  return str
    .split('')
    .map(char => isUpper(char) ? toLower(char) : toUpper(char))
    .join('')
}

export function toWide (str) {
  return str
    .split('')
    .join(' ')
}

export function toWideUpper (str) {
  return toUpper(toWide(str))
}

export function toWideLower (str) {
  return toUpper(toWide(str))
}