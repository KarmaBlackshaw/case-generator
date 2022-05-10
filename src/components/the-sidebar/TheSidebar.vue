<template>
  <section
    ref="sidebar"
    class="the-sidebar sidebar"
    :class="{
      [isSidebarVisible ? 'sidebar--visible' : 'sidebar--hidden']: true
    }"
  >
    <div class="sidebar__search">
      <input
        v-model="caseSearch"
        type="search"
        placeholder="Search"
      >
    </div>

    <ul class="sidebar__list list">
      <template
        v-for="(caseItem, caseKey) in cases"
        :key="caseKey"
      >
        <router-link
          v-slot="{ navigate, isActive }"
          :to="{ name: 'home', params: { case_type: caseItem.slug } }"
        >
          <li
            class="list__item"
            :class="{
              'list__item--active': isActive
            }"
            @click="e => {
              navigate(e)
              toggleSidebarVisibility(false)
            }"
          >
            {{ caseItem.title }}
          </li>
        </router-link>
        <div class="list__divider"></div>
      </template>
    </ul>
  </section>
</template>

<script>
import { ref, computed } from 'vue'

import useSidebar from '@/composables/useSidebar'
import useCase from '@/composables/useCase'

// libs
import { onClickOutside } from '@vueuse/core'

import {
  toLower
} from '@/utils/cases'

export default {
  name: "TheSidebar",

  setup () {
    /**
     * Sidebar
     */
    const sidebar = ref(null)
    const {
      toggleVisibility: toggleSidebarVisibility,
      isVisible: isSidebarVisible
    } = useSidebar()

    onClickOutside(sidebar, () => toggleSidebarVisibility(false))

    /**
     * Case List
     */
    const caseSearch = ref('')
    const {
      cases: casesRawList
    } = useCase()

    const casesList = computed(() => {
      return casesRawList.filter(item => {
        const titleMatch = toLower(item.title).includes(caseSearch.value)
        if (titleMatch) {
          return true
        }

        const slugMatch = toLower(item.slug).includes(caseSearch.value)
        if (slugMatch) {
          return true
        }

        const definitionMatch = toLower(item.definition).includes(caseSearch.value)
        if (definitionMatch) {
          return true
        }

        return false
      })
    })

    return {
      sidebar,

      caseSearch,
      cases: casesList,

      isSidebarVisible,
      toggleSidebarVisibility
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/TheSidebar';
</style>