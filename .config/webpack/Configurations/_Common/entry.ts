//###  Module  ###//
import {Settings    } from "../../../../__src__/Settings"
import {css_Splitter} from "./__Shared__"

//###  NPM  ###//
import webpack from "webpack"


const $: (string | string[] | webpack.Entry | webpack.EntryFunc) = {

	"__Main__": Settings.mainScript,

	...css_Splitter.entryPoints,

}


export default $
