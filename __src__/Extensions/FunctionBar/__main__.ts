//###  Module: CSS  ###//
import {CSS} from "~/Utils/CSS"
CSS.apply(__dirname)

//###  Module  ###//
import {KeyBinding} from "~/Utils/KeyBinding/__main__"
import {Module    } from "~/Utils/Module_BaseClasses"

//###  Module: Exports  ###//
import {Entry} from "./Entry"
import {Show } from "./DefaultFunctions/Show"


//#######################//
//###  Export: Class  ###//
//#######################//

export class FunctionBar extends Module{

	static Show          = Show
	static Entry         = Entry

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

		this.entryGroups.forEach((group, groupIndex) => {
			group.forEach((entry, entryIndex) => {
				_initialize_VerticalEntry(this, group, groupIndex, entry, entryIndex)
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

const _HorizontalPositions = [
	FunctionBar.Position.Left,
	FunctionBar.Position.Right,
]

function _validate_AutoMapped_VerticalRows(functionBar:FunctionBar){
	const valid_GroupCount =
		(functionBar.entryGroups.length <= KeyBinding.characterKey_Rows.length)

	const valid_KeyCounts =
		functionBar.entryGroups.every((group, i) =>
			(group.length <= KeyBinding.characterKey_Rows[i].length)
		)

	if(! (valid_GroupCount && valid_KeyCounts)){
		const position = functionBar.position.valueOf()
		throw new Error(`
			Invalid FunctionBar Group/Entry Count @ ${position} Bar
		`)
	}
}

function _initialize_VerticalEntry(
	functionBar: FunctionBar,
	group:       Entry[],
	groupIndex:  number,
	entry:       Entry,
	entryIndex:  number,
){
	if(entry.keyBinding || functionBar.autoMap_KeyBindings)
		{_add_KeyBinding(functionBar, group, groupIndex, entry, entryIndex)}
}

function _add_KeyBinding(
	functionBar: FunctionBar,
	group:       Entry[],
	groupIndex:  number,
	entry:       Entry,
	entryIndex:  number,
){
	let keyBinding:string = entry.keyBinding

	if(functionBar.autoMap_KeyBindings)
		{keyBinding = KeyBinding.alphanumericKey_Rows[groupIndex][entryIndex]}

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
