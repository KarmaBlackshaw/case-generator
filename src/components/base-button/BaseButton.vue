<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton"
}
</script>

<style lang="scss" scoped>
@import './assets/scss/BaseButton';
</style>