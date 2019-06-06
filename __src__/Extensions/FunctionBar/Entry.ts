//###  Module  ###//
import {autoMapped_Key_Rows} from "./Settings"
import {KeyBinding         } from "~/Utils/KeyBinding/__Main__"


export class Entry{
	name:       string
	color:      string
	keyBinding: KeyBinding.CharacterKey
	on_Load:    (() => void)

	constructor(
		{name,        color,         keyBinding,                             on_Load,            }:
		{name:string, color?:string, keyBinding?:KeyBinding.AlphanumericKey, on_Load:(() => void)}
	){
		this.name       = name
		this.color      = color
		this.keyBinding = keyBinding
		this.on_Load    = on_Load
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
			this.on_Load,
			{preventDefault: true}
		)
	}

}



