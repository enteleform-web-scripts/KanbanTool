//###  Module  ###//
import {autoMapped_Key_Rows} from "./Settings"
import {KeyBinding         } from "~/Utils/KeyBinding/__Main__"


export class Entry{
	name:          string
	callback:      ((cell:JQuery) => void)
	on_Click:      ((cell:JQuery) => void)
	on_KeyBinding: ((cell:JQuery) => void)
	on_Layout:     ((cell:JQuery) => void)
	keyBinding:    KeyBinding.CharacterKey
	color:         string

	cell: JQuery

	constructor({
		name,
		callback,
		on_Click,
		on_KeyBinding,
		on_Layout,
		keyBinding,
		color,
	}:{
		name:           string,
		callback?:      ((cell:JQuery) => void),
		on_Click?:      ((cell:JQuery) => void),
		on_KeyBinding?: ((cell:JQuery) => void),
		on_Layout?:     ((cell:JQuery) => void),
		keyBinding?:    KeyBinding.AlphanumericKey,
		color?:         string,
	}
	){
		this.name          = name
		this.callback      = (callback      || ((cell:JQuery) => {}))
		this.on_Click      = (on_Click      || callback             )
		this.on_KeyBinding = (on_KeyBinding || callback             )
		this.on_Layout     = (on_Layout     || ((cell:JQuery) => {}))
		this.keyBinding    = keyBinding
		this.color         = color
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
			(event:KeyboardEvent) => this.on_KeyBinding(this.cell),
			{preventDefault: true}
		)
	}

}



