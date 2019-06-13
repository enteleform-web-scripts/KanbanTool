//###  Module  ###//
import {TaskContainer} from "./TaskContainer"
import {KanbanTool   } from "../__Main__"

//###  Aliases  ###//
const {activeBoard} = KanbanTool


//#################//
//###  Exports  ###//
//#################//

export function get_Columns(){
	const models =
		activeBoard.workflowStages()
			.slice(1) // remove root model

	const sortedModels   = _get_SortedModels()
	const headerElements = _get_HeaderElements()

	const columns =
		sortedModels.map( (model, i) => (
			new TaskContainer({
				type:       TaskContainer.Type.Column,
				domIndex:   i,
				modelIndex: models.indexOf(model),
				model:      model,
				element:    headerElements[i],
			})
		))

	_update_ColumnRelationships(columns)

	return columns
}


//###############//
//###  Utils  ###//
//###############//

function _get_HeaderElements(){
	const rows           = $("kt-board > thead").children().toArray()
	const swimLane_Count = activeBoard.swimlanes().length

	const elements =
		rows.flatMap(row =>
			$(row).children().toArray()
		)

	if(swimLane_Count > 1)
		{elements.splice(0, 1)} // removes empty top-left cell

	return elements
}

function _get_SortedModels(){
	// sorts column models to match DOM table structure (thead > tr > th)

	const rootModel    = activeBoard.workflowStages().toArray()[0]
	const sortedModels = []

	let row = rootModel.children()

	while(row.length > 0){
		sortedModels.push(...row)

		row = row.flatMap(model =>
			model.children()
		)
	}

	return sortedModels
}

function _update_ColumnRelationships(columns:TaskContainer[]){
	columns.forEach(parent => {
		columns.forEach(child => {
			if(child.model.parent() == parent.model)
				{parent.add_Child(child)}
		})
	})
}
