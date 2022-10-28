<script setup>
const breakpoint = useBreakpoint()

const {
  toggleVisibility: toggleSidebarVisibility
} = useSidebar()

</script>
<template>
  <section class="the-navigation">
    <div class="navigation__body">
      <div
        v-if="!breakpoint.sm"
        class="the-navigation__item the-navigation__item--hamburger"
      >
        <base-hamburger
          class="hamburger"
          @click="toggleSidebarVisibility()"
        />
      </div>

      <div class="the-navigation__item the-navigation__item--logo">
        <router-link
          :to="{name: 'hero'}"
        >
          {{ breakpoint.sm ? 'Case Converter' : 'CC' }}
        </router-link>
      </div>

      <div class="the-navigation__item the-navigation__item--right">
        <base-theme-toggle class="theme-toggle" />

        <!-- :href="env.get('REPO_URL')" -->
        <a
          target="_blank"
        >
          <!-- <base-image
            :src-dark="require('./assets/images/github-dark.png')"
            :src-light="require('./assets/images/github-light.png')"
            alt=""
          /> -->
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import './assets/scss/TheNavigation.scss';
</style>