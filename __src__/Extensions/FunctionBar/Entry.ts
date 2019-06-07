//###  Module  ###//
import {autoMapped_Key_Rows} from "./Settings"
import {KeyBinding         } from "~/Utils/KeyBinding/__Main__"


//#################//
//###  Exports  ###//
//#################//

export class Entry{
	name:           string
	on_Layout:      ((cell:JQuery                               ) => void)
	callback:       ((event:any,                     cell:JQuery) => void)
	on_KeyBinding:  ((event:KeyboardEvent,           cell:JQuery) => void)
	on_Click:       ((event:JQuery.ClickEvent,       cell:JQuery) => void)
	on_DoubleClick: ((event:JQuery.DoubleClickEvent, cell:JQuery) => void)
	keyBinding:     KeyBinding.CharacterKey
	color:          string

	cell: JQuery

	constructor({
		name,
		callback,
		on_Click,
		on_DoubleClick,
		on_KeyBinding,
		on_Layout,
		keyBinding,
		color,
	}:{
		name:            string,
		on_Layout?:      ((cell:JQuery                               ) => void),
		callback?:       ((event:any,                     cell:JQuery) => void),
		on_KeyBinding?:  ((event:KeyboardEvent,           cell:JQuery) => void),
		on_Click?:       ((event:JQuery.ClickEvent,       cell:JQuery) => void),
		on_DoubleClick?: ((event:JQuery.DoubleClickEvent, cell:JQuery) => void),
		keyBinding?:     KeyBinding.AlphanumericKey,
		color?:          string,
	}
	){
		callback = (callback || emptyCallback)

		this.name           = name
		this.callback       = callback
		this.on_Layout      = (on_Layout     || emptyCallback)
		this.on_KeyBinding  = (on_KeyBinding || callback     )
		this.on_Click       = (event:JQuery.ClickEvent,       cell:JQuery) => {event.stopPropagation(); (on_Click       || callback)(event, cell)}
		this.on_DoubleClick = (event:JQuery.DoubleClickEvent, cell:JQuery) => {event.stopPropagation(); (on_DoubleClick || callback)(event, cell)}
		this.keyBinding     = keyBinding
		this.color          = color
	}

	initialize_KeyBinding(
		autoMap_KeyBindings:  boolean,
		keyBinding_Modifiers: KeyBinding.ModifierKey[],
		groupIndex:           number,
		entryIndex:           number,
	){
		const keyBinding = this._get_Entry_KeyBinding(autoMap_KeyBindings, groupIndex, entryIndex)

		if(keyBinding)
			{this._add_KeyBinding(keyBinding, keyBinding_Modifiers)}

		return keyBinding
	}

	_get_Entry_KeyBinding(
		autoMap_KeyBindings: boolean,
		groupIndex:          number,
		entryIndex:          number,
	){
		let keyBinding = null

		if(autoMap_KeyBindings)
			{keyBinding = autoMapped_Key_Rows[groupIndex][entryIndex]}
		else if (this.keyBinding)
			{keyBinding = this.keyBinding}

		return keyBinding
	}

	_add_KeyBinding(
		keyBinding:           KeyBinding.CharacterKey,
		keyBinding_Modifiers: KeyBinding.ModifierKey[],
	){
		KeyBinding.add(
			[...keyBinding_Modifiers, keyBinding],
			(event:KeyboardEvent) => this.on_KeyBinding(event, this.cell),
			{preventDefault: true}
		)
	}

}


//###############//
//###  Utils  ###//
//###############//

const emptyCallback = ((...args:any[]) => {})

