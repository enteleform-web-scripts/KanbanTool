
//###  Module  ###//
import {KeyBinding} from "~/Utils/KeyBinding/__Main__"
import {
	CardType_Filter,
	Show, Hide,
	cardTypes,
} from "~/Utils/KanbanTool/__Main__"


//#################//
//###  Exports  ###//
//#################//

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
				if(KeyBinding.is_Pressed("ctrl")){
					CardType_Filter.disable_CardTypes()
					CardType_Filter.enable_CardTypes(cardType.index)
				}
				else
					{CardType_Filter.toggle_CardTypes(cardType.index)}
			},
		}
	}

	function _update_CardType(cardType){
		if(_card)
			{_card.props.task.save("card_type_id", cardType.id)}
	}

}

