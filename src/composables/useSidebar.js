import { ref, computed } from 'vue'

// libs
const isVisible = ref(false)

// composables
import useBreakpoint from '@/composables/useBreakpoint'

export default () => {
  const {
    breakpoint
  } = useBreakpoint()

  function toggleVisibility () {
    return isVisible.value = !isVisible.value
  }

  const isVisibleComputed = computed(() => {
    return breakpoint.sm ? true : isVisible.value
  })

  return {
    toggleVisibility,
    isVisible: isVisibleComputed
  }
}
