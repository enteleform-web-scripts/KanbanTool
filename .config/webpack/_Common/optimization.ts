//###  Module  ###//
import {Settings    } from "../../Settings"
import {CSS_Splitter} from "../_Utils/CSS_Splitter"

//###  NPM  ###//
import webpack from "webpack"


const $: webpack.Options.Optimization = {

	minimize: false,

	splitChunks: {
		cacheGroups: {
			CSS: {
				name:               CSS_Splitter.get_ChunkName,
				test:               Settings.css_FileBase_RegEx,
				chunks:             "initial",
				enforce:            true,
				reuseExistingChunk: false,
			},
		},
	},

}


export default $
