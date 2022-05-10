<template>
  <section
    class="the-sidebar sidebar"
    :class="{
      [isSidebarVisible ? 'sidebar--visible' : 'sidebar--hidden']: true
    }"
  >
    <div class="sidebar__search">
      <input
        type="search"
        placeholder="Search"
      >
    </div>

    <ul class="sidebar__list list">
      <template
        v-for="i in 20"
        :key="i"
      >
        <li
          class="list__item"
        >
          Snake Case
        </li>
        <div class="list__divider"></div>
      </template>
    </ul>
  </section>
</template>

<script>
import useSidebar from '@/composables/useSidebar'

export default {
  name: "TheSidebar",

  setup () {
    const {
      isVisible: isSidebarVisible
    } = useSidebar()

    return {
      isSidebarVisible
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/TheSidebar';
</style>