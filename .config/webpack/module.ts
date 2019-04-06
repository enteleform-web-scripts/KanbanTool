//###  NPM  ###//
import MiniCssExtractPlugin from "mini-css-extract-plugin"

//###  NPM  ###//
import webpack from "webpack"


const $: webpack.Module = {

	rules: [
		{
			test: /\.tsx?$/,
			use: "ts-loader",
		},
		{
			test: /\.pug?$/,
			use: "pug-loader",
		},
		{
			test: /\.styl$/,
			use: [
				MiniCssExtractPlugin.loader,
				"css-loader",
				"stylus-loader",
			],
		},
	],

}


export default $
