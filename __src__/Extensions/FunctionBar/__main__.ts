//###  Module  ###//
import {CardLegend} from "./CardLegend"
import {ModeLegend} from "./ModeLegend"
import {Module    } from "~/Utils/Module_BaseClasses"

export class FunctionBar extends Module{
	static load( features:{
		CardLegend:boolean,
		ModeLegend:boolean,
	}){
		if(features.CardLegend){CardLegend.load()}
		if(features.ModeLegend){ModeLegend.load()}
		console.log("FunctionBar Loaded")
	}

}
