//###  Module  ###//
import {Settings} from "../../../Settings"

//###  Node  ###//
import path from "path"

//###  NPM  ###//
import escapeStringRegEx from "escape-string-regexp"
import walk              from "klaw-sync"


export class CSS_Splitter{

	static get_ChunkName(module, chunks, cacheGroup_Key){
		const filePath = (module.resource || module.issuer.resource)
		const filePath_Head =  new RegExp("^" + escapeStringRegEx(Settings.sourcePath))
		const fileBase =
			filePath
				.replace(filePath_Head, "")
				.replace(/CSS\.styl$/,  "")
				.replace(/\\$/,         "")
		return fileBase
	}

	static filePaths =
		walk(Settings.sourcePath, {traverseAll:true, filter:_filter_CSS_MainFiles})
			.map(fileData => fileData.path)

	static fileRegExes =
		CSS_Splitter.filePaths
			.map(fileData => _get_CacheGroup_TestRegEx(fileData))

}


//###############//
//###  Utils  ###//
//###############//

function _filter_CSS_MainFiles(fileData){
	const fileBase = path.basename(fileData.path)
	const is_CSS_MainFile = (fileBase.toLowerCase() == "css.styl")
	return is_CSS_MainFile
}

function _get_CacheGroup_TestRegEx(filePath:string){
	const relativePath = filePath.replace(Settings.rootPath, "")
	return new RegExp(".*" + escapeStringRegEx(relativePath) + "$")
}
