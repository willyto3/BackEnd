// Importacion de Express Rate Limit
const rateLimit = require('express-rate-limit')
const { options } = require('../routes/auth')
// Importacion de logEvents
const { logEvents } = require('./logger')

// Se va a crear una funcion para limitar el numero de peticiones por IP
const loginLimiter = rateLimit({
  windowMs: 60 * 100,
  max: 5,
  message: {
    message:
      'Ha realizado muchos intentos de ingreso, por favor intente nuevamente despues de 60 segundos'
  },
  handler: (req, res, next, options) => {
    logEvents(
      `Demasiadas Peticiones: ${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
      'errLog.log'
    )
    res.status(options.statusCode).send(options.message)
  },
  standardHeaders: true,
  legacyHeaders: false
})

module.exports = loginLimiter
