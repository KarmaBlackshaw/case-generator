import { ref, computed } from 'vue'

// libs
import _isNil from 'lodash/isNil'

// vars
const isVisible = ref(true)

// composables
import useBreakpoint from '@/composables/useBreakpoint'

export default () => {
  const {
    breakpoint
  } = useBreakpoint()

  function toggleVisibility (value) {
    return isVisible.value = _isNil(value) ? !isVisible.value : value
  }

  const isVisibleComputed = computed(() => {
    return breakpoint.sm ? true : isVisible.value
  })

  return {
    toggleVisibility,
    isVisible: isVisibleComputed
  }
}
