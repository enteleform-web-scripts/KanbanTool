//###  NPM  ###//
import webpack              from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"


const $: webpack.Module = {

	rules: [

		{
			test:   /\.tsx?$/,
			loader: "ts-loader",
		},

		{
			test: /\.pug$/,
			use: {loader:"pug-loader", options:{pretty: true}},
		},

		{
			test: /\.styl$/,
			use: [
				MiniCssExtractPlugin.loader,
				"css-loader",
				"stylus-loader",
			],
		},

	]

}


export default $
