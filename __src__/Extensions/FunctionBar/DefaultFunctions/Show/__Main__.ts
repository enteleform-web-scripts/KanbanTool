//###  Module  ###//
import {get_ColumnHeaders} from "./get_ColumnHeaders"
import {get_RowHeaders   } from "./get_RowHeaders"
import {Header           } from "./Header"
import {Glob             } from "~/Utils/Glob"

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
			type:    _Type.Rows,
			targets: (include) ? include : exclude,
			exclude: (exclude) ? true    : false,
		})
	}

	export function columns({include         }:{include:(string|number)[]}             )
	export function columns({exclude         }:{exclude:(string|number)[]}             )
	export function columns({include, exclude}:{include?:_Target[], exclude?:_Target[]}){
		_show({
			type:    _Type.Columns,
			targets: (include) ? include : exclude,
			exclude: (exclude) ? true    : false,
		})
	}

	export function allRows   (){_show({type:_Type.Rows,    targets:["***"], exclude:false})}
	export function allColumns(){_show({type:_Type.Columns, targets:["***"], exclude:false})}

	export function noRows   (){_show({type:_Type.Rows,    targets:["***"], exclude:true})}
	export function noColumns(){_show({type:_Type.Columns, targets:["***"], exclude:true})}

}


//###############//
//###  Utils  ###//
//###############//

enum _Type{
	Rows,
	Columns,
}

type _Target = (string | number)

function _show(
	{type,       targets,           exclude        }:
	{type:_Type, targets:_Target[], exclude:boolean}
){
	const headers =
		(type == _Type.Rows)
		? get_RowHeaders()
		: get_ColumnHeaders()

	_set_Visibility(headers, targets, exclude)
}

function _set_Visibility(headers:Header[], targets:_Target[], exclude:boolean){
	const visibilityMap = _build_VisibilityMap(headers, targets, exclude)

	visibilityMap.forEach( ({header, show_Element}) => {
		const is_Collapsed = $(header.collapseElement).hasClass("kt-collapsed")

		let toggle_ElementVisibility = (
			(show_Element && is_Collapsed)
			|| (!show_Element && !is_Collapsed)
		)

		if(toggle_ElementVisibility)
			{header.clickElement.click()}
	})
}

function _build_VisibilityMap(headers:Header[], targets:_Target[], exclude:boolean){
	const visibilityMap =
		headers.map(header => ({header, show_Element:false}))

	headers.forEach((header, i) => {
		const oneBased_Index = (header.index + 1)

		const is_Target = (
			targets.includes(oneBased_Index)
			|| targets.some(target => _match_Glob(header, target))
		)

		if(is_Target){
			const headerTree = [header, ...header.parents]

			visibilityMap.forEach(entry => {
				if(headerTree.includes(entry.header))
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

function _match_Glob(header:Header, target:_Target){
	if(Number(target))
		{return false}
	else
		{return new Glob(target.toString()).match(header.path)}
}

