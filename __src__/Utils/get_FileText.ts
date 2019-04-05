// modified from https://stackoverflow.com/a/14446538/4955183

//###############//
//###  Setup  ###//
//###############//

const _baseURL = "https://enteleform-extensions.github.io/KanbanTool"


//#################//
//###  Exports  ###//
//#################//

export async function get_FileText(url:string){
	const result = {value: null}
	await _get_FileText(url, result)
	return result.value
}


//#################//
//###  Utils  ###//
//#################//

async function _get_FileText(url:string, result:{value}){
	const fileURL = url.replace(/^\.\//, `${_baseURL}/`)

	var file = new XMLHttpRequest()
	file.open("GET", fileURL, false)

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
