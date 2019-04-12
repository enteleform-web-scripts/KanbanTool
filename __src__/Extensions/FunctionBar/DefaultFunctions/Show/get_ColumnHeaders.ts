
//###  Module  ###//
import {Header     } from "./Header"
import {activeBoard} from "~/Utils/KanbanTool"


//#################//
//###  Exports  ###//
//#################//

export function get_ColumnHeaders(){
	const rowElements    = $("kt-board > thead").children().toArray()
	const swimLane_Count = activeBoard.swimlanes().length

	const cellElements =
		rowElements
			.flatMap(row => $(row).children().toArray())

	if(swimLane_Count > 1)
		{cellElements.splice(0, 1)}

	const all_ColumnModels =
		activeBoard.workflowStages().toArray()
			.map(column => column.attributes)

	const root_ColumnModel  = all_ColumnModels[0]
	const user_ColumnModels = all_ColumnModels.slice(1)

	const columnHeaders = _build_Headers(cellElements, user_ColumnModels, [root_ColumnModel])

	return columnHeaders
}


//###############//
//###  Utils  ###//
//###############//

function _build_Headers(columnHeader_CellElements:HTMLElement[], userModels:any[], parentModels:any[]){
	const queue            = [...userModels]
	const headers:Header[] = []

	while(queue.length > 0){
		const next_Parent_StartIndex = headers.length

		parentModels.forEach(parent => {
			const children = _get_Children({queue, parent})
			children.forEach( ({child, parent}) => {
				_add_Header({queue, headers, columnHeader_CellElements, child, parent})
			})
		})

		parentModels = headers.slice(next_Parent_StartIndex)
	}

	return headers
}

function _get_Children({queue, parent}){
	return (
		queue
			.filter(column => (column.parent_id == parent.id))
			.map   (child  => ({child, parent})              )
	)
}

function _add_Header({queue, headers, columnHeader_CellElements, child, parent}){
	const child_QueueIndex = queue.indexOf(child)
	const column_WasAdded  = (child_QueueIndex == -1)

	if(! column_WasAdded){
		queue.splice(child_QueueIndex, 1)

		const elementIndex = headers.length
		const element      = columnHeader_CellElements[elementIndex]

		const header = new Header({
			index:           elementIndex,
			model:           child,
			clickElement:    element,
			collapseElement: element,
		})

		headers.push(header)

		if(parent instanceof Header)
			{parent.add_Child(header)}
	}
}
