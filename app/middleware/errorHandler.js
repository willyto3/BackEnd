// Importacion de logEvents
const { logEvents } = require('./logger')

// Funcion para crear y guardar un Error
const errorHandler = (err, req, res, next) => {
  logEvents(
    `${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
    'errLog.log'
  )
  console.log(err.stack)

  const status = res.statusCode ? res.statusCode : 500

  res.status(status)

  res.json({ message: err.message })
}

// Exportamos el modulo de errorHandler
module.exports = errorHandler
