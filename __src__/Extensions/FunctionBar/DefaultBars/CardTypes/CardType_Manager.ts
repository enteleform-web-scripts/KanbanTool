
//###  Module  ###//
import {activeBoard} from "~/Utils/KanbanTool"


export const cardTypes =
	activeBoard.cardTypes().active().map(
		({attributes}) => ({
			id:      attributes.id,
			name:    attributes.name,
			bgColor: attributes.color_attrs.rgb,
			fgColor: (
				attributes.color_attrs.invert
				? "#FFF"
				: "#000"
			),
		})
	)


export namespace CardType_Manager{
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

	export function get_Callbacks(){
		_entryIndex += 1
		const cardType = cardTypes[_entryIndex]

		return {
			callback:  _get_Callback(cardType),
			on_Layout: _get_OnLayout(cardType),
		}
	}

	export function _get_Callback(cardType){
		return () =>
			{_update_CardType(cardType)}
	}

	export function _get_OnLayout(cardType){
		return (cell:JQuery) => {
			cell.css("background-color", cardType.bgColor)
			cell.css("color",            cardType.fgColor)
		}
	}

	function _update_CardType(cardType){
		if(_card)
			{_card.props.task.save("card_type_id", cardType.id)}
	}

}

