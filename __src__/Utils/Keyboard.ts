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
	static bind(hotKeys:string|string[]){
		const hotKeys_String = _convert_HotKeys_ToString(hotKeys)
		return _get_Decorator(hotKeys_String)
	}
}


//###############//
//###  utils  ###//
//###############//

function _convert_HotKeys_ToString(keys:string|string[]){
	return (
			(keys.constructor === Array)
			? (keys as Array<string>).join(", ")
			: (keys as string)
	)
}

function _get_Decorator(hotKeys:string){
	return (target, propertyKey, descriptor) => {
		HotKeys(hotKeys, descriptor.value)
		const func = descriptor.value
		descriptor.value = (...args) => {
			console.log(`${propertyKey} [${hotKeys}]`)
			return func(...args)
		}
		return descriptor
	}
}
