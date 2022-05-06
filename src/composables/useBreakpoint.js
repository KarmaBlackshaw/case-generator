import { onMounted, onUnmounted, reactive } from 'vue'

// libs
import _debounce from 'lodash/debounce'

export default () => {
  const state = reactive({
    width: 0
  })

  const sizes = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280
  }

  const breakpoint = reactive({
    sm: false,
    md: false,
    lg: false,
    xl: false
  })

  const resizeCallback = _debounce(() => {
    const width = window.innerWidth

    for (const size in sizes) {
      const breakpointWidth = sizes[size]

      breakpoint[size] = width >= breakpointWidth
    }
  }, 10)

  onMounted(() => {
    state.width = window.innerWidth
    resizeCallback()
    window.addEventListener('resize', resizeCallback)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', resizeCallback)
  })

  return {
    breakpoint
  }
}
