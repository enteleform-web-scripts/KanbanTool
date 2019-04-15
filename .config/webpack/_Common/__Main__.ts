//###  Module  ###//
import {load_ConfigSegments as load} from "../_Utils/load_ConfigSegments"

//###  NPM  ###//
import webpack from "webpack"


export const Common: webpack.Configuration = {

	target: "web",

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
