//###  Module  ###//
import {Settings                       } from "../../../../__src__/Settings"
import {get_log_TimeSinceBuild_Callback} from "../../Utils/log_TimeSinceBuild"
import {pug_Splitter                   } from "./__Shared__"

//###  NPM  ###//
import webpack                      from "webpack"
import {CleanWebpackPlugin}         from "clean-webpack-plugin"
import CopyPlugin                   from "copy-webpack-plugin"
import HtmlWebpackPlugin            from "html-webpack-plugin"
import InjectPlugin                 from "webpack-inject-plugin"
import MiniCssExtractPlugin         from "mini-css-extract-plugin"
import WebpackBar                   from "webpackbar"
const  WebpackBuildNotifierPlugin = require("webpack-build-notifier")


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

	...pug_Splitter.templates.map(template => (
		new HtmlWebpackPlugin(template)
	)),

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

	new WebpackBar(),

	new WebpackBuildNotifierPlugin(),

	new InjectPlugin(
		get_log_TimeSinceBuild_Callback(),
	),

]


export default $
