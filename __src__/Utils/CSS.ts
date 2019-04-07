//###  Module  ###//
const Settings = require("~/Settings.json")
import {get_FileText} from "~/Utils/_get_FileText"


//#################//
//###  Exports  ###//
//#################//

export class CSS{

	static async apply(modulePath:string)
		{_apply_CSS(modulePath)}

}


//###############//
//###  Utils  ###//
//###############//

function _apply_CSS(modulePath:string){
	const relativePath = _remove_SourceDirectory(modulePath)
	const cssPath      = `css/${relativePath}.css`
	const url          = _add_BaseURL(cssPath)

	get_FileText(url)
		.then(css => {
			console.log("!!!!!!!!!!!!!!!!!!!!!!!!")
			console.log(css)
			console.log("!!!!!!!!!!!!!!!!!!!!!!!!")
			$("<style>")
				.prop("type", "text/css")
				.html(css)
				.appendTo("head")
		})
}

function _remove_SourceDirectory(relativePath:string){
	return (
		relativePath
			.split("\\")
			.slice(1)
			.join("/")
	)
}

function _add_BaseURL(relativePath:string){
	const baseURL = Settings.baseURL
	let url = relativePath.replace(/^\.?\/?/, `${baseURL}/`)
	if(! url.startsWith(baseURL))
		{url = `${baseURL}/${relativePath}`}
	return url
}
