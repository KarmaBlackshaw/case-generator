import { ref, computed } from 'vue'

// libs
import _isNil from 'lodash/isNil'

const env = useEnv()
// vars
const LOCAL_STORAGE_SIDEBAR_KEY = `${env.get('TITLE')}:sidebar`
const localstorageSidebar = window.localStorage[LOCAL_STORAGE_SIDEBAR_KEY]
const isVisible = ref(localstorageSidebar ? JSON.parse(localstorageSidebar) : false)

// composables
const breakpoint = useBreakpoint()

export default () => {
  function toggleVisibility (value) {
    isVisible.value = _isNil(value) ? !isVisible.value : value
    window.localStorage[LOCAL_STORAGE_SIDEBAR_KEY] = isVisible.value
  }

  /**
   * If greater than small screen, always show
   */
  const isVisibleComputed = computed(() => {
    return breakpoint.sm ? true : isVisible.value
  })

  return {
    toggleVisibility,
    isVisible: isVisibleComputed
  }
}
