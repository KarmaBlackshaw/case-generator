import { ref, computed } from 'vue'

// libs
import _isNil from 'lodash/isNil'

// vars
const LOCAL_STORAGE_SIDEBAR_KEY = `${process.env.VUE_APP_TITLE}:sidebar`
const localstorageSidebar = window.localStorage[LOCAL_STORAGE_SIDEBAR_KEY]
const isVisible = ref(localstorageSidebar ? JSON.parse(localstorageSidebar) : true)

// composables
import useBreakpoint from '@/composables/useBreakpoint'

export default () => {
  const {
    breakpoint
  } = useBreakpoint()

  function toggleVisibility (value) {
    isVisible.value = _isNil(value) ? !isVisible.value : value
    window.localStorage[LOCAL_STORAGE_SIDEBAR_KEY] = isVisible.value
  }

  const isVisibleComputed = computed(() => {
    return breakpoint.sm ? true : isVisible.value
  })

  return {
    toggleVisibility,
    isVisible: isVisibleComputed
  }
}
