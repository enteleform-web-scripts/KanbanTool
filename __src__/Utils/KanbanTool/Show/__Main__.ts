//###  Module  ###//
import {TaskContainer} from "./TaskContainer"
import {get_Rows     } from "./get_Rows"
import {get_Columns  } from "./get_Columns"
import {Glob         } from "~/Utils/Glob"

//###  NPM  ###//
const $:any = require("jquery")


//#################//
//###  Exports  ###//
//#################//

export class Show{

	static rows({include,        }:{include:(string|number)[]             })
	static rows({         exclude}:{exclude:(string|number)[]             })
	static rows({include, exclude}:{include?:_Target[], exclude?:_Target[]}){
		_show({
			type:    _Type.Row,
			targets: (include) ? include : exclude,
			exclude: (exclude) ? true    : false,
		})
	}

	static columns({include,        }:{include:(string|number)[],            })
	static columns({         exclude}:{exclude:(string|number)[],            })
	static columns({include, exclude}:{include?:_Target[], exclude?:_Target[]}){
		_show({
			type:    _Type.Column,
			targets: (include) ? include : exclude,
			exclude: (exclude) ? true    : false,
		})
	}

	static allRows   (){_show({type:_Type.Row,    targets:["**\\*"], exclude:false})}
	static allColumns(){_show({type:_Type.Column, targets:["**\\*"], exclude:false})}

}


//###############//
//###  Utils  ###//
//###############//

type  _Type = TaskContainer.Type
const _Type = TaskContainer.Type

type _Target = (string | number)

function _show(
	{type,       targets,           exclude,       }:
	{type:_Type, targets:_Target[], exclude:boolean}
){
	const containers =
		(type == _Type.Row)
		? get_Rows()
		: get_Columns()

	_set_Visibility(containers, targets, exclude)
}

function _set_Visibility(containers:TaskContainer[], targets:_Target[], exclude:boolean){
	const visibilityMap = _build_VisibilityMap(containers, targets, exclude)

	visibilityMap.forEach( ({container, show_Element}) => {
		if(show_Element)
			{container.show()}
		else
			{container.hide()}
	})
}

function _build_VisibilityMap(containers:TaskContainer[], targets:_Target[], exclude:boolean){
	const visibilityMap =
		containers.map(container => ({container, show_Element:false}))

	containers.forEach((container, i) => {
		const oneBased_Index = (container.domIndex + 1)

		const is_Target = (
			targets.includes(oneBased_Index)
			|| targets.some(target => _match_Glob(container, target))
		)

		if(is_Target){
			const containerTree =
				(exclude)
					? [container, ...container.children]
					: [container, ...container.parents ]

			visibilityMap.forEach(entry => {
				if(containerTree.includes(entry.container))
					{entry.show_Element = true}
			})
		}
	})

	if(exclude){
		visibilityMap.forEach(entry => {
			entry.show_Element = !(entry.show_Element)
		})
	}

	return visibilityMap
}

function _match_Glob(container:TaskContainer, target:_Target){
	if(Number(target))
		{return false}
	else
		{return new Glob(target.toString()).match(container.path)}
}

