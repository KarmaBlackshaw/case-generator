<script setup>
// composables
import useCase from '@/composables/useCase'

// libs
import { useAxios } from '@vueuse/integrations/useAxios'

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

const sampleData = computed(() => {
  const caseItem = cases.find(item => item.slug === routeCaseType.value)

  return caseItem.handler(randomQuoteData.value.content)
})
</script>

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
          <p>
            <icon-material-symbols:keyboard-double-arrow-right class="inline" />
            {{ sampleData }}
          </p>
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
            placeholder="Enter text"
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
            placeholder="Enter text to see output"
          ></textarea>

          <button
            class="
              absolute
              bottom-[10px]
              right-[10px]
              bg-emerald-500
              hover:bg-emerald-600
              text-white
              transition
              rounded-lg
              px-5 py-3
            "
            @click="copy()"
          >
            <div class="flex items-center gap-2">
              <icon-material-symbols:content-copy-outline />

              {{ copied ? 'Copied' : 'Copy' }}
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  $border-color-light: theme("colors.gray.200");
  $border-color-dark: theme("colors.gray.700");

  .home__header.header {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 30px;

    .header__title {
      font-size: 1.1em;
      font-weight: 600;
      font-family: Quicksand;
      position: relative;
    }

    .header__subtitle {
      font-size: 0.9em;
      letter-spacing: 0.025em;
      margin-bottom: 10px;
    }

    .header__sample {
      background-color: theme("colors.gray.700");
      padding: 10px;
      border-radius: 5px;
      color: theme("colors.gray.100");
      white-space: pre;
      overflow: auto;
    }
  }

  .editor {
    width: 100%;
    // height: 100%;
    flex: 1 1 auto;
    border: 1px solid $border-color-light;
    display: flex;
    margin-bottom: 10px;

    @include dark {
      border: 1px solid $border-color-dark;
    }
  }

  .editor__item {
    flex: 1 1 auto;
    height: 100%;
    display: flex;
    flex-direction: column;

    &.editor__item--left {
      border-right: 1px solid $border-color-light;

      @include dark {
        border-right: 1px solid $border-color-dark;
      }
    }
  }

  .editor__title {
    padding: 5px 10px;
    border-bottom: 1px solid $border-color-light;
    font-family: "Fira Mono", monospace;
    text-transform: uppercase;
    font-size: 0.8em;

    @include dark {
      border-bottom: 1px solid $border-color-dark;
    }
  }

  .editor__body {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    position: relative;

    textarea {
      height: inherit;
      width: 100%;
      margin: 0;
      border: none;
      padding: 10px;
      background-color: transparent;
      resize: none;

      &:focus {
        border: none;
        outline: none;
      }
    }
  }

  .editor__btn {
    border-radius: 20px;

    &.editor__btn--copy {
      position: absolute;
      bottom: 10px;
      right: 10px;
      width: 100px;
      transition: background-color 200ms ease;
      color: theme("colors.neutral.700");
      background: #42d392;
    }
  }
}

</style>
