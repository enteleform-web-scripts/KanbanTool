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

	static get css_EntryPoints()
		{return _get_CSS_EntryPoints()}

	static get_ChunkName(module, chunks, cacheGroup_Key)
		{return _get_ChunkName(module)}

}


//###############//
//###  Utils  ###//
//###############//

const _filePath_Head = new RegExp("^" + escape_RegEx(Settings.sourcePath))

const _filePaths =
	walk(Settings.sourcePath, {traverseAll:true, filter:_filter_CSS_MainFiles})
		.map(fileData => fileData.path)

function _get_RelativePath(filePath:string){
	return(
		filePath
			.replace(_filePath_Head,              "" )
			.replace(Settings.css_FileBase_RegEx, "" )
			.replace(/(^\\)|(\\$)/g,              "" )
			.replace(/\\/g,                       "/")
	)
}

function _filter_CSS_MainFiles(fileData){
	const fileBase = path.basename(fileData.path)
	const is_CSS_MainFile = (fileBase.toLowerCase() == "css.styl")
	return is_CSS_MainFile
}

function _get_CSS_EntryPoints(){
	const entryPoints = {}

	_filePaths.forEach(filePath => {
		const fileBase = _get_RelativePath(filePath)
		entryPoints[`${Settings.entryPoints_Folder}/${fileBase}`] = filePath
	})

	return entryPoints
}


function _get_ChunkName(module){
	if(! module.issuer)
		{return}

	const filePath = module.issuer.resource
	return _get_RelativePath(filePath)
}
