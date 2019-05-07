//###  Module: HTML_Injector  ###//
require("~/Utils/HTML_Injector").inject(__dirname, {CSS:true, HTML:true})

//###  Module  ###//
import {autoMapped_Key_Rows                           } from "./Settings"
import {Entry                                         } from "./Entry"
import {Layout                                        } from "./Layout"
import {Position, HorizontalPosition, VerticalPosition} from "./Position"
import {KeyBinding                                    } from "~/Utils/KeyBinding/__Main__"
import {Module                                        } from "~/Utils/Module_BaseClasses"


//#######################//
//###  Export: Class  ###//
//#######################//

export class FunctionBar extends Module{

	static Entry    = Entry
	static Position = Position

	static Show  = require("./DefaultFunctions/Show/__Main__").default
	static Hide  = require("./DefaultFunctions/Hide/__Main__").default

	layout:               Layout
	position:             Position
	autoMap_KeyBindings:  boolean
	keyBinding_Modifiers: KeyBinding.ModifierKey[]
	entryGroups:          Entry[][]

	constructor(
		{position,                    entryGroups          }:
		{position:HorizontalPosition, entryGroups:Entry[][]}
	)
	constructor(
		{position,                  autoMap_KeyBindings,         keyBinding_Modifiers,                          entryGroups          }:
		{position:VerticalPosition, autoMap_KeyBindings:boolean, keyBinding_Modifiers:KeyBinding.ModifierKey[], entryGroups:Entry[][]}
	)
	constructor(
		{position,          autoMap_KeyBindings,          keyBinding_Modifiers,                           entryGroups          }:
		{position:Position, autoMap_KeyBindings?:boolean, keyBinding_Modifiers?:KeyBinding.ModifierKey[], entryGroups:Entry[][]}
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
		// this._validate_AutoMapped_Rows()

		// this.layout = new Layout(this.entryGroups, this.position)

		// this.entryGroups.forEach((group, groupIndex) => {
		// 	group.forEach((entry, entryIndex) => {
		// 		const keyBinding = entry.initialize_KeyBinding(this.autoMap_KeyBindings, this.keyBinding_Modifiers, groupIndex, entryIndex)
		// 		this.layout.add_Cell(entry, groupIndex, keyBinding)
		// 	})
		// })

		// this.layout.update_OriginalLayout()
	}

	_validate_AutoMapped_Rows(){
		if(! this.autoMap_KeyBindings)
			{return}

		const valid_GroupCount =
			(this.entryGroups.length <= autoMapped_Key_Rows.length)

		const valid_KeyCounts =
			this.entryGroups.every((group, i) =>
				(group.length <= autoMapped_Key_Rows[i].length)
			)

		if(! (valid_GroupCount && valid_KeyCounts)){
			const position = this.position.valueOf()
			throw new Error(`
				Invalid FunctionBar Group/Entry Count @ ${position} Bar
			`)
		}
	}

}


//###########################//
//###  Export: Namespace  ###//
//###########################//

export namespace FunctionBar{

	export enum KeyBinding_Mode{
		Automatic,
		Manual,
	}

}
