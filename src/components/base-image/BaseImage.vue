<template>
  <img
    :src="imgSrc"
    alt=""
  >
</template>

<script>
import { computed, inject } from 'vue'

export default {
  name: "BaseImage",

  props: {
    srcDark: {
      type: String,
      required: true,
      default: ''
    },

    srcLight: {
      type: String,
      required: true,
      default: ''
    }
  },

  setup (props) {
    const theme = inject('theme')

    const imgSrc = computed(() => {
      return props[theme.isDark.value ? 'srcDark' : 'srcLight']
    })

    return {
      imgSrc
    }
  }
}
</script>