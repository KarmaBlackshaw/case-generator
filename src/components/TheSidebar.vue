<script setup>
/**
 * Sidebar
 */
const {
  toggleVisibility: toggleSidebarVisibility,
  isVisible: isSidebarVisible
} = useSidebar()

/**
     * Case List
     */
const {
  cases: casesRawList
} = useCase()

const caseSearch = ref('')
const casesList = computed(() => {
  const searchRegex = new RegExp(caseSearch.value || '', 'gi')

  return casesRawList.filter(item => {
    return searchRegex.test(item.title) || searchRegex.test(item.slug)
  })
})

</script>

<template>
  <section
    class="
      z-5
      p-5
      bg-gray-100 dark:bg-gray-900
      border-r border-gray-100 dark:border-gray-800
      transition-[transform]
      overflow-y-auto
      flex flex-col gap-5
    "
    :class="{
      [isSidebarVisible ? 'sidebar--visible' : 'sidebar--hidden']: true
    }"
  >
    <div
      class="
        flex items-center
        font-bebas-neue
        font-bold
        text-3xl
        sm:text-4xl
        bg-clip-text
        text-transparent
        bg-gradient-to-r from-[#42d392] to-[#647eff]
        select-none
      "
    >
      <router-link
        :to="{name: 'hero'}"
      >
        Case Converter
      </router-link>
    </div>

    <div
      class="
        w-full
        px-3 py-2
        rounded
        bg-neutral-200 dark:bg-gray-800
        border-neutral-300 dark:border-neutral-200
      "
    >
      <icon-material-symbols:search-rounded class="inline mr-2 text-neutral-900 dark:text-gray-500" />

      <input
        v-model="caseSearch"
        placeholder="Search"
        class="
          bg-transparent
          outline-none
          text-neutral-900 dark:text-gray-200
          text-sm
        "
      >
    </div>

    <ul class="flex flex-col gap-[1px]">
      <template v-if="casesList.length">
        <template
          v-for="(caseItem, caseKey) in casesList"
          :key="caseKey"
        >
          <router-link
            v-slot="{ navigate, isActive }"
            :to="{ name: 'home', params: { case_type: caseItem.slug } }"
          >
            <li
              class="
              rounded
              transition-[padding]
              cursor-pointer
              p-[2px]
              hover:bg-gradient-to-r from-[#42d392] to-[#647eff]
            "
              :class="[
                isActive
                  ? 'bg-gradient-to-r from-[#42d392] to-[#647eff]'
                  : 'bg-transparent dark:bg-gray-900'
              ]"
              @click="e => {
                navigate(e)
                toggleSidebarVisibility(false)
              }"
            >
              <div
                class="
                py-3 px-2
                rounded
                text-sm
              "
                :class="[
                  isActive
                    ? 'bg-transparent text-white'
                    : 'bg-gray-100 dark:bg-gray-900'
                ]"
              >
                {{ caseItem.title }}
              </div>
            </li>
          </router-link>
          <div class="list__divider"></div>
        </template>
      </template>

      <li
        v-else
        class="text-sm flex items-center justify-center dark:text-neutral-100/50"
      >
        No cases found <icon-twemoji:sad-but-relieved-face class="ml-2" />
      </li>
    </ul>
  </section>
</template>

