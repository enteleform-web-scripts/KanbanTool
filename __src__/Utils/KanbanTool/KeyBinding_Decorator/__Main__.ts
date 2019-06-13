//###  Module  ###//
import {KeyBinding as _KeyBinding} from "../../KeyBinding/__Main__";


//#################//
//###  Exports  ###//
//#################//

export function KeyBinding_Decorator(
	{defaultKeys,                   options                                          }:
	{defaultKeys:_KeyBinding.Key[], options?:{scope?:string, preventDefault?:boolean}}
){
	return (target:any, propertyKey:string, descriptor:PropertyDescriptor) => {
		const callback = descriptor.value

		descriptor.value = (keys?:_KeyBinding.Key[]) => {
			keys = (keys || defaultKeys)

			if(keys.length > 0){
				const innerCallback = callback(keys)
				_KeyBinding.add(keys, innerCallback, options)
			}
		}

		return descriptor
	}
}
