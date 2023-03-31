// Se importa el modelo User
const User = require('../models/User')
// Se importa el modelo Sample
const Sample = require('../models/Sample')
// Se importa Express-Async-Handler
const asyncHandler = require('express-async-handler')
// Se importa Bcrypt
const bcrypt = require('bcrypt')

// @Descripcion obtener todos los usuarios
// @route Get /users
// @Acceso Privado
const getAllUser = asyncHandler(async (req, res) => {
  // Se buscan todos los usuarios, pero no se solicita la informacion del password
  const users = await User.find().select('-password').lean()

  // Si el arreglo usuario esta vacio, muestra un mensaje de error
  if (!users?.length) {
    return res.status(400).json({ mesage: 'No se encontraron Usuarios' })
  }
  // Respuesta de los usuarios encontrados
  res.json(users)
})

// @Descripcion Crear un nuevo usuario
// @route Post /users
// @Acceso Privado
const createNewUser = asyncHandler(async (req, res) => {
  // Se solicitan los datos de la pagina
  const {
    username,
    documentID,
    email,
    name,
    lastName,
    password,
    cargos
  } = req.body

  // Se realiza la proteccion del password
  const hashedPwd = await bcrypt.hash(password, 10)

  // Se crea un objeto con los datos del usuario
  const userObject = {
    username,
    documentID,
    email,
    name,
    lastName,
    password: hashedPwd,
    cargos
  }

  // Se guarda el usuario
  const user = await User.create(userObject)

  if (user) {
    res
      .status(201)
      .json({ message: `Se creo el nuevo usuario: ${name} ${lastName}` })
  } else {
    res.status(400).json({ message: 'Error al registrar un nuevo usuario' })
  }
})

// @Descripcion Actualizar un Usuario
// @route Patch /users
// @Acceso Privado
const updateUser = asyncHandler(async (req, res) => {
  // Se solicitan los datos de la pagina
  const {
    id,
    username,
    documentID,
    email,
    name,
    lastName,
    isAdmin,
    isActive,
    password,
    cargos
  } = req.body

  // Se verifican que todos los campos esten diligenciados
  if (
    //! Pendiente hacer estas verificaciones
    !id ||
    !username ||
    !documentID ||
    !email 
  
  ) {
    // Mensaje de error si la informacion esta incompleta
    return res.status(400).json({ message: 'Se necesita toda la informacion' })
  }

  // Se realiza la busqueda por el id del usuario
  const user = await User.findById(id).exec()

  // Se verifica que el usuario exista
  if (!user) {
    return res.status(400).json({ message: 'Usuario no encontrado' })
  }

  //Check for duplicate
  const duplicate = await User.findOne({ username }).lean().exec()
  // Allow updates to the original user
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ mesage: 'Duplicate username' })
  }

  user.username = username
  user.documentID = documentID
  user.name = name
  user.lastName = lastName
  user.email = email
  user.cargos = cargos
  user.isAdmin = isAdmin
  user.isActive = isActive

  if (password) {
    //hash password
    user.password = await bcrypt.hash(password, 10)
  }

  const updatedUser = await user.save()
  res.json({ message: `${updatedUser.username} updated` })
})

// @Descripcion Eliminar un usuario
// @route delete /users
// @Acceso Privado
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body
  if (!id) {
    return res.status(400).json({ message: 'User Id Required' })
  }

  const sample = await Sample.findOne({ user: id }).lean().exec()
  if (sample) {
    return res.status(400).json({
      message: 'El Usuario ha realizado Analisis no se puede eliminar'
    })
  }

  const user = await User.findById(id).exec()

  if (!user) {
    return res.status(400).json({ message: 'User not Found' })
  }

  const result = await user.deleteOne()

  const reply = `Username ${result.username} with ID ${result._id} deleted`
  res.json(reply)
})

module.exports = { getAllUser, createNewUser, updateUser, deleteUser }
