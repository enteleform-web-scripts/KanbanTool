
//###  Module  ###//
import {FunctionBar} from "../../../FunctionBar/__Main__"
const {Entry} = FunctionBar
import {VerticalPosition} from "../../Position";
import {CardType_Manager, cardTypes} from "./CardType_Manager"
import {KeyBinding} from "~/Utils/KeyBinding/__Main__"


//#################//
//###  Exports  ###//
//#################//

export function get_AutoRow_FunctionBar(options:_RowBuilder_Options){
	return _build_FunctionBar({
		cardType_Rows: _get_Auto_CardType_Rows(),
		...options,
	})
}

export function get_ManualRow_FunctionBar(options:_RowBuilder_Options){
	return _build_FunctionBar({
		cardType_Rows: _get_Manual_CardType_Rows(options.rowCounts),
		...options,
	})
}


//###############//
//###  Utils  ###//
//###############//

interface _RowBuilder_Options{
	position:             VerticalPosition,
	autoMap_KeyBindings:  boolean,
	keyBinding_Modifiers: KeyBinding.ModifierKey[],
	stretchCells:         boolean,
	rowCounts?:           number[]
}

function _build_FunctionBar({
	position,
	autoMap_KeyBindings,
	keyBinding_Modifiers,
	stretchCells,
	cardType_Rows,
}:{
	position:             VerticalPosition,
	autoMap_KeyBindings:  boolean,
	keyBinding_Modifiers: KeyBinding.ModifierKey[],
	stretchCells:         boolean,
	cardType_Rows:        any[][]
}){
	const entryGroups = cardType_Rows.map(row =>
		row.map(cardType =>
			new Entry({
				name: cardType.name,
				...CardType_Manager.get_Callbacks(),
			}),
		)
	)

	return new FunctionBar({
		position,
		autoMap_KeyBindings,
		keyBinding_Modifiers,
		stretchCells,
		entryGroups,
	})
}

function _get_Auto_CardType_Rows(){
	let cardType_Rows = []
	let cardIndex     = 0

	for(const keyRow of KeyBinding.alphanumericKey_Rows){
		if(_cardTypes_Exhausted(cardIndex))
			{break}

		const cardType_Row = []
		cardType_Rows.push(cardType_Row)

		for(const key of keyRow){
			if(_cardTypes_Exhausted(cardIndex))
				{break}

			const cardType = cardTypes[cardIndex]
			cardType_Row.push(cardType)
			cardIndex += 1
		}
	}

	return cardType_Rows
}

function _cardTypes_Exhausted(cardIndex:number)
	{return (cardIndex == cardTypes.length)}

function _get_Manual_CardType_Rows(rowCounts:number[]){
	const rows = []
	let   startIndex = 0

	for(let i = 0; (i < rowCounts.length); i++){
		const count    = rowCounts[i]
		const endIndex = (startIndex + count)
		const row      = cardTypes.slice(startIndex, endIndex)
		rows.push(row)
		startIndex += count
	}

	return rows
}
