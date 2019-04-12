

// const _rowSelector = "kt-board > tbody > tr > th"



		// const $collapsedElement =
		// 	(type == _Type.Rows)
		// 	? $element.parent()
		// 	: $element




//###  Module  ###//
import {Header     } from "./Header"
import {activeBoard} from "~/Utils/KanbanTool"

//###  NPM  ###//
const $:any = require("jquery")

//#################//
//###  Exports  ###//
//#################//

export function get_RowHeaders(){
	const headerModels   = activeBoard.swimlanes().toArray()
	const headerElements = $.find("kt-board > tbody > tr > th")

	const headers =
		headerElements.map( (element, index) =>
			new Header({
				model: headerModels[index],
				element,
				index,
			})
		)

	return headers
}
