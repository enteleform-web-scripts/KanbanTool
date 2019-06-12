//###  Module: HTML_Injector  ###//
require("~/Utils/HTML_Injector").inject(__dirname, {CSS:true, HTML:true})

//###  Module  ###//
import {autoMapped_Key_Rows} from "./Settings"
import {CellProperty       } from "./CellProperty"
import {Entry              } from "./Entry"
import {Divider            } from "./Divider"
import {Layout             } from "./Layout"
import {KeyBinding         } from "~/Utils/KeyBinding/__Main__"
import {Module             } from "~/Utils/Module_BaseClasses"
import {
	Position,
	HorizontalPosition, VerticalPosition,
	is_HorizontalPosition, is_VerticalPosition,
} from "./Position"


//#######################//
//###  Export: Class  ###//
//#######################//

export class FunctionBar extends Module{

	static Entry    = Entry
	static Divider  = Divider
	static Position = Position

	layout:               Layout
	position:             Position
	autoMap_KeyBindings:  boolean
	keyBinding_Modifiers: KeyBinding.ModifierKey[]
	entryGroups:          FunctionBar_Entry[][]
	stretchCells:         boolean
	cellProperties:       CellProperty[]

	constructor(  //  Left || Right
		{position,                    entryGroups,                       cellProperties                }:
		{position:HorizontalPosition, entryGroups:FunctionBar_Entry[][], cellProperties?:CellProperty[]}
	)
	constructor(  //  Top || Bottom
		{position,                  entryGroups,                       autoMap_KeyBindings,         keyBinding_Modifiers,                          stretchCells,         cellProperties                }:
		{position:VerticalPosition, entryGroups:FunctionBar_Entry[][], autoMap_KeyBindings:boolean, keyBinding_Modifiers:KeyBinding.ModifierKey[], stretchCells:boolean, cellProperties?:CellProperty[]}
	)
	constructor(
		{position,          entryGroups,                       autoMap_KeyBindings,          keyBinding_Modifiers,                           stretchCells,          cellProperties                }:
		{position:Position, entryGroups:FunctionBar_Entry[][], autoMap_KeyBindings?:boolean, keyBinding_Modifiers?:KeyBinding.ModifierKey[], stretchCells?:boolean, cellProperties?:CellProperty[]}
	){
		super()
		this.position             = position
		this.entryGroups          = entryGroups
		this.autoMap_KeyBindings  = (autoMap_KeyBindings  || false)
		this.keyBinding_Modifiers = (keyBinding_Modifiers || []   )
		this.stretchCells         = (stretchCells         || false)
		this.cellProperties       = (cellProperties       || []   )
	}

	static load(
		...functionBars:FunctionBar[]
	){
		functionBars.forEach(functionBar => {
			functionBar.initialize()
		})

		Layout.initialize_ToggleBindings()
	}

	initialize(){
		this._validate_AutoMapped_Rows()
		this.layout = new Layout(this)
	}


	get is_HorizontalBar()
		{return is_HorizontalPosition(this.position)}

	get is_VerticalBar()
		{return is_VerticalPosition(this.position)}

	get entryGroups_WithoutDividers(){
		return (
			this.entryGroups.map(group =>
				group.filter(item => (item instanceof Entry))
			)
		)
	}

	_validate_AutoMapped_Rows(){
		if(! this.autoMap_KeyBindings)
			{return}

		const entryGroups_WithoutDividers = this.entryGroups_WithoutDividers

		const valid_GroupCount =
			(entryGroups_WithoutDividers.length <= autoMapped_Key_Rows.length)

		const valid_KeyCounts =
			entryGroups_WithoutDividers.every((group, i) =>
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


//###############//
//###  Utils  ###//
//###############//

type FunctionBar_Entry = (Entry | Divider)
