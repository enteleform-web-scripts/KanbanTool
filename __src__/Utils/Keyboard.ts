//###  NPM  ###//
import hotkeys from "hotkeys-js"




function disable_DefaultFilters(event)
	{return true}

hotkeys.filter = disable_DefaultFilters




export class Keyboard{
	static bind(keys:string|string[]){
		console.log("@@@ Bind.1", keys)
		const keysString =
			(keys.constructor === Array)
			? (keys as Array<string>).join(", ")
			: (keys as string)

		return (target, propertyKey, descriptor) => {
			console.log("@@@ Bind.2", descriptor.value)
			hotkeys(keysString, descriptor.value)
			return descriptor
		}
	}
}
