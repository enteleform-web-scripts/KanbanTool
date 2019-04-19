//###  Module  ###//
import {Settings} from "../../Settings"

//###  NPM  ###//
import webpack from "webpack"

//###  Node  ###//
import path from "path"


const $: webpack.Resolve = {

	alias: {
		"~":   Settings.sourcePath,
		"pug": path.join(Settings.librariesPath, "pug")
	},

	extensions: [
		".js",
		".ts",
		".tsx",
	],

}


export default $
