<template>
  <section class="the-navigation">
    <div class="navigation__body">
      <div
        v-if="!breakpoint.sm"
        class="the-navigation__item the-navigation__item--hamburger"
      >
        <base-hamburger
          class="hamburger"
          @click="toggleSidebarVisibility"
        />
      </div>

      <div class="the-navigation__item the-navigation__item--logo">
        <img
          src="./assets/svg/excel.svg"
          alt=""
        >
      </div>

      <div class="the-navigation__item the-navigation__item--right">
        <base-theme-toggle class="theme-toggle" />

        <a
          href="https://github.com/KarmaBlackshaw/deped-attendance-generator"
          target="_blank"
        >
          <base-image
            :src-dark="require('./assets/images/github-dark.png')"
            :src-light="require('./assets/images/github-light.png')"
            alt=""
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { inject } from 'vue'

import useSidebar from '@/composables/useSidebar'

export default {
  name: "TheNavigation",

  setup () {
    const {
      breakpoint
    } = inject('breakpoint')

    const {
      toggleVisibility: toggleSidebarVisibility
    } = useSidebar()

    return {
      breakpoint,
      toggleSidebarVisibility
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/TheNavigation.scss';
</style>