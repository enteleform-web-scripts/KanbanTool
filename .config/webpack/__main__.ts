//###  Module  ###//
import {load_ConfigSegments as load} from "./Utils/load_ConfigSegments"

//###  NPM  ###//
import webpack from "webpack"


export default (env:any): webpack.Configuration => ({

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

})
