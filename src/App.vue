<script setup>
const {
  toggleVisibility: toggleSidebarVisibility
} = useSidebar()

</script>

<template>
  <div class="app text-gray-800 dark:text-white">
    <div class="app__header">
      <the-navigation />
    </div>

    <div class="app__body">
      <the-sidebar class="app__aside" />

      <div
        class="app__content"
        @click="toggleSidebarVisibility(false)"
      >
        <router-view />
      </div>
    </div>

    <div class="app__footer">
      <the-footer />
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --navbar-height: 80px;
  --footer-height: 44px;
  --sidebar-width: 250px;
  --sidebar-margin: 5px;
}

/* custom scrollbar */
::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
  background-color: theme("colors.gray.200");

  @include dark() {
    background-color: theme("colors.gray.500");
  }
}

::-webkit-scrollbar-thumb:hover {
  background-color: theme("colors.gray.300");

  @include dark() {
    background-color: theme("colors.gray.600");
  }
}

.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;

  .app__header {
    flex-grow: 1;
    height: var(--navbar-height);
  }

  .app__body {
    flex-grow: 1;
    display: flex;
    height: 100%;
    position: relative;
    overflow-y: auto;
    padding-right: 10px;

    .app__aside {
      min-width: var(--sidebar-width);
      width: var(--sidebar-width);
      height: calc(100vh - var(--navbar-height) - var(--footer-height));
      overflow: auto;
    }

    .app__content {
      flex-grow: 1;
      max-height: calc(100vh - var(--navbar-height) - var(--footer-height));
      overflow: auto;
    }
  }

  .app__footer {
    flex-grow: 1;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: var(--footer-height);
  }
}
</style>

