//###  Module: Exports  ###//
import {
	ModifierKey     as _ModifierKey,
	AlphanumericKey as _AlphanumericKey,
	CharacterKey    as _CharacterKey,
	alphanumericKey_Rows,
	characterKey_Rows,
} from "./KeyGroups"

//###  NPM  ###//
import HotKeys from "hotkeys-js"


//###############//
//###  Setup  ###//
//###############//

HotKeys.filter = _disable_DefaultFilters


//#################//
//###  Exports  ###//
//#################//

export class KeyBinding{
	static get alphanumericKey_Rows(){return [...alphanumericKey_Rows]}
	static get characterKey_Rows   (){return [...characterKey_Rows   ]}

	static add(hotKeys:string|string[],                                           options?:{preventDefault:boolean}) // Decorator
	static add(hotKeys:string|string[], callback:((event:KeyboardEvent) => void), options?:{preventDefault:boolean}) // Function Call
	static add(hotKeys:string|string[], arg_2?:_KeyBinding_Callback|_BindOptions, arg_3?:_BindOptions){
		const hotKeys_String = _convert_HotKeys_ToString(hotKeys)
		const {callback, options} = _get_BindArguments(arg_2, arg_3)

		if(callback)
			{_add_KeyBinding(hotKeys_String, callback, options)}
		else
			{return _get_Decorator(hotKeys_String, options)}
	}
}

export namespace KeyBinding{
	export type ModifierKey     = _ModifierKey
	export type AlphanumericKey = _AlphanumericKey
	export type CharacterKey    = _CharacterKey
}

(window as any).KeyBinding = KeyBinding


//###############//
//###  Utils  ###//
//###############//

type _KeyBinding_Callback = (event:KeyboardEvent) => void

interface _BindOptions
	{preventDefault: boolean}

const _BindOptions_Defaults =
	{preventDefault: false}

function _disable_DefaultFilters(event)
	{return true}

function _get_BindArguments(arg_2?:_KeyBinding_Callback|_BindOptions, arg_3?:_BindOptions){
	let callback, options

	if (arg_2 instanceof Function)
		callback = arg_2
		if (arg_3)
			options = arg_3

	else if (arg_2)
		options = arg_2

	options = {..._BindOptions_Defaults, ...options}

	return {callback, options}
}

function _add_KeyBinding(hotKeys:string, callback:_KeyBinding_Callback, options:_BindOptions){
	HotKeys(hotKeys, (event) => {
		if(options.preventDefault)
			{event.preventDefault}
		console.log(`[KeyBinding] '${hotKeys}'`)
		callback(event)
	})
}

function _get_Decorator(hotKeys:string, options:_BindOptions){
	return (target, propertyKey, descriptor) => {
		_add_KeyBinding(hotKeys, descriptor.value, options)
		return descriptor
	}
}

function _convert_HotKeys_ToString(keys:string|string[]){
	return (
			(keys.constructor === Array)
			? (keys as Array<string>).join(", ")
			: (keys as string)
	)
}
