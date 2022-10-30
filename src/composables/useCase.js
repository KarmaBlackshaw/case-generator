
import {
  toJeje,
  toKebab,
  toLower,
  toUpper,
  toCamel,
  toCapital,
  toSnake,
  toAlternating,
  toAlternatingInverse,
  toInverse,
  toWide,
  toWideUpper,
  toWideLower
} from '@/utils/cases'

const cases = [
  {
    title: 'Jeje Case',
    slug: 'jeje',
    definition: `Jejemon (Tagalog pronunciation: [ˈdʒɛdʒɛmɔ̝n]) is a popular cultural phenomenon in the Philippines. The Philippine Daily Inquirer describes Jejemons as a "new breed of hipster who has developed not only their own language and written text but also their own subculture and fashion."`,
    handler: toJeje
  },
  {
    title: 'Kebab Case',
    slug: 'kebab',
    definition: 'Kebab case -- or kebab-case -- is a programming variable naming convention where a developer replaces the spaces between words with a dash.',
    handler: toKebab
  },
  {
    title: 'Lower Case',
    slug: 'lower',
    definition: 'small letters as opposed to capital letters (uppercase).',
    handler: toLower
  },
  {
    title: 'Upper Case',
    slug: 'upper',
    definition: 'capital letters as opposed to small letters (lowercase).',
    handler: toUpper
  },
  {
    title: 'Camel Case',
    slug: 'camel',
    definition: 'a typographical convention in which an initial capital is used for the first letter of a word forming the second element of a closed compound, e.g. PayPal, iPhone, MasterCard.',
    handler: toCamel
  },
  {
    title: 'Capital Case',
    slug: 'capital',
    definition: 'Capital cases are cases that, if the defendant is guilty, he or she will face the death penalty. First-degree murder cases, either on grounds of premeditation or cases that based on the felony-murder doctrine are generally capital cases.',
    handler: toCapital
  },
  {
    title: 'Snake Case',
    slug: 'snake',
    definition: 'Snake case refers to the style of writing in which each space is replaced by an underscore character, and the first letter of each word written in lowercase. It is a commonly used naming convention in computing, for example for variable and subroutine names, and for filenames',
    handler: toSnake
  },
  {
    title: 'Alternating Case',
    slug: 'alternating',
    definition: 'Alternating caps, also known as studly caps or sticky caps, is a form of text notation in which the capitalization of letters varies by some pattern, or arbitrarily',
    handler: toAlternating
  },
  {
    title: 'Alternating Reverse Case',
    slug: 'alternating-reverse',
    definition: 'Alternating caps, also known as studly caps or sticky caps, is a form of text notation in which the capitalization of letters varies by some pattern, or arbitrarily',
    handler: toAlternatingInverse
  },
  {
    title: 'Wide Case',
    slug: 'wide',
    handler: toWide
  },
  {
    title: 'Wide Upper Case',
    slug: 'wide-upper',
    handler: toWideUpper
  },
  {
    title: 'Wide Lower Case',
    slug: 'wide-lower',
    handler: toWideLower
  },
  {
    title: 'Inverse Case',
    slug: 'inverse',
    handler: toInverse
  }
]

export default () => {
  return {
    cases
  }
}
