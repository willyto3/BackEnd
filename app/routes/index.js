// Importacion de Express
const { Router } = require('express')
// Importacion de File system
const fs = require('fs')
// Se declara el router
const router = Router()

// Se declara la direccion donde se encuentras los archivos
const PATH_ROUTES = __dirname

// Se remueve la extension del archivo
const removeExtension = fileName => {
  return fileName.split('.').shift()
}
// Se lee el directorio de forma syncronica
fs.readdirSync(PATH_ROUTES).filter(file => {
  const name = removeExtension(file)
  if (name !== 'index') {
    console.log(`Cargando la ruta ${name}`)
    router.use(`/${name}`, require(`./${file}`))
  }
})

// Exportamos el Router
module.exports = router
