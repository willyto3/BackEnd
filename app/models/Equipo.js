// Importacion de Mongoose
const mongoose = require('mongoose')

// Se genera el esquema del usuario
const equipoSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    nombre: {
      type: String,
      required: true,
      unique: true
    },
    serial: {
      type: String,
      required: true,
      unique: true
    },
    marca: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  // Configuracion para guarda el creado y las actualizaciones, ademas que no guarde el versionkey
  {
    timestamps: true,
    versionKey: false
  }
)

// Se exporta el modulo User
module.exports = mongoose.model('Equipo', equipoSchema)
