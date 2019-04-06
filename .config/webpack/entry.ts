//###  Module  ###//
import {Settings    } from "../Settings"
import {CSS_Splitter} from "../webpack/Utils/CSS_Splitter/__main__"

//###  NPM  ###//
import webpack from "webpack"


const $: (string | string[] | webpack.Entry | webpack.EntryFunc) = [
	Settings.mainScript,
	...CSS_Splitter.filePaths
]


export default $
