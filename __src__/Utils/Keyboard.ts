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
			const func = descriptor.value
			descriptor.value = (...args) => {
				console.log(`${propertyKey} [${keysString}]`)
				return func(...args)
			}
			return descriptor
		}
	}
}
