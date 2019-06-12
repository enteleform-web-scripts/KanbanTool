//###  Module: HTML_Injector  ###//
require("~/Utils/HTML_Injector").inject(__dirname, {CSS:true, HTML:false})

//###  Module  ###//
import {CallbackManager           } from "./CallbackManager"
import {StyleManager              } from "./StyleManager"
import {FunctionBar               } from "~/Extensions/FunctionBar/__Main__"
import {CellProperty              } from "~/Extensions/FunctionBar/CellProperty"
import {Position, VerticalPosition} from "~/Extensions/FunctionBar/Position"
import {KeyBinding                } from "~/Utils/KeyBinding/__Main__"
import {
	get_Auto_CardTypes_Rows,
	get_Manual_CardTypes_SingleRow,
	get_Manual_CardTypes_MultipleRows,
} from "./get_Rows"


//#################//
//###  Exports  ###//
//#################//

export namespace CardType_Manager{

	export function initialize_Manual(options:{
		mode:       CardType_Manager.Mode,
		cellWidth?: number,
		cardTypes?: _CardOptions[][],
		functionBar_Options?:{
			position?:             VerticalPosition,
			autoMap_KeyBindings?:  boolean,
			keyBinding_Modifiers?: KeyBinding.ModifierKey[],
			stretchCells?:         boolean,
			cellProperties?:       CellProperty[]
		},
	}){
		const functionBar = _get_CardType_FunctionBar(
			options.mode,
			options.cardTypes,
			options.cellWidth,
			options.functionBar_Options as _FunctionBar_Options,
		)
		_initialize(functionBar, options.cardTypes)
	}

	export function initialize_Auto(options:{
		cellWidth?: number,
		functionBar_Options?:{
			position?:             VerticalPosition,
			autoMap_KeyBindings?:  boolean,
			keyBinding_Modifiers?: KeyBinding.ModifierKey[],
			stretchCells?:         boolean,
			cellProperties?:       CellProperty[]
		},
	}){
		const functionBar = _get_CardType_FunctionBar(
			CardType_Manager.Mode._AutoRows,
			[],
			options.cellWidth,
			options.functionBar_Options as _FunctionBar_Options,
		)
		_initialize(functionBar, undefined)
	}

	export enum Mode{
		_AutoRows,
		SingleRow,
		MultipleRows,
	}

}


//###############//
//###  Utils  ###//
//###############//

export interface _CardOptions{
	background_Color:     string
	foreground_Color:     string
	borderColor_Main:     string
	borderColor_Inside?:  string
	borderColor_Outside?: string
	borderAccent_Color?:  string
}

interface _FunctionBar_Options{
	position:             VerticalPosition,
	autoMap_KeyBindings:  boolean,
	keyBinding_Modifiers: KeyBinding.ModifierKey[],
	stretchCells:         boolean,
	cellProperties:       CellProperty[],
}

const _Default_FunctionBar_Options = {
	position:             Position.Bottom,
	autoMap_KeyBindings:  true,
	keyBinding_Modifiers: [],
	stretchCells:         true,
	cellProperties:       [],
}

function _initialize(functionBar:FunctionBar, cardOptions:_CardOptions[][]){
	// keep order to ensure on_Layout callbacks are prepared
	StyleManager.initialize(cardOptions)     // 1
	CallbackManager.set_Card_HoverCallback() // 2
	FunctionBar.load(functionBar)            // 3
}

function _get_CardType_FunctionBar(
	mode:                CardType_Manager.Mode,
	cardOptions:         _CardOptions[][],
	cellWidth:           number,
	functionBar_Options: _FunctionBar_Options,
){
	let cardType_Rows
		if     (mode == CardType_Manager.Mode._AutoRows   ){cardType_Rows = get_Auto_CardTypes_Rows()                     }
		else if(mode == CardType_Manager.Mode.SingleRow   ){cardType_Rows = get_Manual_CardTypes_SingleRow   (cardOptions)}
		else if(mode == CardType_Manager.Mode.MultipleRows){cardType_Rows = get_Manual_CardTypes_MultipleRows(cardOptions)}


	functionBar_Options = {..._Default_FunctionBar_Options, ...functionBar_Options}
	if(cellWidth !== undefined)
		{functionBar_Options.stretchCells = false}
	_update_FunctionBar_Options_CellWidth(functionBar_Options, cellWidth)

	return _build_FunctionBar(
		functionBar_Options as any,
		cardType_Rows,
	)
}

function _build_FunctionBar(options:_FunctionBar_Options, cardType_Rows:any[][]){
	const entryGroups = cardType_Rows.map(row =>
		row.map(cardType =>
			new FunctionBar.Entry({
				name: cardType.name,
				...CallbackManager.get_Callbacks(),
			}),
		)
	)

	return new FunctionBar({
		...options,
		entryGroups,
	})
}

function _update_FunctionBar_Options_CellWidth(options, cellWidth){
	if(cellWidth){
		options.cellProperties.push({
			functionName:"css",
			args:[{
				"width":     cellWidth,
				"min-width": cellWidth,
				"max-width": cellWidth,
			}]
		})
	}

	delete options.cellWidth
}
