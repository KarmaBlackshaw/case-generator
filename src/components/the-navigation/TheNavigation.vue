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
  <section
    class="
      h-[72px] min-h-[72px]
      border-b border-gray-200/10
      dark:bg-gray-800
      px-20
    "
  >
    <div
      class="
        h-full w-full
        flex
        justify-between
      "
    >
      <div
        class="
          sm:invisible
          items-center
          flex
        "
      >
        <icon-gg:menu-left
          class="h-7 w-7"
          @click="toggleSidebarVisibility()"
        />
      </div>

      <div class="flex items-center">
        <router-link
          :to="{name: 'hero'}"
        >
          {{ breakpoint.lg ? 'Case Converter' : 'CC' }}
        </router-link>
      </div>

      <div class="flex gap-5 items-center">
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
  </section>
</template>

<style lang="scss" scoped>
@import './assets/scss/TheNavigation.scss';
</style>