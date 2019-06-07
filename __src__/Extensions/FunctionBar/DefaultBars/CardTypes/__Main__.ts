
//###  Module  ###//
import {CardType_Manager                                } from "./CardType_Manager"
import {get_Manual_CardType_Rows, get_Auto_CardType_Rows} from "./get_Rows"
import {FunctionBar                                     } from "../../__Main__"
import {CellProperty                                    } from "../../CellProperty"
import {Position, VerticalPosition                      } from "../../Position";
import {KeyBinding                                      } from "~/Utils/KeyBinding/__Main__"


//###############//
//###  Setup  ###//
//###############//

CardType_Manager.set_Card_HoverCallback()


//#################//
//###  Exports  ###//
//#################//

export function get_CardType_FunctionBar(options:{
	position?:             VerticalPosition,
	autoMap_KeyBindings?:  boolean,
	keyBinding_Modifiers?: KeyBinding.ModifierKey[],
	stretchCells?:         boolean,
	rowCounts?:            number[],
	cellWidth?:            number,
	cellProperties?:       CellProperty[]
}){
	const cardType_Rows =
		(options.rowCounts)
		? get_Manual_CardType_Rows(options.rowCounts)
		: get_Auto_CardType_Rows()

	const mergedOptions = {..._Default_RowBuilder_Options, ...options}

	if(options.cellWidth)
		{mergedOptions.cellProperties.push({functionName:"width", args:[options.cellWidth]})}
	delete mergedOptions.cellWidth

	return _build_FunctionBar(
		mergedOptions as any,
		cardType_Rows,
	)
}


//###############//
//###  Utils  ###//
//###############//

interface _RowBuilder_Options{
	position:             VerticalPosition,
	autoMap_KeyBindings:  boolean,
	keyBinding_Modifiers: KeyBinding.ModifierKey[],
	stretchCells:         boolean,
	rowCounts:            number[],
	cellProperties:       CellProperty[],
}

const _Default_RowBuilder_Options = {
	position:             Position.Bottom,
	autoMap_KeyBindings:  true,
	keyBinding_Modifiers: [],
	stretchCells:         true,
	rowCounts:            undefined,
	cellProperties:       [],
}

function _build_FunctionBar(options:_RowBuilder_Options, cardType_Rows:any[][]){
	const entryGroups = cardType_Rows.map(row =>
		row.map(cardType =>
			new FunctionBar.Entry({
				name: cardType.name,
				...CardType_Manager.get_Callbacks(),
			}),
		)
	)

	return new FunctionBar({
		...options,
		entryGroups,
	})
}
