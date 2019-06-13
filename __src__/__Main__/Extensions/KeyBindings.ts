//###  Utils  ###//
import {TaskToggle} from "../Utils/TaskToggle"

//###  Module  ###//
import {HoverManager     } from "~/Extensions/CardType_Manager/HoverManager"
import {KeyBinding       } from "~/Utils/KeyBinding/__Main__"
import {KeyBinding_Scopes} from "~/Utils/KanbanTool/KeyBinding_Scopes/__Main__"


class _{

	@KeyBinding.add(
		["ctrl", "space"],
		{preventDefault:true, scope:KeyBinding_Scopes.Card_IsHovered}
	)
	static toggle_Between_TaskCards_And_TodayCards(event:KeyboardEvent){
		TaskToggle.toggle_Hovered_Task()
	}

	@KeyBinding.add(
		["ctrl", "shift", "alt", "space"],
		{preventDefault:true}
	)
	static convert_TodayCards_To_TaskCards(event:KeyboardEvent){
		TaskToggle.convert_TodayCards_To_TaskCards()
	}

	@KeyBinding.add(
		["ctrl", "shift", "space"],
		{preventDefault:true}
	)
	static wut_even(event:KeyboardEvent){
		HoverManager.apply_Callback( (card:{element:JQuery, model:any}) => {
			console.log("---------------------")
			console.log(card.element)
			console.log(card.model)
		})
	}

}
