//###  Module  ###//
import {Settings} from "../Settings"

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
