// Importacion de Express
const { Router, request } = require('express')
// Se importa el controlador del usuario
const authController = require('../controllers/auth')
// Se importa el middleware LoginLimiter
const loginLimiter = require('../middleware/loginLimiter')

// Se declara el router
const router = Router()

router.route('/').post(loginLimiter,)
router.route('/refresh').get()
router.route('/logout').post()

module.exports = router
