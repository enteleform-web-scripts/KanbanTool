//###  Module  ###//
import {Settings    } from "../Settings"
import {CSS_Splitter} from "./Utils/CSS_Splitter"

//###  NPM  ###//
import webpack from "webpack"


const $: webpack.Options.Optimization = {

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
