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

export class Keyboard{
	static bind(hotKeys:string|string[],                                           options?:{preventDefault:boolean}) // Decorator
	static bind(hotKeys:string|string[], callback:((event:KeyboardEvent) => void), options?:{preventDefault:boolean}) // Function Call
	static bind(hotKeys:string|string[], b?:KeyBinding_Callback|BindOptions, c?:BindOptions){
		const hotKeys_String = _convert_HotKeys_ToString(hotKeys)
		const {callback, options} = _get_BindArguments(b, c)

		if(callback)
			{_add_KeyBinding(hotKeys_String, callback, options)}
		else
			{return _get_Decorator(hotKeys_String, options)}
	}
}

function _get_BindArguments(b?:KeyBinding_Callback|BindOptions, c?:BindOptions){
	let callback, options

	if (b instanceof Function)
		callback = b
		if (c)
			options = c

	else if (b)
		options = b

	return {callback, options}
}

//###############//
//###  utils  ###//
//###############//

type KeyBinding_Callback = (event:KeyboardEvent) => void

interface BindOptions{
	preventDefault: boolean
}

function _add_KeyBinding(hotKeys:string, callback:KeyBinding_Callback, options:BindOptions){
	HotKeys(hotKeys, (event) => {
		if(options.preventDefault)
			{event.preventDefault; console.log("PREVENT DEFAULT >>>")}
		console.log(`[@KeyBoard] ${hotKeys}`)
		callback(event)
	})
}

function _get_Decorator(hotKeys:string, options:BindOptions){
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
