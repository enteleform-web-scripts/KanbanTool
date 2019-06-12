//###  Module  ###//
import {CardType} from "~/Utils/KanbanTool/__Main__"


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
			return CardType.get_FromID(cardType_ID)
		}
		else
			{return undefined}
	}

	export function set_CardType(cardType:CardType){
		if(_card)
			{CardType.set(_card, cardType)}
	}

}
