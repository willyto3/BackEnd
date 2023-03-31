// Importacion de Express
const { Router } = require('express')
// Se importa Check de Express-Validator
const { check } = require('express-validator')
// Se importa el controlador del usuario
const usersController = require('../controllers/users')
// Se importa el archivo validateCreate
const { validateCreate, validateUpdate } = require('../validators/users')

// Se declara el router
const router = Router()

router
  .route('/')
  .get(usersController.getAllUser)
  .post(validateCreate, usersController.createNewUser)
  .patch(validateUpdate, usersController.updateUser)
  .delete(usersController.deleteUser)

module.exports = router
