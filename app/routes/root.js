// Importacion de Express
const express = require('express')
// Se declara el router
const router = express.Router()
// Importacion de path
const path = require('path')

// Cuando se ingresa a nuestro API, muestra la pagina index.html
router.get('^/$|/index(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

// Se exporta el modulo router
module.exports = router
