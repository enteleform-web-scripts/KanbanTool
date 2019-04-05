// modified from https://stackoverflow.com/a/14446538/4955183


//#################//
//###  Exports  ###//
//#################//

export async function get_FileText(url:string){
	const result:{value:string|null} = {value:null}
	await _get_FileText(url, result)
	return result.value
}


//###############//
//###  Utils  ###//
//###############//

async function _get_FileText(url:string, result:{value}){
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
