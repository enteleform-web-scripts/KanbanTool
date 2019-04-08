//###  Module  ###//
import {activeBoard} from "~/Utils/KanbanTool"

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
			type:     _Type.Rows,
			selector: _rowSelector,
			targets:  (include) ? include : exclude,
			exclude:  (exclude) ? true    : false,
		})
	}

	export function columns({include         }:{include:(string|number)[]}             )
	export function columns({exclude         }:{exclude:(string|number)[]}             )
	export function columns({include, exclude}:{include?:_Target[], exclude?:_Target[]}){
		_show({
			type:     _Type.Columns,
			selector: _allColumns_Selector,
			targets:  (include) ? include : exclude,
			exclude:  (exclude) ? true    : false,
		})
	}

	export function allRows(){
		_show({
			type:     _Type.Rows,
			selector: _rowSelector,
			targets:  _get_RowIndexes(),
			exclude:  false,
		})
	}

	export function allColumns(){
		_show({
			type:     _Type.Columns,
			selector: _allColumns_Selector,
			targets:  _get_ColumnIndexes(),
			exclude:  false,
		})
	}

	export function noRows(){
		_show({
			type:     _Type.Rows,
			selector: _rowSelector,
			targets:  _get_RowIndexes(),
			exclude:  true,
		})
	}

	export function noColumns(){
		_show({
			type:     _Type.Columns,
			selector: _allColumns_Selector,
			targets:  _get_ColumnIndexes(),
			exclude:  true,
		})
	}

}


//###############//
//###  Utils  ###//
//###############//

enum _Type{
	Rows,
	Columns,
}

type _Target = (string | number)

const _rowSelector         = "kt-board > tbody > tr > th"
const _topColumns_Selector = "kt-board > thead > tr:nth-child(1) > th"
const _allColumns_Selector = "kt-board > thead > tr > th"

function _show(
	{type,       selector,        targets,           exclude        }:
	{type:_Type, selector:string, targets:_Target[], exclude:boolean}
){
	const elements      = $.find(selector)
	const targetIndexes = _get_TargetIndexes(targets, type, exclude)

	console.log(">>>", targetIndexes, elements)

	_set_TargetVisibility(type, elements, targetIndexes)
}

function _get_TargetIndexes(targets:_Target[], type:_Type, exclude:boolean){
	const entries =
		(type == _Type.Rows)
		? _get_RowEntries()
		: _get_ColumnEntries()

	return (
		entries
			.map   ((entry, i     ) => ({name:entry.attributes.name, index:i})          )
			.filter(({name, index}) => _validate_Target({targets, name, index, exclude}))
			.map   (({index      }) => index                                            )
	)
}

function _get_RowEntries(){
	return activeBoard.swimlanes()
}

function _get_ColumnEntries(){
	// const columns_RootParent    = activeBoard.workflowStages().models[0]
	// const columns_RootParent_ID = columns_RootParent.attributes.id

	return (
		Array.from(activeBoard.workflowStages()).slice(1)
		// activeBoard.workflowStages()
		// 	.filter(column => (column.attributes.parent_id == columns_RootParent_ID))
	)
}

function _get_RowIndexes()
	{return _get_RowEntries().map((_, i) => i)}

function _get_ColumnIndexes()
	{return _get_ColumnEntries().map((_, i) => i)}

function _validate_Target(
	{targets,           name,        index,        exclude        }:
	{targets:_Target[], name:string, index:number, exclude:boolean}
){
	const entryValues = [name, index]

	const is_Valid =
		targets.some(target => (
			entryValues.includes(target)
		))

	return (
		(exclude)
		? !is_Valid
		: is_Valid
	)
}

function _set_TargetVisibility(type:_Type, elements:JQuery[], targetIndexes:number[]){
	elements.forEach((element, i) => {
		const $element = $(element)
		const $collapsedElement =
			(type == _Type.Rows)
			? $element.parent()
			: $element

		const is_Target    = targetIndexes.includes(i)
		const is_Collapsed = $collapsedElement.hasClass("kt-collapsed")

		if(
			(is_Target && is_Collapsed)
			|| (!is_Target && !is_Collapsed)
		)
			{$element.click()}
	})
}
