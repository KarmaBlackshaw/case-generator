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
  <section class="flex flex-col gap-5">
    <section>
      <div class="text-lg font-bold">
        {{ caseDetails.title }}
      </div>

      <div
        class="
          text-sm
          dark:text-gray-100/50
        "
      >
        <p>{{ caseDetails.definition }}</p>
      </div>
    </section>

    <section>
      <div
        class="
          bg-gray-900
          rounded
          p-2
          text-gray-200
          text-sm
        "
      >
        <div v-if="isRandomQuoteLoading">
          Loading
        </div>

        <div v-else>
          <p class="mb-5 break-words">
            {{ randomQuoteData.content }}
          </p>
          <p class="break-words">
            <icon-material-symbols:keyboard-double-arrow-right class="inline" />
            {{ sampleData }}
          </p>
        </div>
      </div>
    </section>

    <div
      class="
        w-full
        h-full
        flex flex-col sm:flex-row gap-[1px]
        bg-gray-200 dark:bg-gray-200/10
        p-[1px]
    "
    >
      <div
        v-for="i in 2"
        :key="i"
        class="basis-0 grow flex flex-col gap-[1px]"
      >
        <div
          class="
            px-3 py-1
            text-sm
            font-mono
            text-gray-500
            bg-gray-50 dark:bg-gray-800
          "
        >
          {{ i === 1 ? 'Editor' : 'Output' }}
        </div>

        <div
          class="
            h-full
            flex
            flex-col
            relative
            bg-gray-50 dark:bg-gray-800
          "
        >
          <textarea
            v-if="i === 1"
            v-model="userInput"
            autofocus
            class="
              h-full
              w-full
              outline-none
              p-3
              bg-transparent
              resize-none
            "
            placeholder="Enter text"
          >
          </textarea>

          <textarea
            v-else
            v-model="output"
            disabled
            class="
              h-full
              w-full
              outline-none
              p-3
              bg-transparent
              resize-none
            "
            placeholder="Enter text to see output"
          >
          </textarea>

          <button
            v-if="i === 2"
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
  $border-color-light: theme("colors.gray.200");
  $border-color-dark: theme("colors.gray.700");
.home {
  height: 100%;
  display: flex;
  flex-direction: column;

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

}

</style>
