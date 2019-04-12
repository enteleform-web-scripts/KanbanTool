//###  Module  ###//
import {Common                     } from "../_Common/__main__"
import {load_ConfigSegments as load} from "../_Utils/load_ConfigSegments"

//###  NPM  ###//
import webpack from "webpack"


export default (env:any): webpack.Configuration => ({

	mode: "production",


	...Common,

	...load( __dirname,
		// "./...",
	)

})
