//###  Module: HTML_Injector  ###//
require("~/Utils/HTML_Injector").inject(__dirname, {CSS:true, HTML:false})

//###  Module  ###//
import {CallbackManager              } from "./CallbackManager"
import {HoverManager as _HoverManager} from "./HoverManager"
import {StyleManager                 } from "./StyleManager"
import {FunctionBar                  } from "~/Extensions/FunctionBar/__Main__"
import {CellProperty                 } from "~/Extensions/FunctionBar/CellProperty"
import {Position, VerticalPosition   } from "~/Extensions/FunctionBar/Position"
import {KeyBinding                   } from "~/Utils/KeyBinding/__Main__"
import {KeyBinding_Scopes            } from "~/Utils/KanbanTool/KeyBinding_Scopes/__Main__"
import {
	get_Auto_CardTypes_Rows,
	get_Manual_CardTypes_Rows,
	CardType_Group,
} from "./get_Rows"


//#################//
//###  Exports  ###//
//#################//

export namespace CardType_Manager{

	export const HoverManager = _HoverManager

	export function initialize_Manual(options:{
		cellWidth?: number,
		cardTypes?: _CardOptions_Group[],
		functionBar_Options?:{
			position?:             VerticalPosition,
			autoMap_KeyBindings?:  boolean,
			keyBinding_Modifiers?: KeyBinding.ModifierKey[],
			singleContainer?:      boolean,
			stretchCells?:         boolean,
			cellProperties?:       CellProperty[]
		},
	}){
		const functionBar = _get_CardType_FunctionBar(
			_Mode.Manual,
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
			_Mode.Auto,
			[],
			options.cellWidth,
			options.functionBar_Options as _FunctionBar_Options,
		)
		_initialize(functionBar, undefined)
	}

}

export type _CardOptions_Group = (_CardOptions[] | {[name:string]: _CardOptions[]})

export interface _CardOptions{
	name?:                string
	background_Color:     string
	foreground_Color:     string
	borderColor_Main:     string
	borderColor_Inside?:  string
	borderColor_Outside?: string
	borderAccent_Color?:  string
}


//###############//
//###  Utils  ###//
//###############//


enum _Mode{
	Auto,
	Manual,
}

interface _FunctionBar_Options{
	position:             VerticalPosition,
	autoMap_KeyBindings:  boolean,
	keyBinding_Modifiers: KeyBinding.ModifierKey[],
	singleContainer:      boolean,
	stretchCells:         boolean,
	cellProperties:       CellProperty[],
}

const _Default_FunctionBar_Options = {
	position:             Position.Bottom,
	autoMap_KeyBindings:  true,
	keyBinding_Modifiers: [],
	singleContainer:      false,
	stretchCells:         true,
	cellProperties:       [],
}

function _initialize(functionBar:FunctionBar, cardOptions:_CardOptions_Group[]){
	const cardOptions_Array = _get_CardOptions_Array(cardOptions)
	// keep order to ensure on_Layout callbacks are prepared
	StyleManager.initialize(cardOptions_Array) // 1
	_HoverManager.initialize()                 // 2
	FunctionBar.load(functionBar)              // 3
}

function _get_CardType_FunctionBar(
	mode:                _Mode,
	cardOptions:         _CardOptions_Group[],
	cellWidth:           number,
	functionBar_Options: _FunctionBar_Options,
){
	const cardType_Rows =
		(mode == _Mode.Auto)
		? get_Auto_CardTypes_Rows()
		: get_Manual_CardTypes_Rows(cardOptions)

	functionBar_Options = {..._Default_FunctionBar_Options, ...functionBar_Options}
	if(cellWidth !== undefined)
		{functionBar_Options.stretchCells = false}
	_update_FunctionBar_Options_CellWidth(functionBar_Options, cellWidth)

	return _build_FunctionBar(
		functionBar_Options as any,
		cardType_Rows,
	)
}

function _get_CardOptions_Array(cardOptions:_CardOptions_Group[]){
	return cardOptions.map(row =>
		(row instanceof Array)
		? row
		: Object.values(row)[0]
	)
}

function _build_FunctionBar(options:_FunctionBar_Options, cardType_Rows:CardType_Group[]){
	const entryGroups = cardType_Rows.map(row => {
		const [groupName, group] = Object.entries(row)[0]

		return {[groupName]:
			group.map(cardType =>
				new FunctionBar.Entry({
					name:             cardType.name,
					keyBinding_Scope: KeyBinding_Scopes.Card_IsHovered,
					...CallbackManager.get_Callbacks(),
				}),
			)
		}
	})

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
