//###  Utils  ###//
import {TaskToggle} from "../Utils/TaskToggle"

//###  Module  ###//
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

}
