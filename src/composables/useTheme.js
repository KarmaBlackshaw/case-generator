
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  attribute: 'data-theme',
  valueDark: 'dark',
  valueLight: 'light'
})

export default () => {
  const toggle = useToggle(isDark)

  return {
    name: isDark.value ? 'dark' : 'light',
    isDark,
    toggle
  }
}