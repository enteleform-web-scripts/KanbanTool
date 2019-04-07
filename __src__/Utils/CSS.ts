//###  Module  ###//
const Settings = require("~/Settings.json")
import {get_FileText} from "~/Utils/_get_FileText"


//#################//
//###  Exports  ###//
//#################//

export class CSS{

	static async apply(modulePath:string){
		const url = _get_ModuleCSS_URL(modulePath)

		get_FileText(url)
			.then(css => {
				$("<style>")
					.prop("type", "text/css")
					.html(css)
					.appendTo("head")
			})
	}

}


//###############//
//###  Utils  ###//
//###############//

function _get_ModuleCSS_URL(modulePath:string){
	const relativePath = _remove_SourceDirectory(modulePath)
	const cssPath      = `css/${relativePath}.css`
	const url          = _add_BaseURL(cssPath)
	return url
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
