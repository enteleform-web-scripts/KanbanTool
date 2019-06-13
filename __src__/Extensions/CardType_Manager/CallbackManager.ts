//###  Module: CSS  ###//
const CSS = require("./__CSS_Variables__.json").CardType_Manager

//###  Module  ###//
import {HoverManager} from "./HoverManager"
import {StyleManager} from "./StyleManager"
import {KeyBinding  } from "~/Utils/KeyBinding/__Main__"
import {KanbanTool  } from "~/Utils/KanbanTool/__Main__"

//###  Aliases  ###//
type  CardType = KanbanTool.CardType
const {CardType} = KanbanTool


//#################//
//###  Exports  ###//
//#################//

export namespace CallbackManager{

	let _entryIndex = -1

	export function get_Callbacks(){
		_entryIndex += 1
		const cardType = KanbanTool.cardTypes[_entryIndex]

		return _get_Callbacks(cardType)
	}

	function _get_Callbacks(cardType:CardType){
		return {
			on_Layout: function(cell:JQuery){
				cell.addClass(CSS.filter)
				StyleManager.update_CardStyle(cell, cardType)
				const update_CSS = _get_UpdateCSS_Callback(cell, cardType)
				CardType.Filter.on_Update(update_CSS)
				update_CSS()
			},

			on_KeyBinding: function(event:KeyboardEvent, cell:JQuery){
				HoverManager.set_CardType(cardType)
			},

			on_Click: function(event:JQuery.ClickEvent, cell:JQuery){
				if(KeyBinding.is_Pressed("ctrl")){
					CardType.Filter.disable_CardTypes()
					CardType.Filter.enable_CardTypes(cardType.index)
				}
				else
					{CardType.Filter.toggle_CardTypes(cardType.index)}
			},
		}
	}

}


//###############//
//###  Utils  ###//
//###############//

function _get_UpdateCSS_Callback(cell:JQuery, cardType:CardType){
	return () => {
		if(CardType.Filter.cardType_IsEnabled(cardType)){
			cell.addClass   (CSS.activeFilter  )
			cell.removeClass(CSS.inactiveFilter)
		}
		else{
			cell.removeClass(CSS.activeFilter  )
			cell.addClass   (CSS.inactiveFilter)
		}
	}
}
