//###  Module  ###//
import {Settings} from "../Settings"

//###  NPM  ###//
import webpack from "webpack"


const $: webpack.Output = {

	filename: "[name].js",
	path:     Settings.distributionPath,

}
