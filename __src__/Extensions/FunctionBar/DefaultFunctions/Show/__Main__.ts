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

	export function rows({include,          hide_IfEmpty}:{include:(string|number)[],              hide_IfEmpty?:boolean})
	export function rows({         exclude, hide_IfEmpty}:{exclude:(string|number)[],              hide_IfEmpty?:boolean})
	export function rows({include, exclude, hide_IfEmpty}:{include?:_Target[], exclude?:_Target[], hide_IfEmpty?:boolean}){
		_show({
			hide_IfEmpty,
			type:    _Type.Row,
			targets: (include) ? include : exclude,
			exclude: (exclude) ? true    : false,
		})
	}

	export function columns({include,          hide_IfEmpty}:{include:(string|number)[],              hide_IfEmpty?:boolean})
	export function columns({         exclude, hide_IfEmpty}:{exclude:(string|number)[],              hide_IfEmpty?:boolean})
	export function columns({include, exclude, hide_IfEmpty}:{include?:_Target[], exclude?:_Target[], hide_IfEmpty?:boolean}){
		_show({
			hide_IfEmpty,
			type:    _Type.Column,
			targets: (include) ? include : exclude,
			exclude: (exclude) ? true    : false,
		})
	}

	export function allRows   ({hide_IfEmpty}:{hide_IfEmpty?:boolean}={}){_show({type:_Type.Row,    targets:["**\\*"], exclude:false, hide_IfEmpty})}
	export function allColumns({hide_IfEmpty}:{hide_IfEmpty?:boolean}={}){_show({type:_Type.Column, targets:["**\\*"], exclude:false, hide_IfEmpty})}

	export function noRows   (){_show({type:_Type.Row,    targets:["**\\*"], exclude:true, hide_IfEmpty:false})}
	export function noColumns(){_show({type:_Type.Column, targets:["**\\*"], exclude:true, hide_IfEmpty:false})}

}


//###############//
//###  Utils  ###//
//###############//

type  _Type = TaskContainer.Type
const _Type = TaskContainer.Type

type _Target = (string | number)

function _show(
	{type,       targets,           exclude,         hide_IfEmpty        }:
	{type:_Type, targets:_Target[], exclude:boolean, hide_IfEmpty:boolean}
){
	const containers =
		(type == _Type.Row)
		? get_Rows()
		: get_Columns()

	_set_Visibility(containers, targets, exclude, hide_IfEmpty)
}

function _set_Visibility(containers:TaskContainer[], targets:_Target[], exclude:boolean, hide_IfEmpty:boolean){
	const visibilityMap = _build_VisibilityMap(containers, targets, exclude, hide_IfEmpty)

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

function _build_VisibilityMap(containers:TaskContainer[], targets:_Target[], exclude:boolean, hide_IfEmpty:boolean){
	const visibilityMap =
		containers.map(container => ({container, show_Element:false}))

	containers.forEach((container, i) => {
		const oneBased_Index = (container.domIndex + 1)

		let is_Target = (
			targets.includes(oneBased_Index)
			|| targets.some(target => _match_Glob(container, target))
		)

		is_Target =
			(hide_IfEmpty)
			? (is_Target && (container.tasks.length > 0))
			: is_Target

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

