
//###  Module  ###//
import {CardType_Filter} from "../../DefaultFunctions/CardType_Filter/__Main__"
import {cardTypes      } from "~/Utils/KanbanTool"
import {KeyBinding     } from "~/Utils/KeyBinding/__Main__"


export namespace CallbackManager{
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

		return _get_Callbacks(cardType)
	}

	function _get_Callbacks(cardType){
		return {
			on_Layout: function(cell:JQuery){
				cell.css({
					"box-shadow":  `inset 0 7px 0 0 ${cardType.bgColor}, inset 0 8px 0 0 #AAA`,
					"padding-top": "14px",
				})
			},

			on_KeyBinding: function(event:KeyboardEvent, cell:JQuery){
				_update_CardType(cardType)
			},

			on_Click: function(event:JQuery.ClickEvent, cell:JQuery){
				// CardType_Filter.toggle_CardTypes(cardType.index)
				console.log(`ctrl:${KeyBinding.is_Pressed("ctrl")}, shift:${KeyBinding.is_Pressed("shift")}, alt:${KeyBinding.is_Pressed("alt")}, `)
			},

			on_DoubleClick: function(event:JQuery.DoubleClickEvent, cell:JQuery){
				CardType_Filter.disable_CardTypes()
				CardType_Filter.enable_CardTypes(cardType.index)
			},
		}
	}

	function _update_CardType(cardType){
		if(_card)
			{_card.props.task.save("card_type_id", cardType.id)}
	}

}

