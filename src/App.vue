<template>
  <div class="app">
    <div class="app__header">
      <TheNavigation />
    </div>

    <div class="app__body">
      <div class="app__aside">
        <TheSidebar />
      </div>

      <div class="app__content">
        <router-view />
      </div>
    </div>

    <div class="app__footer">
      <TheFooter />
    </div>
  </div>
</template>

<script>
import { provide } from 'vue'

import TheNavigation from '@/components/the-navigation/TheNavigation'
import TheSidebar from '@/components/the-sidebar/TheSidebar'
import TheFooter from '@/components/the-footer/TheFooter'

import useBreakpoint from '@/composables/useBreakpoint'
import useTheme from '@/composables/useTheme'

export default {
  components: {
    TheNavigation,
    TheSidebar,
    TheFooter
  },

  setup () {
    provide('breakpoint', useBreakpoint())
    provide('theme', useTheme())
  }
}
</script>

<style lang="scss">
@import '~assets/App';
</style>

