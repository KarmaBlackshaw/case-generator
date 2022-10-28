<script setup>

const siteData = reactive({
  description: `Case converter`
})

const env = useEnv()

useHead({
  meta: [
    {
      name: `description`,
      content: computed(() => siteData.description)
    },
    {
      property: 'og:image',
      'content': 'https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/627a3976b940b00009c248c9/screenshot_2022-05-10-10-08-53-0000.png'
    },
    { property: 'og:title', content: 'Case converter' },
    { property: 'og:type', content: 'article' },
    { property: 'og:description', content: 'A simple case converter' },
    { property: 'twitter:image:src', content: 'https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/627a3976b940b00009c248c9/screenshot_2022-05-10-10-08-53-0000.png' },
    { property: 'og:image:width', content: '1000' },
    { property: 'og:site_name', content: 'Case Converter' }
  ]
})

</script>
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
        :href="env.get('REPO_URL')"
        target="_blank"
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

<style lang="scss" scoped>
@import './assets/scss/HeroView';
</style>
h e l l o  w o r l d