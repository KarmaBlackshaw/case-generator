export default () => {
  function get (key) {
    return process.env[`VUE_APP_${key}`]
  }

  return {
    get
  }
}
