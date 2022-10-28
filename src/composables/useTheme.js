
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  attribute: 'data-theme',
  valueDark: 'dark',
  valueLight: 'light'
})

const toggleDark = useToggle(isDark)

export default () => {
  return {
    name: isDark.value ? 'dark' : 'light',
    isDark,
    toggleDark
  }
}