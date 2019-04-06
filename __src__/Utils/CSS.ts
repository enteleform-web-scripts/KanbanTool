//###  Module  ###//
const Settings = require("~/Settings.json")
import {get_FileText} from "~/Utils/_get_FileText"


//#################//
//###  Exports  ###//
//#################//

export class CSS{

	static async apply(filePath:string){
		console.log(">>> CSS >>>", filePath)
		// const url = _add_BaseURL(filePath)
		// get_FileText(url)
		// 	.then(fileText => _apply_CSS(fileText))
	}

}


//###############//
//###  Utils  ###//
//###############//

function _apply_CSS(css:string){
	console.log("!!!!!!!!!!!!!!!!!!!!!!!!")
	console.log(css)
	console.log("!!!!!!!!!!!!!!!!!!!!!!!!")
	$("<style>")
		.prop("type", "text/css")
		.html(css)
		.appendTo("head")
}

function _add_BaseURL(filePath:string){
	const baseURL = Settings.baseURL
	let url = filePath.replace(/^\.?\//, `${baseURL}/`)
	if(! url.startsWith(baseURL))
		{url = `${baseURL}/${filePath}`}
	return url
}
