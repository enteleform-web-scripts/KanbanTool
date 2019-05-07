//###  Module  ###//
import {Settings} from "../../../../__src__/Settings"

//###  NPM  ###//
import webpack from "webpack"


const $: webpack.Resolve = {

	alias: {
		"~": Settings.sourcePath,
	},

	extensions: [
		".js",
		".ts",
		".tsx",
	],

}


export default $
