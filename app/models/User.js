// Importacion de Mongoose
const mongoose = require('mongoose')

// Se genera el esquema del usuario
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    documentID: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    cargos: {
      type: String,
      required: true
    },
    isActive: {
      type: Boolean,
      default: true
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },

  // Configuracion para guarda el creado y las actualizaciones,
  // ademas que no guarde el versionkey
  {
    timestamps: true,
    versionKey: false
  }
)

// Se exporta el modulo User
module.exports = mongoose.model('User', userSchema)
