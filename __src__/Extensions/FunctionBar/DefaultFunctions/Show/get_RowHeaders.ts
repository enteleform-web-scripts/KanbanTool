//###  Module  ###//
import {Header     } from "./Header"
import {activeBoard} from "~/Utils/KanbanTool"

//###  NPM  ###//
const $:any = require("jquery")


export function get_RowHeaders(){
	const headerModels   = activeBoard.swimlanes().toArray()
	const headerElements = $.find("kt-board > tbody > tr > th")

	const headers =
		headerElements.map( (element, index) =>
			new Header({
				model:           headerModels[index].attributes,
				clickElement:    element,
				collapseElement: $(element).parent(),
				index,
			})
		)

	return headers
}
