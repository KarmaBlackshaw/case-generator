<template>
  <div class="base-theme-toggle">
    <input
      id="checkbox"
      type="checkbox"
      class="checkbox"
      :checked="isDark"
      @change="toggle()"
    >

    <label
      for="checkbox"
      class="label"
    >

      <div class="ball">
        <img
          v-if="isDark"
          src="./assets/images/sun-3.png"
          alt=""
        >
        <img
          v-else
          src="./assets/images/moon-3.png"
          alt=""
        >
      </div>
    </label>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: "BaseThemeToggle",

  setup () {
    const theme = inject('theme')

    return {
      isDark: theme.isDark,
      toggle: theme.toggle
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/BaseThemeToggle.scss';
</style>