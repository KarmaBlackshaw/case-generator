
<template>
  <div class="navbar">
    <div class="navbar__header">
      Deped Attendance Generator
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 64px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: min(30px, 10%);
  padding-right: min(30px, 10%);

  .navbar__header {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    color: $lightBlue-900;
    font-weight: bold;
  }
}
</style>
