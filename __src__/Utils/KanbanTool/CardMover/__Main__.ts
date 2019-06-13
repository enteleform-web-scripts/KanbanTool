//###  Modules  ###//
import {KanbanTool} from "../__Main__"


//#################//
//###  Exports  ###//
//#################//

export namespace CardMover{

	let _columns = KanbanTool.activeBoard.workflowStages().leafs()
	let _rows    = KanbanTool.activeBoard.swimlanes().models

	export type  Direction              = ("up"|"down"|"left"|"right")
	export const Directions:Direction[] = ["up","down","left","right"]

	export function move(cardModel:any, direction:Direction){
		if(direction == "up"   ){_move_Card(cardModel, "vertical",   -1)}
		if(direction == "down" ){_move_Card(cardModel, "vertical",    1)}
		if(direction == "left" ){_move_Card(cardModel, "horizontal", -1)}
		if(direction == "right"){_move_Card(cardModel, "horizontal",  1)}
	}


	function _move_Card(cardModel:any, direction:("vertical"|"horizontal"), indexOffset:number){
		let containers, container, propertyName
		if(direction == "vertical"){
			containers   = _rows
			container    = cardModel.swimlane()
			propertyName = "swimlane_id"
		}
		else{
			containers   = _columns
			container    = cardModel.workflowStage()
			propertyName = "workflow_stage_id"
		}

		const index     = containers.indexOf(container)
		const nextIndex = (index + indexOffset)

		if(
			(nextIndex < containers.length)
			&& (nextIndex >= 0)
		){
			const nextContainer_ID = containers[nextIndex].id
			KanbanTool.API.tasks.groupUpdate([cardModel.id], {[propertyName]:nextContainer_ID})
		}
	}

}

