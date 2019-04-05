// modified from https://stackoverflow.com/a/14446538/4955183


export function get_FileText(filePath:string, callback:((text:string) => void)){
	var file = new XMLHttpRequest()
	file.open("GET", filePath, false)

	file.onreadystatechange = () => {
		const fileAcquired = (
			(file.readyState === 4)
			&& ((file.status === 200) || (file.status == 0))
		)

		if(fileAcquired)
			{callback(file.responseText)}
	}

	file.send(null)
}
