// Importacion del archivo .env
require('dotenv').config()

// IMPORTACION DE DEPENDENCIAS
// Importacion de Express
const express = require('express')
// Importacion de Cors
const cors = require('cors')
// Importacion de Mongoose
const mongoose = require('mongoose')
// Importacion de path
const path = require('path')
// Importacion de Morgan
const morgan = require('morgan')
// Importacion de Cookie-Parser
const cookieParser = require('cookie-parser')

// IMPORTACION DE MODULOS
// Importacion de la configuracion de Cors
const corsOptions = require('./config/corsOptions')
// Importacion del logger y logevents
const { logger, logEvents } = require('./app/middleware/logger')
// Importacion del errorHandler
const errorHandler = require('./app/middleware/errorHandler')
// Importacion de la conexion a la base de datos
const connectDB = require('./config/dbConn')

// Se declara el puerto de trabajo
const PORT = process.env.PORT || 5000

// Se muestra en consola la etapa de desarrollo que llevamos
console.log(process.env.NODE_ENV)

// se solicita la Conexion a la base de datos
connectDB()

// Inicio de Express
const app = express()

// MIDDLEWARE
// Codigo para poder usar el metodo logger
app.use(logger)
// Codigo para poder usar documentos JSON
app.use(express.json())
// Codigo para usar Cookie Parser
app.use(cookieParser())
// Codigo para usar Cors
app.use(cors(corsOptions))
// Codigo para usar Morgan
app.use(morgan('tiny'))

// Codigo para usar la carpeta publica de los archivos estaticos
app.use('/', express.static(path.join(__dirname, 'public')))

// Rutas
// Ruta Principal
app.use('/', require('./app/routes/root'))
// Rutas dinamicas
app.use('/', require('./app/routes'))

// Ruta 404
app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, './app/views', '404.html'))
  } else if (req.accepts('json')) {
    res.json({ message: '404 Pagina No Encontrada' })
  } else {
    res.type('txt').send('404 Pagina No Encontrada')
  }
})

// Codigo para poder usar el metodo errorHandler
app.use(errorHandler)

// Inicio de la Aplicación y primera conexion a la base datos
mongoose.connection.once('open', () => {
  console.log('Conectado a MongoDB')
  app.listen(PORT, () => console.log(`Server Corriendo en el puerto ${PORT}`))
})

// Manejo de errores al conectar a la base de datos
mongoose.connection.on('Error', err => {
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    'mongoErrLog.log'
  )
})
