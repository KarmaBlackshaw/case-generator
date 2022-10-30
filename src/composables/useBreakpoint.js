// libs
import _ from 'lodash'

import tailwind from '../../tailwind.config'

import { useBreakpoints } from '@vueuse/core'

const sizesss = _.flow([
  val => Object.entries(val),
  val => val.map(entry => [entry[0], Number(entry[1].replace(/px/gi, ''))]),
  val => Object.fromEntries(val)
])(tailwind.theme.screens)

export default () => useBreakpoints(sizesss)
