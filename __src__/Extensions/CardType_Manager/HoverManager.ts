//###  Module: CSS  ###//
const CSS = require("./__CSS_Variables__.json").CardType_Manager

//###  Module  ###//
import {KeyBinding                   } from "~/Utils/KeyBinding/__Main__"
import {CardType, get_CardType_FromID} from "~/Utils/KanbanTool/CardType"


//#################//
//###  Exports  ###//
//#################//

export namespace HoverManager{

	let _card = undefined // :JQuery

	export function initialize(){
		const $element = $("kt-board")
		$element.on("mouseover", "kt-task", (event) => {_card = event.currentTarget})
		$element.on("mouseout", "kt-task",  (event) => {_card = null               })
	}

	export function get_CardType(){
		if(_card){
			const cardType_ID = _card.props.task.cardType().attributes.id
			return get_CardType_FromID(cardType_ID)
		}
		else
			{return undefined}
	}

	export function set_CardType(cardType:CardType){
		if(_card)
			{_card.props.task.save("card_type_id", cardType.id)}
	}

}
