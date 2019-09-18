//###  Module  ###//
import {is_Node} from "./Utils/Environment/__Main__"

//###  Node  ###//
import {realpathSync} from "fs"
import path           from "path"


let rootPath

if(is_Node()){
	// Redirect To Symlink Target
	rootPath = realpathSync(process.cwd())
	process.chdir(rootPath)
}
else {
	rootPath = process.cwd()
}


class S{

	//################//
	//###  Source  ###//
	//################//

	static baseURL = "https://enteleform-web-scripts.github.io/KanbanTool"

	static configFolder         = ".config"
	static sourceFolder         = "__src__"
	static distributionFolder   = "__dist__"
	static librariesFolder      = "__libs__"
	static staticFolder         = "Static"
	static mainName             = "__Main__"

	static css_FileBase = "__CSS__.styl"
	static pug_FileBase = "__HTML__.pug"

	static rootPath         = rootPath
	static sourcePath       = path.join(S.rootPath,   S.sourceFolder      )
	static distributionPath = path.join(S.rootPath,   S.distributionFolder)
	static librariesPath    = path.join(S.rootPath,   S.librariesFolder   )
	static staticPath       = path.join(S.sourcePath, S.staticFolder      )

	static mainPage_RelativePath = `./${S.sourceFolder}/${S.mainName}/`
	static mainScript            = `./${S.mainPage_RelativePath}/${S.mainName}.ts`
	static mainLayout            = `./${S.mainPage_RelativePath}/${S.mainName}.pug`


	//##############//
	//###  Dist  ###//
	//##############//

	static entryPointsFolder = "EntryPoints"
	static cssFolder         = "css"
	static htmlFolder        = "html"

	static cssExtension  = "css"
	static htmlExtension = "html"

}

export const Settings = S
