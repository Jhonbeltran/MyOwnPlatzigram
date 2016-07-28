'use strict'
const yo = require('yo-yo')
const translate = require('../translate')
const empty = require('empty-element')

let el = yo`<nav class="header">
			<div class="nav-wrapper">
				<div class="container">
					<div class="row">
						<div class="col s10 m6 ">
							<a href="/" class="brand-log platzigram">Platzigram</a>
						</div>
						<div class="col s2 m6 push-m5">
							<a href="#" class="btn btn-large btn-flat dropdown-button" data-activates="drop-user">
								<i class="fa fa-user" aria-hidden="true"></i>
							</a>
							<ul id="drop-user" class="dropdown-content">
								<li><a href="#">${translate.message('logout')}</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>`

//usaremos un midleware
module.exports = function header(ctx, next) {
	const container = document.getElementById('header-container')
	empty(container).appendChild(el)
	next()
}

