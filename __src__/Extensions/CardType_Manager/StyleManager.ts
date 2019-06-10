//###  Module  ###//
import {_CardOptions     } from "./__Main__"
import {$set_CSS_Variable} from "~/Utils/CSS_Variables/__Main__"
import {CardType         } from "~/Utils/KanbanTool/CardType"
import {
	cardTypes,
	KanbanTool,
	on_PageLoad,
} from "~/Utils/KanbanTool/__Main__"

//###  NPM  ###//
const $:any = require("jquery")


//#################//
//###  Exports  ###//
//#################//

export namespace StyleManager{

	export let _CardType_Options: _CardOptions[]
	export let _CardType_ID_Map:  {[id:number]: CardType}

	export function initialize(cardOptions:_CardOptions[][]){
		StyleManager._CardType_Options =
			(cardOptions === undefined)
			? undefined
			: cardOptions.flatMap(option => option)

		StyleManager._CardType_ID_Map = _build_CardType_ID_Map()

		const callback = ()=>{
			let i = 0
			var _TEMP_START = performance.now()
			$.find("kt-task").forEach(element=>{
				_update_CardStyle(element)
				i += 1
			})
			var _TEMP_END = performance.now()
			console.log(`StyleManager @ ${(_TEMP_END - _TEMP_START)} ms, x:${i}`)
		}

		on_PageLoad(() => {
			callback()
			KanbanTool.tasks.on("change", callback)
		})
	}

}

//###############//
//###  Utils  ###//
//###############//

function _build_CardType_ID_Map(){
	const idMap: {[id:number]: CardType} = {}
	cardTypes.forEach(cardType => {
		idMap[cardType.id] = cardType
	})
	return idMap
}

function _update_CardStyle(element:HTMLElement){
	const $element = $(element)

	if(StyleManager._CardType_Options === undefined)
		{_update_CardStyle_From_CardTypes($element)}
	else
		{_update_CardStyle_From_CardOptions($element)}
}

function _update_CardStyle_From_CardTypes(element:JQuery){
	const cardType = _get_CardType(element)
	$set_CSS_Variable(element, "title_BorderColor", cardType.bgColor)
}

function _update_CardStyle_From_CardOptions(element:JQuery){
	const cardOptions = _get_CardOptions(element)

	$set_CSS_Variable(element, "title_BorderColor",     cardOptions.borderColor    )
	$set_CSS_Variable(element, "title_BackgroundColor", cardOptions.backgroundColor)
	$set_CSS_Variable(element, "title_ForegroundColor", cardOptions.foregroundColor)

	if(cardOptions.borderAccentColor){
		$set_CSS_Variable(element, "title_BorderAccentColor", cardOptions.borderAccentColor)
		element.addClass("borderAccent_Enabled")
	}
	else{
		$set_CSS_Variable(element, "title_BorderAccentColor", "#0000")
		element.removeClass("borderAccent_Enabled")
	}
}

function _get_CardType(element:JQuery){
	const taskID      = element.data("task-id")
	const model       = KanbanTool.tasks.stub(taskID)
	const cardType_ID = model.cardType().id
	return StyleManager._CardType_ID_Map[cardType_ID]
}

function _get_CardOptions(element:JQuery){
	const cardType = _get_CardType(element)
	return StyleManager._CardType_Options[cardType.index]
}
