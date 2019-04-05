//###  NPM  ###//
import HotKeys from "hotkeys-js"


//##############//
//###  Init  ###//
//##############//

function disable_DefaultFilters(event)
	{return true}

HotKeys.filter = disable_DefaultFilters


//#################//
//###  Exports  ###//
//#################//

export class KeyBinding{
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

(window as any).KeyBinding = KeyBinding


//###############//
//###  Utils  ###//
//###############//

type _KeyBinding_Callback = (event:KeyboardEvent) => void

interface _BindOptions
	{preventDefault: boolean}

const _bindOptions_Defaults =
	{preventDefault: false}

function _get_BindArguments(arg_2?:_KeyBinding_Callback|_BindOptions, arg_3?:_BindOptions){
	let callback, options

	if (arg_2 instanceof Function)
		callback = arg_2
		if (arg_3)
			options = arg_3

	else if (arg_2)
		options = arg_2

	options = {..._bindOptions_Defaults, ...options}

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
