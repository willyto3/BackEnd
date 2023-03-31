// Importacion de Express
const { Router } = require('express')
// Se importa Check de Express-Validator
const { check } = require('express-validator')

// Se declara el router
const router = Router()

router
  .route('/')
  .get()
  .post()
  .patch()
  .delete()

module.exports = router
