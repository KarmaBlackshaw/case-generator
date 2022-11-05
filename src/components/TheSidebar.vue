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
      bg-gray-50 dark:bg-gray-900
      border-r border-gray-100 dark:border-gray-800
      transition-[transform]
    "
    :class="{
      [isSidebarVisible ? 'sidebar--visible' : 'sidebar--hidden']: true
    }"
  >
    <input
      v-model="caseSearch"
      type="search"
      placeholder="Search"
      class="
        w-full
        px-3 py-2
        outline-none
        rounded
        bg-neutral-200 dark:bg-neutral-100
        border-neutral-300 dark:border-neutral-200
        text-neutral-900
        text-sm
        mb-5
      "
    >

    <ul class="flex flex-col gap-[1px]">
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
                  : 'bg-gray-50 dark:bg-gray-900'
              ]"
            >
              {{ caseItem.title }}
            </div>
          </li>
        </router-link>
        <div class="list__divider"></div>
      </template>
    </ul>
  </section>
</template>

