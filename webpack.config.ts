import * as path from "path"
// import {Directory}        from "@enteleform/path"
import webpack              from "webpack"
import HtmlWebpackPlugin    from "html-webpack-plugin"
import CleanWebpackPlugin   from "clean-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"


const root     = path.resolve(__dirname)
// const root = new Directory(__dirname)

const srcPath         = path.join(root, "__src__")
// const srcPath         = new Directory(root, "__src__")
const distPath        = path.join(root, "__dist__")
// const distPath        = new Directory(root, "__dist__")
const mainPage_Folder = `./${path.basename(srcPath)}/pages/__main__`
// const mainPage_Folder = `./${srcPath.tail}/pages/__main__`

const mainScript = `./${mainPage_Folder}/script.ts`
const mainLayout = `./${mainPage_Folder}/layout.pug`


const config: ((env:any) => webpack.Configuration) = function(env:any){
	return {
		target: "web",
		entry: mainScript,
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
				"~": srcPath,
			},
			extensions: [".tsx", ".ts", ".js"],
		},
		devtool: "inline-source-map",
		devServer: {
			contentBase: `./${path.basename(distPath)}`,
			// contentBase: `./${distPath.tail}`,
		},
		plugins: [
			new CleanWebpackPlugin(),
			// new CleanWebpackPlugin([distPath.tail]),
			new HtmlWebpackPlugin({template:mainLayout}),
			new MiniCssExtractPlugin({filename:"StyleSheet.css"}),
		],
		output: {
			filename: "[name].bundle.js",
			path: distPath,
		},
	}
}

export default config
