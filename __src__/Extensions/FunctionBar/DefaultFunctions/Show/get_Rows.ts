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
				type:     TaskContainer.Type.Row,
				domIndex: i,
				model:    models[i],
				element:  element,
			})
		)

	return rows
}
