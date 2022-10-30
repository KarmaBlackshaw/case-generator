
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  valueDark: 'dark'
})

const toggleDark = useToggle(isDark)

export default () => {
  return {
    name: isDark.value ? 'dark' : 'light',
    isDark,
    toggleDark
  }
}