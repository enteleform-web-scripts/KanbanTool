//###  Module  ###//
import {Settings} from "../Settings"

//###  NPM  ###//
import webpack from "webpack"


export default (env:any): webpack.Configuration => ({

	target: "web",

	output: {
		filename: "[name].js",
		path:     Settings.distributionPath,
	},

	entry:        require("./entry"       ).default,
	module:       require("./module"      ).default,
	optimization: require("./optimization").default,
	plugins:      require("./plugins"     ).default,
	resolve:      require("./resolve"     ).default,

})
