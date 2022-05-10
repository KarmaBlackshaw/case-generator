<template>
  <section class="hero">
    <div class="hero__tagline">
      A Simple <span class="accent">Case Converter</span>
    </div>
    <div class="hero__description">
      An open source case converter for everyday use
    </div>
    <div class="hero__actions">
      <a
        class="btn btn--github"
        target="blank"
      >
        <img
          src="./assets/images/github-dark.png"
          alt=""
        >
        <div>
          <p class="title">This project is open source</p>
          <p class="subtitle">Star and fork it on github</p>
        </div>
      </a>
    </div>
  </section>
</template>

<script>

export default {
  name: 'HeroView'
}
</script>

<style lang="scss" scoped>
@import './assets/scss/HeroView';
</style>
h e l l o  w o r l d