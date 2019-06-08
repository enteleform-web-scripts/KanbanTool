//###  Module: CSS  ###//
const cssVariables = require("../../CSS_Variables.json")

//###  Module  ###//
import {KeyBinding      } from "~/Utils/KeyBinding/__Main__"
import {CardType        } from "~/Utils/KanbanTool/_CardType"
import {set_CSS_Variable} from "~/Utils/CSS_Variables/__Main__"
import {
	CardType_Filter,
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

	function _get_Callbacks(cardType:CardType){
		return {
			on_Layout: function(cell:JQuery){
				set_CSS_Variable(cell, "filterColor", cardType.bgColor)
				console.log(">>>", cell)

				const update_CSS = _get_UpdateCSS_Callback(cell, cardType)
				CardType_Filter.on_Update(update_CSS)
				update_CSS()
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

	function _update_CardType(cardType:CardType){
		if(_card)
			{_card.props.task.save("card_type_id", cardType.id)}
	}

}


//###############//
//###  Utils  ###//
//###############//

function _get_UpdateCSS_Callback(cell:JQuery, cardType:CardType){
	return () => {
		if(CardType_Filter.cardType_IsEnabled(cardType)){
			cell.addClass   (cssVariables.activeFilter  )
			cell.removeClass(cssVariables.inactiveFilter)
		}
		else{
			cell.removeClass(cssVariables.activeFilter  )
			cell.addClass   (cssVariables.inactiveFilter)
		}
	}
}
