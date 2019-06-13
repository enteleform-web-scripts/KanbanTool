//###  Module  ###//
import {KeyBinding       } from "~/Utils/KeyBinding/__Main__"
import {KeyBinding_Scopes} from "~/Utils/KanbanTool/KeyBinding_Scopes/__Main__"
import {KanbanTool  } from "~/Utils/KanbanTool/__Main__"

//###  Aliases  ###//
type  CardType = KanbanTool.CardType
const {CardType} = KanbanTool


//#################//
//###  Exports  ###//
//#################//

export namespace HoverManager{

	let _card:HTMLElement = undefined

	export function initialize(){
		const $element = $("kt-board")

		$element.on("mouseover", "kt-task", (event) => {
			_card = event.currentTarget
			KeyBinding.set_Scope(KeyBinding_Scopes.Card_IsHovered)
		})

		$element.on("mouseout", "kt-task",  (event) => {
			_card = null
			KeyBinding.set_Scope()
		})
	}

	export function get_CardType(){
		if(_card){
			const cardType_ID = (_card as any).props.task.cardType().attributes.id
			return CardType.get_FromID(cardType_ID)
		}
		else
			{return undefined}
	}

	export function set_CardType(cardType:CardType){
		if(_card)
			{CardType.set(_card, cardType)}
	}

	export function apply_Callback(callback:((card:{element:JQuery, model:any}) => void)){
		if(_card){
			const cardData = _get_CardData()
			callback(cardData)
		}
	}

	function _get_CardData()
		{return {element:$(_card), model:(_card as any).props.task}}

}
