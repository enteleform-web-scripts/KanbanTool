//###  Module: Exports  ###//
import {
	ModifierKey      as _ModifierKey,
	ModifierKeys     as _ModifierKeys,
	AlphanumericKey  as _AlphanumericKey,
	AlphanumericKeys as _AlphanumericKeys,
	CharacterKey     as _CharacterKey,
	CharacterKeys    as _CharacterKeys,
	Key              as _Key,
	Keys             as _Keys,
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

	static add(hotKeys:(KeyBinding.Key|KeyBinding.Key[]),                                             options?:{preventDefault:boolean}) // Decorator
	static add(hotKeys:(KeyBinding.Key|KeyBinding.Key[]), callback:((event:KeyboardEvent) => void),   options?:{preventDefault:boolean}) // Function Call
	static add(hotKeys:(KeyBinding.Key|KeyBinding.Key[]), arg_2?:(_KeyBinding_Callback|_BindOptions), arg_3?:_BindOptions              ){
		const hotKeys_String = _convert_HotKeys_ToString(hotKeys)
		const {callback, options} = _get_BindArguments(arg_2, arg_3)

		if(callback)
			{_add_KeyBinding(hotKeys_String, callback, options)}
		else
			{return _get_Decorator(hotKeys_String, options)}
	}

	static is_Pressed(...modifierKey:_ModifierKey[]){
		return modifierKey.every(key =>
			_isPressed_CallbackMap[key]()
		)
	}
}

export namespace KeyBinding{
	export type  ModifierKey      = _ModifierKey
	export const ModifierKeys     = _ModifierKeys
	export type  AlphanumericKey  = _AlphanumericKey
	export const AlphanumericKeys = _AlphanumericKeys
	export type  CharacterKey     = _CharacterKey
	export const CharacterKeys    = _CharacterKeys
	export type  Key              = _Key
	export const Keys             = _Keys
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

const _isPressed_CallbackMap = {
	ctrl:  () => HotKeys.ctrl,
	shift: () => HotKeys.shift,
	alt:   () => HotKeys.alt,
}

function _disable_DefaultFilters(event)
	{return true}

function _get_BindArguments(arg_2?:(_KeyBinding_Callback|_BindOptions), arg_3?:_BindOptions){
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

function _convert_HotKeys_ToString(keys:(KeyBinding.Key|KeyBinding.Key[])){
	return (
			(keys instanceof Array)
			? _get_HotKey_Array_AsString(keys)
			: (keys as string)
	)
}

function _get_HotKey_Array_AsString(keys:KeyBinding.Key[]){
	const sortedKeys = [...keys].sort((a, b) => {
		if(_ModifierKeys.includes(a))
			{return -1}
		else
			{return 0}
	})

	return sortedKeys.join(" + ")
}
