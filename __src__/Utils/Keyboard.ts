//###  NPM  ###//
import hotkeys from "hotkeys-js"


export class Keyboard{
	static bind(keys:string|string[]){
		const keysString =
			(keys.constructor === Array)
			? (keys as Array<string>).join(", ")
			: (keys as string)

		return (target, propertyKey, descriptor) => {
			hotkeys(keysString, descriptor.value)
		}
	}
}
