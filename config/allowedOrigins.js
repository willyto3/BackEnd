// Se crea un arreglo de las direcciones que estan permitidas para modificar nuestra base de datos
const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  'http://localhost:5173'
]

// Se exporta el modulo allowedOrigins
module.exports = allowedOrigins
