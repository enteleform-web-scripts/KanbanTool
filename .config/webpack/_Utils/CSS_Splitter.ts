//###  Module  ###//
import {Settings} from "../../Settings"

//###  Node  ###//
import path from "path"

//###  NPM  ###//
import walk         from "klaw-sync"
import escape_RegEx from "escape-string-regexp"


//#################//
//###  Exports  ###//
//#################//

export class CSS_Splitter{

	static get css_EntryPoints(){
		const entryPoints = {}

		_filePaths.forEach(filePath => {
			const fileBase = _get_RelativePath(filePath)
			entryPoints[`${Settings.entryPointsFolder}/${fileBase}`] = filePath
		})

		return entryPoints
	}

	static get_ChunkName(module, chunks, cacheGroup_Key){
		if(! (module.issuer && module.issuer.resource))
			{return}

		const filePath = module.issuer.resource
		return _get_RelativePath(filePath)
	}

}


//###############//
//###  Utils  ###//
//###############//

const _filePath_Head = new RegExp("^" + escape_RegEx(Settings.sourcePath))

const _filePaths =
	walk(Settings.sourcePath, {traverseAll:true, filter:_filter_CSS_MainFiles})
		.map(fileData => fileData.path)

function _filter_CSS_MainFiles(fileData){
	const fileBase = path.basename(fileData.path)
	const is_CSS_MainFile = (fileBase.toLowerCase() == Settings.css_FileBase.toLowerCase())
	return is_CSS_MainFile
}

function _get_RelativePath(filePath:string){
	return(
		filePath
			.replace(_filePath_Head,              "" )
			.replace(Settings.css_FileBase_RegEx, "" )
			.replace(/(^\\)|(\\$)/g,              "" )
			.replace(/\\/g,                       "/")
	)
}

