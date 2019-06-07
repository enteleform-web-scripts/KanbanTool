
//###  Module  ###//
import {activeBoard} from "~/Utils/KanbanTool"


const _cardTypes = activeBoard.cardTypes().active()


export namespace _CardType_Manager{
	let _entryIndex = -1
	let _card       = undefined

	export function set_Card_HoverCallback(){
		const $element = $("kt-board")

		$element.on("mouseover", "kt-task", (event) => {
			_card = event.currentTarget
		})

		$element.on("mouseout", "kt-task", (event) => {
			_card = null
		})
	}

	export function get_OnLoad(){
		_entryIndex += 1
		const cardType = _cardTypes[_entryIndex]
		return () =>
			{_update_CardType(cardType)}
	}

	function _update_CardType(cardType){
		if(_card)
			{_card.props.task.save("card_type_id", cardType.id)}
	}

}

