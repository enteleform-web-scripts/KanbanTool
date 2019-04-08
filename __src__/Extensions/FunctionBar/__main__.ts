//###  Module: CSS  ###//
import {CSS} from "~/Utils/CSS"
CSS.apply(__dirname)

//###  Module  ###//
// import {CardLegend} from "./CardLegend"
// import {ModeLegend} from "./ModeLegend"
import {KeyBinding} from "~/Utils/KeyBinding"

import {Entry     } from "./Entry"
import {Module    } from "~/Utils/Module_BaseClasses"

//###  Module: DefaultFunctions  ###//
import {Show} from "./DefaultFunctions/Show"



export class FunctionBar extends Module{
	static Show  = Show
	static Entry = Entry

	static load(...entries:Entry[]){
		console.log("@@@ FUNCTIONBAR.LOAD @@@")
		entries.forEach((entry, i) => {
			KeyBinding.add(
				`Alt + ${i + 1}`,
				entry.on_Enter,
				{preventDefault: true}
			)
		})

		// features:{
			// CardLegend:boolean,
			// ModeLegend:boolean,
		// },
		// if(features.CardLegend){CardLegend.load()}
		// if(features.ModeLegend){ModeLegend.load()}
		console.log("FunctionBar Loaded")
	}

}
