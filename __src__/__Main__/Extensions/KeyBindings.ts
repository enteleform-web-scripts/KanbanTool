//###  Utils  ###//
import {TaskToggle} from "../Utils/TaskToggle"

//###  Module  ###//
import {HoverManager     } from "~/Extensions/CardType_Manager/HoverManager"
import {KeyBinding       } from "~/Utils/KeyBinding/__Main__"
import {KanbanTool       } from "~/Utils/KanbanTool/__Main__"
import {KeyBinding_Scopes} from "~/Utils/KanbanTool/KeyBinding_Scopes/__Main__"

KanbanTool
class _{

	@KeyBinding.add(
		["ctrl", "space"],
		{preventDefault:true, scope:KeyBinding_Scopes.Card_IsHovered}
	)
	static toggle_Between_TaskCards_And_TodayCards(event:KeyboardEvent){
		TaskToggle.toggle_Hovered_Task()
	}

	@KeyBinding.add(
		["ctrl", "delete"],
		{preventDefault:true, scope:KeyBinding_Scopes.Card_IsHovered}
	)
	static archive_Card(event:KeyboardEvent){
		HoverManager.apply_Callback( (card:{element:JQuery, model:any}) => {
			KanbanTool.tasks.groupUpdate([card.model.id], {_action:"archive"})
		})
	}

	@KeyBinding.add(
		["ctrl", "shift", "alt", "space"],
		{preventDefault:true}
	)
	static convert_TodayCards_To_TaskCards(event:KeyboardEvent){
		TaskToggle.convert_TodayCards_To_TaskCards()
	}


}
