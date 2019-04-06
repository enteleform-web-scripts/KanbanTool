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

	static get_ChunkName(module, chunks, cacheGroup_Key)
		{return _get_ChunkName(module)}

	static filePaths =
		walk(Settings.sourcePath, {traverseAll:true, filter:_filter_CSS_MainFiles})
			.map(fileData => fileData.path)

}


//###############//
//###  Utils  ###//
//###############//

function _get_ChunkName(module){
	const filePath = module.issuer.resource
	if(!filePath)
		{return}

	const filePath_Head = new RegExp("^" + escape_RegEx(Settings.sourcePath))

	const fileBase =
		filePath
			.replace(filePath_Head,               "")
			.replace(Settings.css_FileBase_RegEx, "")
			.replace(/\\$/,                       "")
	return fileBase
}

function _filter_CSS_MainFiles(fileData){
	const fileBase = path.basename(fileData.path)
	const is_CSS_MainFile = (fileBase.toLowerCase() == "css.styl")
	return is_CSS_MainFile
}
