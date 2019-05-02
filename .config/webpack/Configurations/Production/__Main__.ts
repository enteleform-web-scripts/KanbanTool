//###  Module  ###//
import {Common                     } from "../_Common/__Main__"
import {load_ConfigSegments as load} from "../../Utils/load_ConfigSegments"

//###  NPM  ###//
import webpack from "webpack"


export default (env:any): webpack.Configuration => ({

	mode: "production",


	...Common,

	...load( __dirname,
		// "./...",
	)

})
