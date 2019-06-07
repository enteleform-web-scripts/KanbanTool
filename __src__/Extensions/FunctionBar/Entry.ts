//###  Module  ###//
import {autoMapped_Key_Rows} from "./Settings"
import {KeyBinding         } from "~/Utils/KeyBinding/__Main__"


export class Entry{
	name:       string
	color:      string
	keyBinding: KeyBinding.CharacterKey
	callback:   ((cell:JQuery) => void)
	on_Layout:  ((cell:JQuery) => void)
	on_Click:   ((cell:JQuery) => void)
	cell:       JQuery

	constructor({
		name,
		callback,
		keyBinding,
		on_Layout,
		on_Click,
		color,
	}:{
		name:        string,
		callback:    ((cell:JQuery) => void),
		keyBinding?: KeyBinding.AlphanumericKey,
		on_Layout?:  ((cell:JQuery) => void),
		on_Click?:   ((cell:JQuery) => void),
		color?:      string,
	}
	){
		this.name       = name
		this.color      = color
		this.keyBinding = keyBinding
		this.callback   = callback
		this.on_Layout  = (on_Layout || ((cell:JQuery) => {}))
		this.on_Click   = (on_Click || callback)
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
			(event:KeyboardEvent) => this.callback(this.cell),
			{preventDefault: true}
		)
	}

}



