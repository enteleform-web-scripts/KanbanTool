//###  Module  ###//
import {get_EmptyRow_Indexes, get_EmptyColumn_Indexes} from "./get_emptyContainer_Indexes"
import {TaskContainer                                } from "../Show/TaskContainer"
import {get_Rows                                     } from "../Show/get_Rows"
import {get_Columns                                  } from "../Show/get_Columns"
import Show                                            from "../Show/__Main__";


//#################//
//###  Exports  ###//
//#################//

export default class {

	static allRows   (){Show.rows   ({exclude:["**\\*"]})}
	static allColumns(){Show.columns({exclude:["**\\*"]})}

	static emptyRows(){
		const columns = get_Columns()

		_hide_Containers({
			containers             : get_Rows(),
			emptyContainer_Indexes : get_EmptyRow_Indexes(columns),
		})
	}

	static emptyColumns(){
		const rows = get_Rows()

		_hide_Containers({
			containers             : get_Columns(),
			emptyContainer_Indexes : get_EmptyColumn_Indexes(rows),
		})
	}

}


//###############//
//###  Utils  ###//
//###############//

function _hide_Containers(
	{containers,                 emptyContainer_Indexes         }:
	{containers:TaskContainer[], emptyContainer_Indexes:number[]}
){
	containers.forEach(container => {
		const {descendants}   = container
		const has_Descendants = (descendants.length > 0)

		if(! _is_Empty(container, emptyContainer_Indexes))
			{/* continue */}
		else if(
			(! has_Descendants)
			|| ((has_Descendants) && descendants.every(child => _is_Empty(child, emptyContainer_Indexes)))
		)
			{container.hide()}
	})
}

function _is_Empty(container:TaskContainer, emptyContainer_Indexes:number[])
	{return emptyContainer_Indexes.includes(container.modelIndex)}
