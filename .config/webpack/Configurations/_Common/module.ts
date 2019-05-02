//###  Module  ###//
import {Settings} from "../../../Settings"
import {build_ModuleRules} from "../../Utils/build_ModuleRules"
// import {extract_HTML, extract_CSS} from "./__Shared__"

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

		// {
		// 	test: /\.pug$/,
		// 	use: [
		// 		{
		// 			loader: "file-loader",
		// 			options: {
		// 				name: "[name].[ext]",
		// 				outputPath: function(url, resourcePath, context){
		// 					const relativePath =
		// 						resourcePath
		// 							.replace(Settings.sourcePath, "")
		// 							.replace(/\.pug$/, ".html")

		// 					return `./html/${relativePath}`
		// 				},
		// 			},
		// 		},

		// 		{loader:"apply-loader"},

		// 		{loader:"pug-loader", options:{pretty: true}},
		// 	],
		// },

		// {
		// 	test: /\.pug$/,
		// 	use: extract_HTML.extract(
		// 		{loader:"pug-loader", options:{pretty: true}},
		// 	)
		// },

		// {
		// 	test: /\.styl$/,
		// 	use: extract_CSS.extract(["css-loader", "stylus-loader"])
		// },

		// {
			// use: [
				// {
				// 	loader: "file-loader",
				// 	options: {
				// 		name: "[name].[ext]",
				// 		outputPath: function(url, resourcePath, context){
				// 			const relativePath =
				// 				resourcePath
				// 					.replace(Settings.sourcePath, "")
				// 					.replace(/\.styl$/, ".css")

				// 			return `./css/${relativePath}`
				// 		},
				// 	},
				// },

				// {loader:"apply-loader"},

				// {loader:"css-loader"},

				// {loader:"stylus-loader"},
			// ],
		// },

		{
			test: /\.styl$/,
			use: [
				MiniCssExtractPlugin.loader,
				"css-loader",
				"stylus-loader",
			],
		},

	]


			// loader: build_MultiLoader(

			// 		//###  Inject HTML  ###//
			// 		{loader:"pug-loader", options:{pretty: true}},

			// 		//###  Copy Files  ###//
			// 		[
			// 			// {loader:path.resolve(__dirname, "../../Utils/CustomLoader2.ts")},
			// 			{
			// 				loader:"file-loader",
			// 				// options: {name:"[path][name].WUT_LOL"},
			// 				options: {
			// 					name: "[path][name].WUT_LOL",
			// 					// useRelativePath: true,
			// 					// outputPath: "__WUT_LOL__",
			// 					// outputPath: 'function(url, resourcePath, context){\n'
			// 					// 	+ 'console.log(">>>>>", url, resourcePath, context)\n'
			// 					// 	+ 'return "./A/B/C/"\n'
			// 					// + '}',
			// 					outputPath: function(url, resourcePath, context){
			// 						console.log(">>>>>", url, resourcePath, context)
			// 						return "./A/B/C/"
			// 					},
			// 				},
			// 			},
			// 			// {loader:"pug-loader", options:{pretty: true}},
			// 		],
			// 		// options: {name:"__LOADED__/[path][name].[ext]"},
			// 	),
				// options: {
				// 	customInterpolateName: function(url, name, options){
				// 		console.log(">>>", url, name, options)
				// 		return (
				// 			url
				// 				.replace("[relativePath]", "/LOL/U/WOT/M8/")
				// 		)
				// 	},
				// }
			// 	"raw-loader",
			// use: [
			// 	{
			// 		loader: "file-loader",
			// 		options: {name:"__LOADED__/[name]"},
			// 		// options: {name:"__LOADED__/[path][name].[ext]"},
			// 	},
			// ],
			// use: extract_Pug.extract(["pug-loader"])
			// use: {
			// 	loader: "pug-loader",
			// 	options: {pretty: true},
			// },
		// },

	// ),

}


export default $
