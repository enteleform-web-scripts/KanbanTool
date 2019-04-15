//###  Module  ###//
import {get_EmptyRows, get_EmptyColumns} from "./get_EmptyContainers"
import {TaskContainer                  } from "../Show/TaskContainer"
import {get_Rows                       } from "../Show/get_Rows"
import {get_Columns                    } from "../Show/get_Columns"
import {Show                           } from "../Show/__Main__";


//#################//
//###  Exports  ###//
//#################//

export namespace Hide{

	export function allRows   (){Show.rows   ({exclude:["**\\*"]})}
	export function allColumns(){Show.columns({exclude:["**\\*"]})}

	export function emptyRows(){
		_hide_Containers({
			containers      : get_Rows(),
			emptyContainers : get_EmptyRows(),
		})
	}

	export function emptyColumns(){
		_hide_Containers({
			containers      : get_Columns(),
			emptyContainers : get_EmptyColumns(),
		})
	}

}


//###############//
//###  Utils  ###//
//###############//

function _hide_Containers(
	{containers,                 emptyContainers         }:
	{containers:TaskContainer[], emptyContainers:number[]}
){
	containers.forEach(container => {
		const {descendants} = container
		const has_Descendants = (descendants.length > 0)

		if(! _is_Empty(container, emptyContainers))
			{/* continue */}
		else if(
			((has_Descendants) && descendants.some(child => _is_Empty(child, emptyContainers)))
			|| (! has_Descendants)
		)
			{container.hide()}
	})
}

function _is_Empty(container:TaskContainer, emptyContainer_Indexes:number[])
	{return emptyContainer_Indexes.includes(container.modelIndex)}
