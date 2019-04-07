//###  Module  ###//
import {Settings    } from "../Settings"
import {CSS_Splitter} from "./Utils/CSS_Splitter"

//###  NPM  ###//
import webpack from "webpack"

console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
console.log(CSS_Splitter.css_EntryPoints)
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

const $: (string | string[] | webpack.Entry | webpack.EntryFunc) = {
	"__Main__": Settings.mainScript,
	...CSS_Splitter.css_EntryPoints,
}


export default $
