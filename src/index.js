//En este archivo vamos a incluir toda la logica de js del lado del cliente
'use strict'

const page = require('page')
require('moment/locale/es')

require('./homepage')
require('./signup')
require('./signin')

page.start()