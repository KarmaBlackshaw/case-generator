const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))
const path = Promise.promisifyAll(require('path'))

;(async () => {
  const files = await fs.readdirAsync(__dirname)

  files.forEach(async curr => {
    if (curr === 'index.js') {
      return
    }

    const newName = curr.replace(/-v24-latin-/g, '-')

    await fs.renameAsync(path.join(__dirname, curr), path.join(__dirname, newName))
  })
})()
