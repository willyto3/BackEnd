// Se importa Check de Express-Validator
const { check } = require('express-validator')
// Se importa el archivo validationErrors
const { validationErrors } = require('../middleware/validationErrors')
// Se importa el modelo del User
const User = require('../models/User')

// Funcion para realizar las verificaciones al crear un usuario
const validateCreate = [
  
  //USERNAME
  // Que no se encuentre vacio el username
  check('username', 'El nombre de usuario es Requerido')
    .exists()
    .notEmpty()
    // Que no este duplicado el username en la base de datos
    .custom(async (value) => {
      const user = await User.findOne({ username: value }).lean().exec()
      if (user) {
        return Promise.reject('Username ya esta registrado')
      }
    }),

  //DOCUMENTO ID
  // Que no se encuentre vacio el documento ID
  check('documentID', 'El Documento de Identidad del usuario es Requerido')
    .exists()
    .notEmpty()
    // Que no este duplicado el documento ID en la base de datos
    .custom(async (value) => {
      const user = await User.findOne({ documentID: value }).lean().exec()
      if (user) {
        return Promise.reject('Este Documento de Identidad ya esta registrado')
      }
    }),

  //PASSWORD
  // Que la contraseña exista, no se encuentre vacio y que no sea menor a 5 digitos
  check('password', 'La contraseña debe tener minimo 5 caracteres')
    .exists()
    .notEmpty()
    .isLength({ min: 5 }),

  //EMAIL
  // Que el email exista, no se encuentre vacio y que cumpla con el formato de un correo
  check('email', 'Debe ser un formato valido para Email')
    .exists()
    .notEmpty()
    .isEmail()
    // Que no este duplicado el email en la base de datos
    .custom(async (value) => {
      const user = await User.findOne({ email: value }).lean().exec()
      if (user) {
        return Promise.reject('Email ya esta registrado')
      }
    }),

  //NAME
  // Que el name exista, no se encuentre vacio y que no sea menor a 2 digitos
  check('name', 'El nombre del usuario es Requerido')
    .exists()
    .notEmpty()
    .isLength({ min: 2 })
    .withMessage('El nombre no puede ser menor a 2 caracteres'),

  //LASTNAME
  // Que el lastName exista, no se encuentre vacio y que no sea menor a 2 digitos
  check('lastName', 'El apellido del usuario es Requerido')
    .exists()
    .notEmpty()
    .isLength({ min: 2 })
    .withMessage('El apellido no puede ser menor a 2 caracteres'),

  //CARGOS
  // Que exista el Cargo, no se encuentre vacio y que sea un array
  check('cargos', 'Se necesita especificar el puesto de trabajo ejecutado')
    .exists()
    .notEmpty(),

  (req, res, next) => {
    validationErrors(req, res, next)
  }
]

// Funcion para realizar las verificaciones al Actualizar un usuario
const validateUpdate = [
  //USERNAME
  // Que no se encuentre vacio el username
  check('username', 'El nombre de usuario es Requerido').exists().notEmpty(),
  // // Que no este duplicado el username en la base de datos
  // .custom(async (value) => {
  //   const user = await User.findOne({ username: value }).lean().exec()
  //   if (user) {
  //     return Promise.reject('Username ya esta registrado')
  //   }
  // })
  //DOCUMENTO ID
  // Que no se encuentre vacio el documento ID
  check('documentID', 'El Documento de Identidad del usuario es Requerido')
    .exists()
    .notEmpty(),
  // Que no este duplicado el documento ID en la base de datos
  // .custom(async (value) => {
  //   const user = await User.findOne({ documentID: value }).lean().exec()
  //   if (user) {
  //     return Promise.reject('Este Documento de Identidad ya esta registrado')
  //   }
  // })
  //PASSWORD
  //! Debe ser opcional
  // // Que la contraseña exista, no se encuentre vacio y que no sea menor a 5 digitos
  // check('password', 'La contraseña debe tener minimo 5 caracteres')
  //   .exists()
  //   .notEmpty()
  //   .isLength({ min: 5 }),
  //EMAIL
  // Que el email exista, no se encuentre vacio y que cumpla con el formato de un correo
  check('email', 'Debe ser un formato valido para Email')
    .exists()
    .notEmpty()
    .isEmail(),
  // // Que no este duplicado el email en la base de datos
  // .custom(async (value) => {
  //   const user = await User.findOne({ email: value }).lean().exec()
  //   if (user) {
  //     return Promise.reject('Email ya esta registrado')
  //   }
  // })
  //NAME
  // Que el name exista, no se encuentre vacio y que no sea menor a 2 digitos
  check('name', 'El nombre del usuario es Requerido')
    .exists()
    .notEmpty()
    .isLength({ min: 2 })
    .withMessage('El nombre no puede ser menor a 2 caracteres'),
  //LASTNAME
  // Que el lastName exista, no se encuentre vacio y que no sea menor a 2 digitos
  check('lastName', 'El apellido del usuario es Requerido')
    .exists()
    .notEmpty()
    .isLength({ min: 2 })
    .withMessage('El apellido no puede ser menor a 2 caracteres'),

  //CARGOS
  // Que exista el Cargo, no se encuentre vacio y que sea un array
  check('cargos', 'Se necesita especificar el puesto de trabajo ejecutado')
    .exists()
    .notEmpty(),

  // IS ADMIN
  // Comprobar que IS ADMIN sea un boolean
  check(
    'isAdmin',
    'Se necesita especificar si el usuario se encuentra activo'
  ).isBoolean(),

  // ACTIVE
  // Comprobar que active sea un boolean
  check(
    'isActive',
    'Se necesita especificar si el usuario se encuentra activo'
  ).isBoolean(),

  (req, res, next) => {
    validationErrors(req, res, next)
  }
]

module.exports = { validateCreate, validateUpdate }
