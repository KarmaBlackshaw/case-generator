
// libs
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// helpers
const pipe = (initial, fns) => fns.reduce((v, f) => f(v), initial)

export default {
  install: app => {
    const requireComponent = require.context(
      // The relative path of the components folder
      '../components',

      // Whether or not to look in subfolders
      true,

      // The regular expression used to match base component filenames
      /Base[A-Z]\w+\.(vue|js)$/
    )

    requireComponent.keys().forEach(fileName => {
      // Get component config
      const componentConfig = requireComponent(fileName)

      // Get PascalCase name of component
      const componentName = pipe(fileName, [
        val => val.split('/'),
        val => val.pop(),
        val => val.replace(/\.\w+$/, ''),
        val => camelCase(val),
        val => upperFirst(val)
      ])

      // Register component globally
      app.component(componentName, componentConfig.default)
    })
  }
}