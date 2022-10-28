<script setup>
const breakpoint = useBreakpoint()

const {
  toggleVisibility: toggleSidebarVisibility
} = useSidebar()

const {
  isDark,
  toggleDark
} = useTheme()

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
          {{ breakpoint.lg ? 'Case Converter' : 'CC' }}
        </router-link>
      </div>

      <div class="the-navigation__item the-navigation__item--right">
        <div class="flex gap-5">
          <button @click="toggleDark()">
            <icon-ic:outline-light-mode
              v-if="isDark"
              class="w-6 h-6"
            />
            <icon-material-symbols:nightlight
              v-else
              class="w-6 h-6"
            />
          </button>

          <a
            href="https://github.com/KarmaBlackshaw/case-generator"
            target="_blank"
          >
            <icon-bi:github
              class="w-6 h-6"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import './assets/scss/TheNavigation.scss';
</style>