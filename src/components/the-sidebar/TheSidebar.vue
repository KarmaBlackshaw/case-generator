<template>
  <section class="the-sidebar">
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
export default {
  name: "TheSidebar"
}
</script>

<style lang="scss" scoped>
@import './assets/scss/TheSidebar';
</style>