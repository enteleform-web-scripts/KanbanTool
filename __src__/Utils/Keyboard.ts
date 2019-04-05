//###  NPM  ###//
import hotkeys from "hotkeys-js"




function disable_DefaultFilters(event)
	{return true}

hotkeys.filter = disable_DefaultFilters




export class Keyboard{
	static bind(keys:string|string[]){
		const keysString =
			(keys.constructor === Array)
			? (keys as Array<string>).join(", ")
			: (keys as string)

		return (target, propertyKey, descriptor) => {
			hotkeys(keysString, descriptor.value)
			console.log(keysString, propertyKey, descriptor.value)
			return descriptor
		}
	}
}
