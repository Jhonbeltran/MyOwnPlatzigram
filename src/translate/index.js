//Esto es para cuando safari no lo soporta
if (!window.Intl) {
    window.Intl = require('intl')
    require('intl/locale-data/jsonp/en-US.js')
    require('intl/locale-data/jsonp/es.js')
}
//Fechas
const IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat')
//Textos
const IntlMessageFormat = require('intl-messageformat')


require('intl-relativeformat/dist/locale-data/en.js')
require('intl-relativeformat/dist/locale-data/es.js')


/*https://github.com/yahoo/intl-relativeformat*/


const es = require('./es')
const en = require('./en-US')

let MESSAGES = {}

MESSAGES.es = es
MESSAGES['en-US'] = en

let locale = 'en-US'

module.exports = {
	message: function(text, opts){
	opts = opts || {}
	let msg = new IntlMessageFormat(MESSAGES[locale][text], locale, null)
	return msg.format(opts)
	},
	date: new IntlRelativeFormat(locale)
}


