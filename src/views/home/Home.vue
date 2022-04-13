<template>
  <div class="home">
    <div class="card">
      <div class="card__title">
        <span class="card__title--accent">JEJE GENERATOR</span>
      </div>

      <div class="card__subtitle">
        <p>
          This tool generates a
          <a
            class="card__text--bold"
            href="https://simple.wikipedia.org/wiki/Jejemon"
            target="_blank"
          >
            Jeje Case
          </a>
          based on your input
        </p>
      </div>

      <div class="card__subtitle">
        <h5>Type anything below to get started.</h5>
      </div>

      <div class="card__subtitle upload-container">
        <textarea
          v-model="userInput"
          type="text"
          class="input"
          placeholder="Start typing..."
        ></textarea>
      </div>

      <div class="card__subtitle upload-container">
        {{ jejeStr }}
      </div>

      <div class="card__subtitle upload-container">
        <button
          class="btn btn--copy"
          role="button"
          @click="copy()"
        >
          <span v-if="!copied">Copy</span>
          <span v-else>Copied!</span>
        </button>

        <button
          class="btn btn--clear"
          role="button"
          @click="clear"
        >
          Clear
        </button>
      </div>

      <div class="card__subtitle developer-credit">
        <span>Made with</span>
        <img
          src="./assets/images/vue-icon.png"
          alt=""
          class="developer-credit--vue"
        >
        <span>by</span>
        <a
          href="https://jeash.tech"
          target="_blank"
        >
          Ernie Jeash
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// libs
import { useClipboard } from '@vueuse/core'
import { ref, computed } from 'vue'

// composables
import useJeje from '@/composables/useJeje'

export default {
  name: 'Home',

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
@import './styles/home';
</style>
