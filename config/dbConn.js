// Importacion de Mongoose
const mongoose = require('mongoose')

//Funcion para conectar a la base de Datos
const connectDB = async () => {
  // Conexion a la base de datos
  try {
    await mongoose.connect(process.env.DATABASE_URI, { dbName: "LaboratorioApiay" })
    // Captura de Errores
  } catch (err) {
    console.log(err)
  }
}

// Exportacion del modulo connectDB
module.exports = connectDB
