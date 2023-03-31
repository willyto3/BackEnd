// Importacion de Mongoose
const mongoose = require('mongoose')
// Importacion de Mongoose sequence
const AutoIncrement = require('mongoose-sequence')(mongoose)

// Se genera el esquema para las muestras
const sampleSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  // Configuracion para guarda el creado y las actualizaciones, ademas que no guarde el versionkey
  {
    timestamps: true,
    versionKey: false
  }
)

sampleSchema.plugin(AutoIncrement, {
  inc_field: 'ticket',
  id: 'ticketNums',
  start_seq: 500
})

// Se exporta el modulo Sample
module.exports = mongoose.model('Sample', sampleSchema)
