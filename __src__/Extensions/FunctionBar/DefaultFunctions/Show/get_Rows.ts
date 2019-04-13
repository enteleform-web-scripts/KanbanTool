//###  Module  ###//
import {TaskContainer} from "./TaskContainer"
import {activeBoard  } from "~/Utils/KanbanTool"

//###  NPM  ###//
const $:any = require("jquery")


export function get_Rows(){
	const headerElements = $.find("kt-board > tbody > tr > th")
	const models         = activeBoard.swimlanes().toArray()

	const rows =
		headerElements.map( (element, i) =>
			new TaskContainer({
				type:            TaskContainer.Type.Row,
				index:           i,
				model:           models[i],
				clickElement:    element,
				collapseElement: $(element).parent(),
			})
		)

	console.log("---  ROWS  -------------------------")
	console.log(rows)

	return rows
}
