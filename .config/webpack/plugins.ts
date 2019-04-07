//###  Module  ###//
import {Settings} from "../Settings"

//###  NPM  ###//
import webpack              from "webpack"
import HtmlWebpackPlugin    from "html-webpack-plugin"
import CleanWebpackPlugin   from "clean-webpack-plugin"
import CopyPlugin           from "copy-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"


const $: webpack.Plugin[] = [

	new CleanWebpackPlugin({
		cleanOnceBeforeBuildPatterns: [
			"**/*",
			"!.git",
			"!.gitignore",
		],
	}),

	new HtmlWebpackPlugin({
		template: Settings.mainLayout,
	}),

	new MiniCssExtractPlugin({
		filename:      `${Settings.cssFolder}/[name].css`,
		chunkFilename: `${Settings.cssFolder}/[name].css`,
	}),

	new CopyPlugin([
		{
			from: Settings.staticPath,
			to:   Settings.distributionPath,
		},
	]),

]


export default $
