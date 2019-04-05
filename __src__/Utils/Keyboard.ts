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
	static bind(hotKeys:string|string[])
	static bind(hotKeys:string|string[], callback:KeyBinding_Callback)
	static bind(hotKeys:string|string[], callback?:KeyBinding_Callback){
		const hotKeys_String = _convert_HotKeys_ToString(hotKeys)
		if(callback)
			{_add_KeyBinding(hotKeys_String, callback)}
		else
			{return _get_Decorator(hotKeys_String)}
	}
}


//###############//
//###  utils  ###//
//###############//

type KeyBinding_Callback = (event:KeyboardEvent) => void

function _convert_HotKeys_ToString(keys:string|string[]){
	return (
			(keys.constructor === Array)
			? (keys as Array<string>).join(", ")
			: (keys as string)
	)
}

function _add_KeyBinding(hotKeys:string, callback:KeyBinding_Callback){
	HotKeys(hotKeys, (event) => {
		console.log(`[@KeyBoard] ${hotKeys}`)
		callback(event)
	})
}

function _get_Decorator(hotKeys:string){
	return (target, propertyKey, descriptor) => {
		_add_KeyBinding(hotKeys, descriptor.value)
		const func = descriptor.value
    if(descriptor === undefined)
			{descriptor = Object.getOwnPropertyDescriptor(target, propertyKey)}
		descriptor.value = (...args) => {
			console.log(hotKeys)
			return func(...args)
		}
		return descriptor
	}
}


Keyboard.bind("Ctrl + Shift + Alt + T", (event) => window.alert("LOLOLOL"))
