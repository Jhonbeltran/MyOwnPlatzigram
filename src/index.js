//En este archivo vamos a incluir toda la logica de js del lado del cliente
'use strict'
//para que nuestro nevegador sporte el await y no de el error de
/*regeneratorRuntime is not defined*/
require("babel-polyfill");
const page = require('page')

require('./homepage')
require('./signup')
require('./signin')
require('./footer')

page.start()