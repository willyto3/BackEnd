// Se importa ValidationResult de Express-Validator
const { validationResult } = require('express-validator')

// Se crea una funcion para validar los errores
const validationErrors = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(501).json({
      ok: false,
      errors: errors.mapped()
    })
  }

  next()
}

module.exports = { validationErrors }
