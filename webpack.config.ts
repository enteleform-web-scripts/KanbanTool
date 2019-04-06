//###  Module  ###//
import {Settings} from "./.config/Settings"

//###  NPM  ###//
import webpack from "webpack"


export default (env:any): webpack.Configuration => ({

	target:    "web",
	devtool:   "inline-source-map",
	devServer: {contentBase:Settings.distributionFolder},

	output: {
		filename: "__Main__.js",
		path:     Settings.distributionPath,
	},

	entry:        require("./.config/webpack/entry"       ).default,
	module:       require("./.config/webpack/module"      ).default,
	optimization: require("./.config/webpack/optimization").default,
	plugins:      require("./.config/webpack/plugins"     ).default,
	resolve:      require("./.config/webpack/resolve"     ).default,

})
