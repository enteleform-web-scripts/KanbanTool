//###  Module: CSS  ###//
const cssVariables = require("./__CSS_Variables__.json")

//###  Module  ###//
import {_CardOptions       } from "./__Main__"
import {set_CSS_Variable   } from "~/Utils/CSS_Variables/__Main__"
import {get_CardType_FromID} from "~/Utils/KanbanTool/CardType"
import {
	KanbanTool,
	on_PageLoad,
} from "~/Utils/KanbanTool/__Main__"

//###  NPM  ###//
const $:any = require("jquery")


//#################//
//###  Exports  ###//
//#################//

export namespace StyleManager{

	export let _CardType_Options:_CardOptions[] = []

	export function initialize(cardOptions:_CardOptions[][]){
		StyleManager._CardType_Options = cardOptions.flatMap(option => option)

		const callback = ()=>{
			$.find("kt-task").forEach(element=>{
				_update_CardStyle(element)
			})
		}

		on_PageLoad(() => {
			callback()
			KanbanTool.boards.on("change", callback)
		})
	}

}

//###############//
//###  Utils  ###//
//###############//

function _update_CardStyle(element:HTMLElement){
	const $element    = $(element)
	const cardOptions = _get_CardOptions($element)

	set_CSS_Variable($element, "title_BorderColor",     cardOptions.borderColor    )
	set_CSS_Variable($element, "title_BackgroundColor", cardOptions.backgroundColor)
	set_CSS_Variable($element, "title_ForegroundColor", cardOptions.foregroundColor)

	if(cardOptions.borderAccentColor){
		set_CSS_Variable($element, "title_BorderAccentColor", cardOptions.borderAccentColor)
		$element.addClass("borderAccent_Enabled")
	}
	else{
		set_CSS_Variable($element, "title_BorderAccentColor", "#0000")
		$element.removeClass("borderAccent_Enabled")
	}
}

function _get_CardOptions(element:JQuery){
	const taskID   = element.data("task-id")
	const model    = KanbanTool.tasks.load(taskID)
	const cardType = get_CardType_FromID(model.cardType().id)
	return StyleManager._CardType_Options[cardType.index]
}
