//###  Module  ###//
import {Settings} from "~/Settings"


//#################//
//###  Exports  ###//
//#################//

export function inject(
	modulePath:string,
	{CSS,         HTML        }:
	{CSS:boolean, HTML:boolean}=
	{CSS:false,   HTML:false  }
){
	if(CSS ){_inject_CSS (modulePath)}
	if(HTML){_inject_HTML(modulePath)}
}


//###############//
//###  Main  ###//
//###############//

function _inject_CSS(modulePath:string){
	const url = _get_FileURL(modulePath, {folder:Settings.cssFolder, extension:"css"})

	_get_FileText(url)
		.then(css => {
			$("<style>")
				.prop("type", "text/css")
				.html(css)
				.appendTo("head")
		})
}

function _inject_HTML(modulePath:string){
	const url = _get_FileURL(modulePath, {folder:Settings.htmlFolder, extension:"html"})

	_get_FileText(url)
		.then(html => {
			console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
			console.log(html)
			console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
			// $("body").prepend(html)
		})
}


//###############//
//###  Utils  ###//
//###############//

async function _get_FileText(url:string){
	const result:{value:string|null} = {value:null}
	await __get_FileText(url, result)
	return result.value
}

function _get_FileURL(modulePath:string, {folder, extension}:{folder:string, extension:string}){
	const relativePath = _remove_SourceDirectory(modulePath)
	const filePath     = `${folder}/${relativePath}.${extension}`
	const url          = _add_BaseURL(filePath)
	return url
}

async function __get_FileText(url:string, result:{value}){
	// modified from https://stackoverflow.com/a/14446538/4955183

	var file = new XMLHttpRequest()
	file.open("GET", url, false)

	file.onreadystatechange = () => {
		const fileAcquired = (
			(file.readyState === 4)
			&& ((file.status === 200) || (file.status == 0))
		)

		if(fileAcquired)
			{result.value = file.responseText}
		else{
			throw new Error(`
				Unable to resolve URL:
					'${url}'
 			`)
		}
	}

	file.send(null)
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
