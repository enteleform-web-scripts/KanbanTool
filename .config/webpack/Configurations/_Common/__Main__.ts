//###  Module  ###//
import {load_ConfigSegments as load} from "../../Utils/load_ConfigSegments"

//###  NPM  ###//
import webpack from "webpack"


export const Common: webpack.Configuration = {

	target: "web",

	performance: {
		hints: false,
	},

	...load( __dirname,
		"./entry",
		"./module",
		"./node",
		"./optimization",
		"./output",
		"./plugins",
		"./resolve",
	)

}
