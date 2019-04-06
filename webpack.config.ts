import * as path            from "path"
// import {Directory}          from "@enteleform/path"
import webpack              from "webpack"
import HtmlWebpackPlugin    from "html-webpack-plugin"
import CleanWebpackPlugin   from "clean-webpack-plugin"
import CopyPlugin           from "copy-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import escapeStringRegEx    from "escape-string-regexp"

const root     = path.resolve(__dirname)
// const root = new Directory(__dirname)

const srcPath         = path.join(root, "__src__")
// const srcPath         = new Directory(root, "__src__")
const distPath        = path.join(root, "__dist__")
const staticPath      = path.join(srcPath, "Static")
// const distPath        = new Directory(root, "__dist__")
const mainPage_Folder = `./${path.basename(srcPath)}/pages/__main__`
// const mainPage_Folder = `./${srcPath.tail}/pages/__main__`

const mainScript = `./${mainPage_Folder}/script.ts`
const mainLayout = `./${mainPage_Folder}/layout.pug`


const config: ((env:any) => webpack.Configuration) = function(env:any){
	return {
		target: "web",
		// entry: [mainScript],
		// entry: [mainScript, `${srcPath}/Extensions/FunctionBar/CSS.styl`],
		entry: [mainScript, `${srcPath}/Extensions/FunctionBar/CSS.styl`, `${srcPath}/Extensions/FunctionBar/CSS2.styl`],
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
			new CleanWebpackPlugin({
				cleanOnceBeforeBuildPatterns: ["**/*", "!.git", "!.gitignore"],
			}),
			new HtmlWebpackPlugin({template:mainLayout}),
			new MiniCssExtractPlugin({
				filename:      "css/[name].css",
				chunkFilename: "css/[name].css",
			}),
			new CopyPlugin([
				{from:staticPath, to:distPath},
			]),
		],
		optimization: {
			splitChunks: {
				// name(module, chunks, cacheGroupKey){
				// 	console.log("!!!!!!!!!!!!")
				// 	console.log(module, chunks, cacheGroupKey)
				// 	console.log("!!!!!!!!!!!!")
				// 	return
				// },
				// chunks(chunk){
				// 	console.log("!!!!!!!!!!!!")
				// 	const identifier = chunk.entryModule._identifier
				// 	// const nameSegments = identifier.split("__src__")
				// 	// if(! (nameSegments.length > 0))
				// 	// 	{return false}
				// 	// const name =
				// 	// 	nameSegments[nameSegments.length - 1]
				// 	// 	.replace(/\.styl$/, "")
				// 	// console.log(name)
				// 	console.log(chunk.name)
				// 	console.log("!!!!!!!!!!!!")
				// 	// chunk.name = name
				// 	return true
				// },
				cacheGroups: {
					a: {
						name(module, chunks, cacheGroup_Key){
							const filePath = (module.resource || module.issuer.resource)
							const filePath_Head =  new RegExp("^" + escapeStringRegEx(srcPath))
							const fileBase =
								filePath
									.replace(filePath_Head, "")
									.replace(/CSS\.styl$/,  "")
									.replace(/\\$/,         "")
							return fileBase
						},
						test:    /CSS\.styl$/,
						chunks:  "all",
						enforce: true,
					},
					b: {
						name: "lololol",
						// name(module, chunks, cacheGroupKey){
						// 	console.log("!!!!!!!!!!!!")
						// 	console.log(module, chunks, cacheGroupKey)
						// 	console.log("!!!!!!!!!!!!")
						// 	return "styles--UWOTM8"
						// },
						test:    /CSS2\.styl$/,
						chunks:  "all",
						enforce: true,
					},
				},
				// cacheGroups: {
				// 	vendors: false
				// },
			}
			// splitChunks: {
			// 	cacheGroups: {
			// 		a: {
			// 			name:    "styles-lol",
			// 			test:    /CSS\.styl$/,
			// 			chunks:  "all",
			// 			enforce: true,
			// 		},
			// 		b: {
			// 			name:    "styles-wot",
			// 			test:    /CSS2\.styl$/,
			// 			chunks:  "all",
			// 			enforce: true,
			// 		},
			// 	},
			// },
			// runtimeChunk: true,
		},
		output: {
			filename: "__Main__.js",
			path: distPath,
		},
	}
}

export default config
