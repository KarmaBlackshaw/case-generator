<script setup>
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
      border-b border-gray-200 dark:border-gray-200/10
      dark:bg-gray-800
      px-5
      sm:px-20
    "
  >
    <div
      class="
        h-full w-full
        flex
        justify-between sm:justify-end
      "
    >
      <div
        class="
          sm:hidden
          items-center
          flex
          cursor-pointer
        "
      >
        <icon-gg:menu-left
          class="h-5 w-5"
          @click="toggleSidebarVisibility()"
        />
      </div>

      <div
        class="
          flex gap-2 sm:gap-5 items-center
          text-gray-900/50 dark:text-gray-200/50
        "
      >
        <button @click="toggleDark()">
          <icon-ic:outline-light-mode
            v-if="isDark"
            class="w-5 h-5 sm:w-5 sm:h-5"
          />
          <icon-material-symbols:nightlight
            v-else
            class="w-5 h-5 sm:w-5 sm:h-5"
          />
        </button>

        <a
          href="https://github.com/KarmaBlackshaw/case-generator"
          target="_blank"
        >
          <icon-bi:github
            class="w-5 h-5 sm:w-5 sm:h-5"
          />
        </a>
      </div>
    </div>
  </section>
</template>
