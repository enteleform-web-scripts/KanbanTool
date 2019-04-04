//###  NPM  ###//
import hotkeys from "hotkeys-js"


export class Keyboard{
	static bind(keys:string|string[]){
		console.log("@@@ Bind.1")
		const keysString =
			(keys.constructor === Array)
			? (keys as Array<string>).join(", ")
			: (keys as string)

		return (target, propertyKey, descriptor) => {
			console.log("@@@ Bind.2")
			hotkeys(keysString, descriptor.value)
		}
	}
}
