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
			targets: (include) ? include : exclude,
			type:    _Type.Rows,
			exclude: (exclude) ? true : false,
		})
	}

	export function columns({include         }:{include:(string|number)[]}             )
	export function columns({exclude         }:{exclude:(string|number)[]}             )
	export function columns({include, exclude}:{include?:_Target[], exclude?:_Target[]}){
		_show({
			targets: (include) ? include : exclude,
			type:    _Type.Columns,
			exclude: (exclude) ? true : false,
		})
	}

	export function allRows(){
		const rowIndexes =
			_get_RowEntries()
			.map((_, i) => i)

		_show({
			targets: rowIndexes,
			type:    _Type.Rows,
			exclude: false,
		})
	}

	export function allColumns(){
		const columnIndexes =
			_get_RowEntries()
			.map((_, i) => i)

		_show({
			targets: columnIndexes,
			type:    _Type.Columns,
			exclude: false,
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

const _rowSelector    = "kt-board > tbody > tr"
const _columnSelector = "kt-board > thead > tr:nth-child(1) > th"

function _show(
	{targets,           type,       exclude        }:
	{targets:_Target[], type:_Type, exclude:boolean}
){
	const selector =
		(type == _Type.Rows)
		? _rowSelector
		: _columnSelector

	const elements      = $.find(selector)
	const targetIndexes = _get_TargetIndexes(targets, type, exclude)

	_apply_CSS_Classes(elements, targetIndexes)
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
	const columns_RootParent    = activeBoard.workflowStages().models[0]
	const columns_RootParent_ID = columns_RootParent.attributes.id

	return (
		activeBoard.workflowStages()
			.filter(column => (column.attributes.parent_id == columns_RootParent_ID))
	)
}

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

function _apply_CSS_Classes(elements:JQuery[], targetIndexes:number[]){
	elements.forEach((element, i) => {
		const $element = $(element)
		if(targetIndexes.includes(i))
			{$element.removeClass("kt-collapsed")}
		else
			{$element.addClass("kt-collapsed")}
	})
}
