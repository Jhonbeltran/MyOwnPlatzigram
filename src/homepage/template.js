'use strict'
const yo = require('yo-yo')
const layout = require('../layout')
const picture = require('../picture-card')
const translate = require('../translate').message

module.exports = function (pictures) {
	var el = yo`<div class="container timeline">
		<div class="row">
			<div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
				<form enctype="multipart/form-data" class="form-upload" id="form-upload" id="formUpload">
					<div id="fileName" class="fileUpload btn btn-flat cyan">
						<span>
						<i class="fa fa-camera" aria-hidden="true"></i>${translate('upload-picture')}
						</span>
						<input name="picture" id="file" type="file" class="upload" onchange="${onchange}" />
					</div>
					<button id="btnUpload" type="submit" class="btn btn-flat cyan hide">
						${translate('upload')}
					</button>
					<button id="btnCancel" type="button" class="btn btn-flat red hide">
						<i class="fa fa-times" aria-hidden="true" onchange="${cancel}"></i>
					</button>
				</form>
			</div>
		</div>
		<div class="row">
			<div class="col s12 m10 offset-m1 l6 offset-l3">
				${pictures.map(function(pic){
					return picture(pic);
				})}
			</div>
		</div>
	</div>`

	function toggleButtons() {
		//Lo que hace toggle es que si tiene la clase hide se la quita y si no se la pone
		document.getElementByID('fileName').classList.toggle('hide')
		document.getElementByID('btnUpload').classList.toggle('hide')
		document.getElementByID('btnCancel').classList.toggle('hide')
	}

	function onchange() {
		toggleButtons()
	}

	function cancel() {
		toggleButtons()
		document.getElementByID('formUpload').reset()
	}

	return layout(el)
}


