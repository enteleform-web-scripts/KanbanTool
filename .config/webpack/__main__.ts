//###  Module  ###//
import {Settings} from "../Settings"

//###  NPM  ###//
import webpack from "webpack"


export default (env:any): webpack.Configuration => ({

	target:    "web",
	devtool:   "source-map",
	devServer: {contentBase:Settings.distributionFolder},

	output: {
		filename: "__Main__.js",
		path:     Settings.distributionPath,
	},

	entry:        require("./entry"       ).default,
	module:       require("./module"      ).default,
	optimization: require("./optimization").default,
	plugins:      require("./plugins"     ).default,
	resolve:      require("./resolve"     ).default,

})
