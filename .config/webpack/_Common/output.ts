//###  Module  ###//
import {Settings} from "../../Settings"

//###  NPM  ###//
import webpack from "webpack"


const $: webpack.Output = {

	filename: "[Name].js",
	path:     Settings.distributionPath,

}


export default $
