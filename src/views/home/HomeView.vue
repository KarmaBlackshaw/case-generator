<template>
  <section class="home">
    <div class="home__header header">
      <div class="header__title">
        Snake Case
      </div>
      <div class="header__subtitle">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, molestias totam aliquid cumque laboriosam provident unde culpa delectus illum neque iure, earum nisi, libero veritatis asperiores corporis. Harum, facere cumque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae non vitae ducimus praesentium odit fuga, fugiat ut aut repellat sed debitis architecto minus modi, totam ipsum porro nihil. Magnam, explicabo.
      </div>
    </div>

    <div class="editor">
      <div class="editor__item editor__item--left">
        <div class="editor__title">
          Editor
        </div>

        <div class="editor__body">
          <textarea v-model="userInput">
          </textarea>
        </div>
      </div>

      <div class="editor__item editor__item--right">
        <div class="editor__title">
          Output
        </div>

        <div class="editor__body">
          <textarea
            disabled
          ></textarea>

          <base-button class="editor__btn editor__btn--copy">
            Copy
          </base-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// libs
import { useClipboard } from '@vueuse/core'
import { ref, computed } from 'vue'

// composables
import useJeje from '@/composables/useJeje'

export default {
  name: 'HomeView',

  setup () {
    const {
      toJeje
    } = useJeje()

    const userInput = ref('')

    const jejeStr = computed(() => {
      return toJeje(userInput.value)
    })

    const {
      copy,
      copied
    } = useClipboard({ source: jejeStr })

    function clear () {
      userInput.value = ''
    }

    return {
      clear,
      copy,
      copied,
      jejeStr,
      userInput
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles/HomeView';
</style>
