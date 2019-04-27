//###  Module  ###//
import {css_Splitter, pug_Splitter} from "./__Shared__"

//###  NPM  ###//
import webpack from "webpack"


const $: webpack.Options.Optimization = {

	minimize: false,

	splitChunks: {
		cacheGroups: {
			CSS: css_Splitter.cacheGroup,
			// Pug: pug_Splitter.cacheGroup,
		},
	},

}


export default $
