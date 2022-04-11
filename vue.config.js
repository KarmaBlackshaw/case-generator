module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/import.scss";
        `
      }
    }
  }
}
