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

export namespace Show{

	export function rows({include         }:{include:(string|number)[]}             )
	export function rows({exclude         }:{exclude:(string|number)[]}             )
	export function rows({include, exclude}:{include?:_Target[], exclude?:_Target[]}){
		_show({
			type:    _Type.Row,
			targets: (include) ? include : exclude,
			exclude: (exclude) ? true    : false,
		})
	}

	export function columns({include         }:{include:(string|number)[]}             )
	export function columns({exclude         }:{exclude:(string|number)[]}             )
	export function columns({include, exclude}:{include?:_Target[], exclude?:_Target[]}){
		_show({
			type:    _Type.Column,
			targets: (include) ? include : exclude,
			exclude: (exclude) ? true    : false,
		})
	}

	export function allRows   (){_show({type:_Type.Row,    targets:["**\\*"], exclude:false})}
	export function allColumns(){_show({type:_Type.Column, targets:["**\\*"], exclude:false})}

	export function noRows   (){_show({type:_Type.Row,    targets:["**\\*"], exclude:true})}
	export function noColumns(){_show({type:_Type.Column, targets:["**\\*"], exclude:true})}

}


//###############//
//###  Utils  ###//
//###############//

type  _Type = TaskContainer.Type
const _Type = TaskContainer.Type

type _Target = (string | number)

function _show(
	{type,       targets,           exclude        }:
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
		const is_Collapsed = $(container.collapseElement).hasClass("kt-collapsed")

		let toggle_ElementVisibility = (
			(show_Element && is_Collapsed)
			|| (!show_Element && !is_Collapsed)
		)

		if(toggle_ElementVisibility)
			{container.clickElement.click()}
	})
}

function _build_VisibilityMap(containers:TaskContainer[], targets:_Target[], exclude:boolean){
	const visibilityMap =
		containers.map(container => ({container, show_Element:false}))

	containers.forEach((container, i) => {
		const oneBased_Index = (container.index + 1)

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

