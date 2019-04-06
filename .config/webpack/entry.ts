//###  Module  ###//
import {Settings    } from "../Settings"
import {CSS_Splitter} from "./Utils/CSS_Splitter"

//###  NPM  ###//
import webpack from "webpack"


const $: (string | string[] | webpack.Entry | webpack.EntryFunc) = [
	Settings.mainScript,
	...CSS_Splitter.filePaths
]


export default $
