// Importacion del modulo AllowedOrigins
const allowedOrigins = require('./allowedOrigins')

// Configuracion de Cors para solo permitir el ingreso de las paginas permitidas
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('El Ingreso esta Bloqueado por CORS'))
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
}

// Exportacion del modulo corsOptions
module.exports = corsOptions
