<template>
  <section class="home">
    <div class="home__header header">
      <div class="header__title">
        {{ caseDetails.title }}
      </div>

      <div
        class="header__subtitle"
        v-html="caseDetails.definition"
      >
      </div>

      <div class="header__sample">
        <div v-if="isRandomQuoteLoading">
          Loading
        </div>

        <div v-else>
          <p class="mb-5">
            {{ randomQuoteData.content }}
          </p>
          <p>=> {{ caseDetails.handler(randomQuoteData.content) }}</p>
        </div>
      </div>
    </div>

    <div class="editor">
      <div class="editor__item editor__item--left">
        <div class="editor__title">
          Editor
        </div>

        <div class="editor__body">
          <textarea
            v-model="userInput"
            autofocus
          >
          </textarea>
        </div>
      </div>

      <div class="editor__item editor__item--right">
        <div class="editor__title">
          Output
        </div>

        <div class="editor__body">
          <textarea
            v-model="output"
            disabled
          ></textarea>

          <base-button
            class="editor__btn editor__btn--copy"
            @click="copy()"
          >
            {{ copied ? 'Copied' : 'Copy' }}
          </base-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// libs
import { useClipboard } from '@vueuse/core'
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

// composables
import useCase from '@/composables/useCase'

// libs
import { useAxios } from '@vueuse/integrations/useAxios'

export default {
  name: 'HomeView',

  setup () {

    /**
     * Cases
     */
    const userInput = ref('')

    const {
      cases
    } = useCase()

    const route = useRoute()

    const routeCaseType = computed(() => {
      return route.params.case_type
    })

    watch(
      () => route.params.case_type,
      () => userInput.value = ''
    )

    const caseDetails = computed(() => {
      return cases.find(item => item.slug === routeCaseType.value)
    })

    const output = computed(() => {
      return caseDetails.value.handler(userInput.value)
    })

    function clear () {
      userInput.value = ''
    }

    /**
     * Copy
     */
    const {
      copy,
      copied
    } = useClipboard({ source: output })

    /**
     * Sample text
     */
    const {
      data: randomQuoteData,
      isLoading: isRandomQuoteLoading
    } = useAxios('https://api.quotable.io/random')

    return {
      caseDetails,

      clear,
      copy,
      copied,

      output,

      userInput,

      randomQuoteData,
      isRandomQuoteLoading
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/HomeView';
</style>
