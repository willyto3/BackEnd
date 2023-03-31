// Importacion de Date-fns
const { format } = require('date-fns')
// Importacion de UUID
const { v4: uuid } = require('uuid')
// Importacion de File System
const fs = require('fs')
// Importacion de File System Promesas
const fsPromises = require('fs').promises
// Importacion de path
const path = require('path')
// Importacion de join
const { join } = require('path')

// Funcion para crear un evento
const logEvents = async (message, logFileName) => {
  // Asignamos el formato a la fecha
  const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`
  //Asignamos el formato al registro
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`

  try {
    // Comprobamos que exista el archivo y si no existe lo creamos
    if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
      await fsPromises.mkdir(__dirname, '..', 'logs')
    }
    //Si el archivo existe, añadimos el registro al archivo
    await fsPromises.appendFile(
      path.join(__dirname, '..', 'logs', logFileName),
      logItem
    )
    //Atrapamos cualquier error que pueda suceder
  } catch (err) {
    console.log(err)
  }
}
// Funcion para guardar un Evento
const logger = (req, res, next) => {
  // Se guarda el evento en el archivo <reqLog.log> en la carpeta <logs>
  logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.log')
  next()
}

// Exportamos las funciones logEvents y logger
module.exports = { logEvents, logger }
