module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/mixins/_breakpoint.scss";
          @import "@/assets/scss/mixins/_theme.scss";
        `
      }
    }
  }
}
