export default () => {
  function get (key) {
    return import.meta.env[`VITE_${key}`]
  }

  return {
    get
  }
}
