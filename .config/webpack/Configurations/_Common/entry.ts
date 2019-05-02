//###  Module  ###//
import {Settings                  } from "../../../Settings"
import {css_Splitter, pug_Splitter} from "./__Shared__"

//###  NPM  ###//
import webpack from "webpack"


const $: (string | string[] | webpack.Entry | webpack.EntryFunc) = {

	"__Main__": Settings.mainScript,

	...css_Splitter.entryPoints,
	// ...pug_Splitter.entryPoints,

}


export default $
