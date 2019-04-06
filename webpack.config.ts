//###  Module  ###//
import {Settings    } from "./.config/__compiled__/Settings"
import {optimization} from "./.config/__compiled__/webpack/optimization"
import {CSS_Splitter} from "./.config/__compiled__/webpack/Utils/CSS_Splitter/__main__"

//###  Node  ###//
import path from "path"

//###  NPM  ###//
// import {Directory}          from "@enteleform/path"
import webpack              from "webpack"
import HtmlWebpackPlugin    from "html-webpack-plugin"
import CleanWebpackPlugin   from "clean-webpack-plugin"
import CopyPlugin           from "copy-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

const mainPage_Folder = `./${Settings.sourceFolder}/pages/__main__`

// const mainPage_Folder = `./${srcPath.tail}/pages/__main__`

const mainScript = `./${mainPage_Folder}/script.ts`
const mainLayout = `./${mainPage_Folder}/layout.pug`


const config: ((env:any) => webpack.Configuration) = function(env:any){
	return {
		target: "web",
		entry: [mainScript, ...CSS_Splitter.filePaths],
		module: {
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
					use: [MiniCssExtractPlugin.loader, "css-loader", "stylus-loader"],
				},
			],
		},
		resolve: {
			alias: {
				"~": Settings.sourcePath,
				// "!": Settings.configPath,
			},
			extensions: [".tsx", ".ts", ".js"],
		},
		devtool: "inline-source-map",
		devServer: {
			contentBase: `./${path.basename(Settings.distributionPath)}`,
			// contentBase: `./${Settings.distributionPath.tail}`,
		},
		plugins: [
			new CleanWebpackPlugin({
				cleanOnceBeforeBuildPatterns: ["**/*", "!.git", "!.gitignore"],
			}),
			new HtmlWebpackPlugin({template:mainLayout}),
			new MiniCssExtractPlugin({
				filename:      "css/[name].css",
				chunkFilename: "css/[name].css",
			}),
			new CopyPlugin([
				{from:Settings.staticPath, to:Settings.distributionPath},
			]),
		],
		optimization,
		output: {
			filename: "__Main__.js",
			path: Settings.distributionPath,
		},
	}
}

export default config
