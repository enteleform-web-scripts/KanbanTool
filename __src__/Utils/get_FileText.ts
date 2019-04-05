// modified from https://stackoverflow.com/a/14446538/4955183


const _baseURL = "https://enteleform-extensions.github.io/KanbanTool"


export async function get_FileText(url:string){
	const fileURL = url.replace(/^\.\//, `${_baseURL}/`)
	var file = new XMLHttpRequest()
	file.open("GET", fileURL, false)

	file.onreadystatechange = () => {
		const fileAcquired = (
			(file.readyState === 4)
			&& ((file.status === 200) || (file.status == 0))
		)

		if(fileAcquired)
			{return file.responseText}
		else{
			throw new Error(`
				Unable to resolve URL:
					'${url}'
 			`)
		}
	}

	file.send(null)
}
