//###  Module: CSS  ###//
import {CSS} from "~/Utils/CSS"
CSS.apply(__dirname)
const cssVariables = require("./CSS_Variables.json")

//###  Module  ###//
import {KeyBinding} from "~/Utils/KeyBinding/__main__"
import {Module    } from "~/Utils/Module_BaseClasses"

//###  Module: Exports  ###//
import {Entry} from "./Entry"
import {Show } from "./DefaultFunctions/Show/__Main__"

//###  NPM  ###//
const $:any = require("jquery")


//#######################//
//###  Export: Class  ###//
//#######################//

export class FunctionBar extends Module{

	static Show  = Show
	static Entry = Entry

	position:             FunctionBar.Position
	autoMap_KeyBindings:  boolean
	keyBinding_Modifiers: KeyBinding.ModifierKey[]
	entryGroups:          Entry[][]

	constructor(
		{position,                                entryGroups          }:
		{position:FunctionBar.HorizontalPosition, entryGroups:Entry[][]}
	)
	constructor(
		{position,                              autoMap_KeyBindings,         keyBinding_Modifiers,                          entryGroups          }:
		{position:FunctionBar.VerticalPosition, autoMap_KeyBindings:boolean, keyBinding_Modifiers:KeyBinding.ModifierKey[], entryGroups:Entry[][]}
	)
	constructor(
		{position,                      autoMap_KeyBindings,          keyBinding_Modifiers,                           entryGroups          }:
		{position:FunctionBar.Position, autoMap_KeyBindings?:boolean, keyBinding_Modifiers?:KeyBinding.ModifierKey[], entryGroups:Entry[][]}
	){
		super()
		this.position             = position
		this.autoMap_KeyBindings  = autoMap_KeyBindings
		this.keyBinding_Modifiers = keyBinding_Modifiers
		this.entryGroups          = entryGroups
	}

	static load(
		...functionBars:FunctionBar[]
	){
		functionBars.forEach(functionBar => {
			functionBar.initialize()
		})
	}

	initialize(){
		if(_HorizontalPositions.includes(this.position))
			{this._initialize_HorizontalBar()}
		else
			{this._initialize_VerticalBar()}
	}

	_initialize_HorizontalBar(){
	}

	_initialize_VerticalBar(){
		_validate_AutoMapped_VerticalRows(this)

		const elements = _build_Layout(this.entryGroups)

		this.entryGroups.forEach((group, groupIndex) => {
			group.forEach((entry, entryIndex) => {
				_initialize_VerticalEntry(this, groupIndex, entry, entryIndex, elements)
			})
		})
	}

}


//###########################//
//###  Export: Namespace  ###//
//###########################//

export namespace FunctionBar{
	export enum Position{
		Left,
		Right,
		Top,
		Bottom,
	}

	export type HorizontalPosition = (FunctionBar.Position.Left | FunctionBar.Position.Right )
	export type VerticalPosition   = (FunctionBar.Position.Top  | FunctionBar.Position.Bottom)

	export enum KeyBinding_Mode{
		Automatic,
		Manual,
	}
}


//###############//
//###  Utils  ###//
//###############//

const _autoMapped_Key_Rows = KeyBinding.alphanumericKey_Rows

const _HorizontalPositions = [
	FunctionBar.Position.Left,
	FunctionBar.Position.Right,
]

function _validate_AutoMapped_VerticalRows(functionBar:FunctionBar){
	if(! functionBar.autoMap_KeyBindings)
		{return}

	const valid_GroupCount =
		(functionBar.entryGroups.length <= _autoMapped_Key_Rows.length)

	const valid_KeyCounts =
		functionBar.entryGroups.every((group, i) =>
			(group.length <= _autoMapped_Key_Rows[i].length)
		)

	if(! (valid_GroupCount && valid_KeyCounts)){
		const position = functionBar.position.valueOf()
		throw new Error(`
			Invalid FunctionBar Group/Entry Count @ ${position} Bar
		`)
	}
}

function _get_Entry_KeyBinding(
	functionBar: FunctionBar,
	groupIndex:  number,
	entry:       Entry,
	entryIndex:  number,
){
	let keyBinding = null

	if(functionBar.autoMap_KeyBindings)
		{keyBinding = _autoMapped_Key_Rows[groupIndex][entryIndex]}
	else if (entry.keyBinding)
		{keyBinding = entry.keyBinding}

	return keyBinding
}

function _initialize_VerticalEntry(
	functionBar: FunctionBar,
	groupIndex:  number,
	entry:       Entry,
	entryIndex:  number,
	elements:    any,
){
	const keyBinding = _get_Entry_KeyBinding(functionBar, groupIndex, entry, entryIndex)
	if(keyBinding)
		{_add_KeyBinding(functionBar, entry, keyBinding)}

	const cell =_build_Cell(entry, keyBinding)
	elements.rows[groupIndex].append(cell)
}

function _add_KeyBinding(
	functionBar: FunctionBar,
	entry:       Entry,
	keyBinding:  string,
){
	if(functionBar.keyBinding_Modifiers){
		keyBinding =
			[...functionBar.keyBinding_Modifiers, keyBinding]
			.join("+")
	}

	KeyBinding.add(
		keyBinding,
		entry.on_Load,
		{preventDefault: true}
	)
}

function _build_Layout(entryGroups:Entry[][]){
	const cardType_Legend = $("table.kt-extensions-card_legend").detach()
	const legendContainer = $("<div>", {"class":cssVariables.legendContainer})

	$("body")      .append(legendContainer)
	legendContainer.append(cardType_Legend)

	const rows = []
	entryGroups.forEach(group => {
		const row = $("<div>", {"class":cssVariables.legendRow})
		legendContainer.append(row)
		rows.push(row)
	})

	return {
		legendContainer,
		rows,
	}
}

function _build_Cell(entry:Entry, keyBinding:string){
	const cell = $("<div>", {"class":cssVariables.legendCell})

	let text = entry.name
	if(keyBinding)
		{text = `[${keyBinding.toUpperCase()}] &nbsp;${text}`}

	cell.html(text)
	cell.on("click", entry.on_Load)

	return cell
}
