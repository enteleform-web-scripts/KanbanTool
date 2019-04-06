//###  Node  ###//
import path from "path"


export class Settings{
	static sourceFolder         = "__src__"
	static configFolder         = ".config"
	static compiledConfigFolder = "__compiled__"
	static staticFolder         = "Static"
	static distributionFolder   = "__dist__"

	static rootPath         = path.resolve(".")
	static configPath       = path.join(Settings.rootPath,   Settings.configFolder, Settings.compiledConfigFolder)
	static sourcePath       = path.join(Settings.rootPath,   Settings.sourceFolder      )
	static distributionPath = path.join(Settings.rootPath,   Settings.distributionFolder)
	static staticPath       = path.join(Settings.sourcePath, Settings.staticFolder      )
}
