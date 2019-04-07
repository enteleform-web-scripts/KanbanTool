//###  Node  ###//
import path from "path"

//###  NPM  ###//
import escape_RegEx from "escape-string-regexp"


class S{

	//################//
	//###  Source  ###//
	//################//

	static configFolder         = ".config"
	static sourceFolder         = "__src__"
	static distributionFolder   = "__dist__"
	static compiledConfigFolder = "__compiled__"
	static staticFolder         = "Static"
	static pagesFolder          = "pages"
	static mainName             = "__main__"

	static css_FileBase       = "CSS.styl"
	static css_FileBase_RegEx = new RegExp(escape_RegEx(S.css_FileBase) + "$")

	static rootPath         = path.resolve(".")
	static configPath       = path.join(S.rootPath,   S.configFolder, S.compiledConfigFolder)
	static sourcePath       = path.join(S.rootPath,   S.sourceFolder      )
	static distributionPath = path.join(S.rootPath,   S.distributionFolder)
	static staticPath       = path.join(S.sourcePath, S.staticFolder      )

	static mainPage_RelativePath = `./${S.sourceFolder}/${S.pagesFolder}/${S.mainName}`
	static mainScript            = `./${S.mainPage_RelativePath}/${S.mainName}.ts`
	static mainLayout            = `./${S.mainPage_RelativePath}/${S.mainName}.pug`


	//##############//
	//###  Dist  ###//
	//##############//

	static entryPoints_Folder = "EntryPoints"

}

export const Settings = S
