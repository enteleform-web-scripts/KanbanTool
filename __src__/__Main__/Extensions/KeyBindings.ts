//###  Utils  ###//
import {TaskToggle} from "../Utils/TaskToggle"

//###  Module  ###//
import {KanbanTool       } from "~/Utils/KanbanTool/__Main__"
import {KeyBinding_Scopes} from "~/Utils/KanbanTool/KeyBinding_Scopes/__Main__"
import {KeyBinding       } from "~/Utils/KeyBinding/__Main__"


//###  Aliases  ###//
const {Show, Hide} = KanbanTool


class _{


	@KeyBinding.add(["space"], {preventDefault:true})
	static disable_Space_ScrollDown(event:KeyboardEvent){
		// do nothing
	}

	@KeyBinding.add(
		["space"],
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
		["-"],
		{preventDefault:true}
	)
	static hide_EmptyColumns(event:KeyboardEvent){
		Hide.emptyColumns()
	}

	@KeyBinding.add(
		["="],
		{preventDefault:true}
	)
	static show_AllColumns(event:KeyboardEvent){
		Show.allColumns()
	}

}
