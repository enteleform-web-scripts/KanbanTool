//###  Module  ###//
import {get_ColumnHeaders} from "./get_ColumnHeaders"
import {Header           } from "./Header"
import {activeBoard      } from "~/Utils/KanbanTool"
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

	// export function allRows(){
	// 	_show({
	// 		type:    _Type.Rows,
	// 		targets: _get_RowIndexes(),
	// 		exclude: false,
	// 	})
	// }

	// export function allColumns(){
	// 	_show({
	// 		type:    _Type.Columns,
	// 		targets: _get_ColumnIndexes(),
	// 		exclude: false,
	// 	})
	// }

	// export function noRows(){
	// 	_show({
	// 		type:    _Type.Rows,
	// 		targets: _get_RowIndexes(),
	// 		exclude: true,
	// 	})
	// }

	// export function noColumns(){
	// 	_show({
	// 		type:    _Type.Columns,
	// 		targets: _get_ColumnIndexes(),
	// 		exclude: true,
	// 	})
	// }

}


//###############//
//###  Utils  ###//
//###############//

enum _Type{
	Rows,
	Columns,
}

type _Target = (string | number)

// const _rowSelector = "kt-board > tbody > tr > th"

function _show(
	{type,       targets,           exclude        }:
	{type:_Type, targets:_Target[], exclude:boolean}
){

	const headers =
		(type == _Type.Rows)
		? []  // !!!!!!!!!!!!!!!!!!!!!!! TEMP !!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
		: get_ColumnHeaders()

		headers.forEach(header => {
			_set_Visibility(header, targets, exclude)
		})
	}




	// const elements      = $.find(selector)
	// const targetIndexes = _get_TargetIndexes(targets, type, exclude)

	// console.log(">>>", targetIndexes, elements)

	// _set_TargetVisibility(type, elements, targetIndexes)




function _set_Visibility(header:Header, targets:_Target[], exclude:boolean){
	const is_Target = (
		targets.includes(header.index)
		|| targets.some(target => _match_Glob(header, target))
	)

	const $element     = $(header.element)
	const is_Collapsed = $element.hasClass("kt-collapsed")

	let toggle_ElementVisibility = (
		(is_Target && is_Collapsed)
		|| (!is_Target && !is_Collapsed)
	)

	toggle_ElementVisibility =
		(exclude)
		? !toggle_ElementVisibility
		: toggle_ElementVisibility

	if(toggle_ElementVisibility)
		{$element.click()}
}

function _match_Glob(header:Header, target:_Target){
	if(Number(target))
		{return false}
	else
		{return new Glob(target.toString()).match(header.path)}
}








// function _get_TargetIndexes(targets:_Target[], type:_Type, exclude:boolean){
// 	const entries =
// 		(type == _Type.Rows)
// 		? _get_RowEntries()
// 		: _get_ColumnEntries()

// 	return (
// 		entries
// 			.map   ((entry, i     ) => ({name:entry.attributes.name, index:i})          )
// 			.filter(({name, index}) => _validate_Target({targets, name, index, exclude}))
// 			.map   (({index      }) => index                                            )
// 	)
// }

// function _get_RowEntries(){
// 	return activeBoard.swimlanes()
// }

// function _get_ColumnEntries(){
// 	// const columns_RootParent    = activeBoard.workflowStages().models[0]
// 	// const columns_RootParent_ID = columns_RootParent.attributes.id

// 	return (
// 		Array.from(activeBoard.workflowStages().toArray()).slice(1)
// 		// activeBoard.workflowStages()
// 		// 	.filter(column => (column.attributes.parent_id == columns_RootParent_ID))
// 	)
// }

// function _get_RowIndexes()
// 	{return _get_RowEntries().map((_, i) => i)}

// function _get_ColumnIndexes()
// 	{return _get_ColumnEntries().map((_, i) => i)}

// function _validate_Target(
// 	{targets,           header,        exclude        }:
// 	{targets:_Target[], header:Header, exclude:boolean}
// ){
// 	const entryValues = [name, index]

// 	const is_Valid =
// 		targets.some(target => (
// 			entryValues.includes(target)
// 		))

// 	return (
// 		(exclude)
// 		? !is_Valid
// 		: is_Valid
// 	)
// }

