
//###  Module  ###//
import {TaskContainer} from "./TaskContainer"
import {activeBoard  } from "~/Utils/KanbanTool"


//#################//
//###  Exports  ###//
//#################//

export function get_Columns(){
	const headerElements = _get_HeaderElements()
	const models         = _get_SortedModels()

	const columns =
		headerElements.map( (element, i) => (
			new TaskContainer({
				type:            TaskContainer.Type.Column,
				domIndex:        i,
				model:           models[i],
				clickElement:    element,
				collapseElement: element,
			})
		))

	_update_ColumnRelationships(columns)

	console.log("---  COLUMNS  -------------------------")
	console.log(columns)

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
		{elements.splice(0, 1)}

	return elements
}

function _get_SortedModels(){
	// sorts column models to match DOM table structure (header elements)

	const rootModel    = activeBoard.workflowStages().toArray()[0]
	const userModels   = rootModel.children()
	const sortedModels = []

	function add_Models(parents){
		sortedModels.push(...parents)

		for(const parent of parents){
			add_Models(parent.children())
		}
	}

	add_Models(userModels)
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
