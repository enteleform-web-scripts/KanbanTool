//###  Module  ###//
import {TaskContainer  }  from "./TaskContainer"
import {get_ActiveBoard} from "../get/activeBoard"

//###  NPM  ###//
const $:any = require("jquery")


//#################//
//###  Exports  ###//
//#################//

export function get_Rows(){
	const headerElements = $.find("kt-board > tbody > tr > th")
	const models         = _activeBoard.swimlanes().toArray()

	const rows =
		headerElements.map( (element, i) =>
			new TaskContainer({
				type:       TaskContainer.Type.Row,
				modelIndex: i,
				domIndex:   i,
				model:      models[i],
				element:    element,
			})
		)

	return rows
}


//###############//
//###  Utils  ###//
//###############//

const _activeBoard = get_ActiveBoard()
