//###  Module  ###//
import {KeyBinding} from "~/Utils/KeyBinding/__Main__"


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
}
