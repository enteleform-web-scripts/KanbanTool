//###  Module  ###//
import {Settings} from "../../../__src__/Settings"

//###  Node  ###//
import path from "path"

//###  NPM  ###//
import webpack      from "webpack"
import walk         from "klaw-sync"
import escape_RegEx from "escape-string-regexp"


//#################//
//###  Exports  ###//
//#################//

export class ChunkSplitter{
	_fileBase:       string
	_fileBase_RegEx: RegExp

	constructor(fileBase:string){
		this._fileBase       = fileBase
		this._fileBase_RegEx = new RegExp(escape_RegEx(fileBase) + "$")
	}

	get entryPoints(){
		const entryPoints = {}

		this._filePaths.forEach(filePath => {
			const relativePath = this._get_Relative_DirectoryPath(filePath)
			entryPoints[`${Settings.entryPointsFolder}/${relativePath}`] = filePath
		})

		return entryPoints
	}

	get cacheGroup(): webpack.Options.CacheGroupsOptions{
		return {
			name:               this._get_ChunkName.bind(this),
			test:               this._fileBase_RegEx,
			chunks:             "initial",
			enforce:            true,
			reuseExistingChunk: false,
		}
	}

	get templates(){
		return this._filePaths.map(sourcePath => {
			const relative_DirectoryPath = path.join(
				Settings.htmlFolder,
				this._get_Relative_DirectoryPath(sourcePath)
			)

			return {
				filename: `${relative_DirectoryPath}.html`,
				template: sourcePath,
			}
		})
	}

	get _filePaths(){
		return (
			walk(Settings.sourcePath, {traverseAll:true, filter:this._filter_Files.bind(this)})
				.map(fileData => fileData.path)
		)
	}

	_get_ChunkName(module, chunks, cacheGroup_Key){
		if(! (module.issuer && module.issuer.resource))
			{return}

		const filePath = module.issuer.resource
		return this._get_Relative_DirectoryPath(filePath)
	}

	_filter_Files(fileData){
		const fileBase      = path.basename(fileData.path)
		const is_TargetFile = (fileBase.toLowerCase() == this._fileBase.toLowerCase())

		return is_TargetFile
	}

	_get_Relative_DirectoryPath(filePath:string){
		return(
			filePath
				.replace(_filePath_Head,       "" )
				.replace(this._fileBase_RegEx, "" )
				.replace(/(^\\)|(\\$)/g,       "" )
				.replace(/\\/g,                "/")
		)
	}

}


//###############//
//###  Utils  ###//
//###############//

const _filePath_Head = new RegExp("^" + escape_RegEx(Settings.sourcePath))

function _replace_Extension(filePath:string, newExtension:string){
	return filePath.replace(/\.[^\.]+$/, `.${newExtension}`)
}
