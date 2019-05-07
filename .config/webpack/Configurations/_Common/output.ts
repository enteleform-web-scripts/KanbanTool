//###  Module  ###//
import {Settings} from "../../../../__src__/Settings"

//###  NPM  ###//
import webpack from "webpack"


const $: webpack.Output = {

	filename: "[name].js",
	path:     Settings.distributionPath,

}


export default $
