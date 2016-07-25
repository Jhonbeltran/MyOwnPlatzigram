'use strict'
const yo = require('yo-yo')
const layout = require('../layout')

const  template = yo`<div class="container timeline">
	<div class="row">
		<div class="col s2 m10 offset-m1 l6 offset-l3">
			content
		</div>
	</div>
</div>`

module.exports = layout(template)