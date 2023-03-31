# LABORATORIO APIAY

Proyecto Pagina Laboratorio APIAY
www.laboratorioApiay.xyz
BLACK DOG SOLUTION

VARIABLES
Idioma Español
Estilo de Escritura camelCase

COMENTARIOS
Idioma Español

BACKEND

DEPENDENCIAS A INSTALAR

1. Express
   npm install express --save
   funciones
   Express, es un framework para crear aplicaciones web, APIs y web services, que ha sido inspirado en la librería Sinatra de Ruby. Es software libre y de código abierto, con licencia MIT

2. Nodemon
   npm install --save-dev nodemon
   funciones
   Es una herramiento que ayuda con el desarrollo en Node.js, reinicia automaticamente el servidor cuando se realizan cambios. Es una dependencia que unicamente se utiliza en el desarrollo.

3. Dotenv
   npm install dotenv
   funciones
   Dotenv es un modulo que carga las variables de ambiente desde un archivo .env hacia el process.env. Guardando las configuraciones, separadas del codigo del proyecto.

4. Mongoose
   npm install mongoose
   funciones
   Mongoose es una herramienta diseñada para modelar objetos en MongoDB, puede trabajar en ambientes asincronicos. Mongoose soporta promesas (promises) y llamadas (callbacks).

5. Cors
   npm install cors
   funciones
   Control de acceso HTTP (CORS)
   El Intercambio de Recursos de Origen Cruzado (CORS (en-US)) es un mecanismo que utiliza cabeceras HTTP adicionales para permitir que un user agent (en-US) obtenga permiso para acceder a recursos seleccionados desde un servidor, en un origen distinto (dominio) al que pertenece. Un agente crea una petición HTTP de origen cruzado cuando solicita un recurso desde un dominio distinto, un protocolo o un puerto diferente al del documento que lo generó.
   funciones
   Cors es una herramienta diseñada para proveer el intercambio de recursos en express

6. Date-Fns
   npm install date-fns
   funciones
   date-fns es una herramienta simple pero consistente para manipular fechas en un navegador o en node.js

7. Uuid
   npm install uuid
   funciones
   uuid es una herramienta para crear identificaciones en el tiempo.

8. Bcrypt
   npm install bcrypt
   funciones
   Bcrypt es una herramienta diseñada para encriptar contraseñas.

9. Morgan
   npm install morgan
   funciones
   Morgan es un modulo que muestra las peticiones HTTP en la consola.
   Ejemplo morgan(':method :url :status :res[content-length] - :response-time ms')

10. Express Async Handler
    npm install express-async-handler
    funciones
    express async handler es un modulo que facilita manejar excepciones en el manejo de las rutas.

11. Express-Validator
    npm install express-validator
    funciones
    Express-Validator es una herramienta diseñada para validar y sanitizar funciones.

12. Cookie Parser
    npm install cookie-parser
    funciones
    Cookie parser es un modelo que permite trabajar con cookies.

13. Mongoose-Sequence
    npm install mongoose-sequence
    funciones
    Mongoose Sequence permite crear campos autoincrementales.

14. Express Rate Limit
    npm install express-rate-limit
    funciones
    Express Rate Limit es un middleware basico para limitar las repeticiones repetidas a nuestra API.

15. JSON Web Token
    npm install jsonwebtoken
    funciones
    JSON Web Token es una herramienta diseñada para guardar el token del usuario.

PROCEDIMIENTO

- Se crea la carpeta para guardar el backend <backend>
- se inicia el proyecto utilizando el comando <npm init>
- se crea el archivo de las variables de entorno <.env> en la carpeta <backend>
  en este archivo se van a colocar las configuraciones del codigo
- se crea el archivo con el ejemplo de las variables de entorno <.env.example> en la carpeta <backend> en este archivo se van a colocar el esqueleto de las configuraciones del codigo
- se crea el archivo <.gitignore> en la carpeta <backend> en este archivo se van a colocar los archivos que no queremos que se suban a github
- Se incluye en el archivo package.json estas dos configuraciones en los scripts
  "dev": "nodemon server.js",
  "start": "node server.js"
- Se crea el archivo <server.js> en la carpeta <backend>
- se crea la carpeta <config> en la carpeta <backend>, en esta carpeta se van a guardar configuraciones de varios modulos.
- se crea el archivo <allowedOrigins.js> en la carpeta <config> para guardar los enlaces que pueden modificar nuestra base de datos
- se crea el archivo <corsoptions.js> en la carpeta <config> para guardar la configuracion de Cors.
- se crea la carpeta <public> en la carpeta <backend>, en esta carpeta se van a guardar los archivos que van a ser de dominio publico.
- se crea la carpeta <css> en la carpeta <public>, en esta carpeta se van a guardar la configuracion CSS de las paginas HTML.
- se crea el archivo <style.css> en la carpeta <css>, en este archivo se van a guardar el codigo CSS.
- Se crea la carpeta <app> en la carpeta <backend>, en esta carpeta se va a guardar todos los archivos necesarios para que funcione nuestra API
- se crea la carpeta <views> en la carpeta <app>, en esta carpeta se van a guardar los archivos HTML.
- se crea el archivo <index.html> en la carpeta <views>, este archivo va a ser la pantalla principal de nuestro API.
- se crea la carpeta <routes> en la carpeta <app>, en esta carpeta se van a guardar las redirecciones a los enlaces.
- se crea el archivo <root.js> en la carpeta <routes>, este archivo va a dirigir a la pagina <index.html>.
- se crea el archivo <404.html> en la carpeta <views>, este archivo se va a mostrar cuando se ingrese a una pagina erronea.
- se crea la carpeta <middleware> en la carpeta <app>, en esta carpeta van las funcionalidades que vamos a utilizar en nuestra API.
- se crea el archivo <logger.js> en la carpeta <middleware>, en este archivo vamos a configurar el registro de movimientos de nuestro API.
- se crea el archivo <errorHandler.js> en la carpeta <middleware>, en este archivo vamos a configurar el registro de errores de nuestra API.
- se crea la carpeta <logs> en la carpeta <app>, en esta carpeta se van a guardar los registros de eventos y errores.
- se crea el archivo <dbConn.js> en la carpeta <config> para manejar la conexion a nuestra base de datos
- se crea la carpeta <models> en la carpeta <app>, en esta carpeta se van a generar los archivos con la configuracion de los modelos que se van a guardar en la base de datos.
- se crea el archivo <User.js> en la carpeta <models>, en este archivo vamos a generar el modelo para nuestros usuarios.
- se crea el archivo <users.js> en la carpeta <routes>, este archivo va a dirigir todos los direccionamientos para el usuario.
- se crea la carpeta <controllers> en la carpeta <app>, en esta carpeta se van a guardar los controladores de la base de datos.
- se crea el archivo <users.js> en la carpeta <controllers>, este archivo va a manejar todos los direccionamientos para el usuario.
- se crea el archivo <validationErrors.js> en la carpeta <middleware>, este archivo va a verificar los errores en el direccionamiento.
- se crea la base de datos en MongoDB.
