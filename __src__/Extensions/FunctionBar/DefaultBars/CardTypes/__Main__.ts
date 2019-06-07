
//###  Module  ###//
import {CardType_Manager} from "./CardType_Manager"
import {get_ManualRow_FunctionBar, get_AutoRow_FunctionBar} from "./RowBuilder"
import {Position, VerticalPosition} from "../../Position";
import {KeyBinding} from "~/Utils/KeyBinding/__Main__"


//###############//
//###  Setup  ###//
//###############//

CardType_Manager.set_Card_HoverCallback()


//#################//
//###  Exports  ###//
//#################//

export function get_CardType_FunctionBar(options:{
	position:             VerticalPosition,
	autoMap_KeyBindings:  boolean,
	keyBinding_Modifiers: KeyBinding.ModifierKey[],
	stretchCells:         boolean,
	rowCounts?:           number[]
}){
	if(options.rowCounts)
		{return get_ManualRow_FunctionBar(options)}
	else{
		{return get_AutoRow_FunctionBar(options)}
	}
}

export const Basic_CardType_FunctionBar = get_CardType_FunctionBar({
	position:             Position.Bottom,
	autoMap_KeyBindings:  true,
	keyBinding_Modifiers: [],
	stretchCells:         false,
})
