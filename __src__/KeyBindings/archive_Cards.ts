//###  Module  ###//
import {HoverManager     } from "~/Extensions/CardType_Manager/HoverManager"
import {KanbanTool       } from "~/Utils/KanbanTool/__Main__"
import {KeyBinding_Scopes} from "~/Utils/KanbanTool/KeyBinding_Scopes/__Main__"
import {KeyBinding       } from "~/Utils/KeyBinding/__Main__"


export class archive_Cards{

	@KanbanTool.KeyBinding({
		defaultKeys: ["delete"],
		options:     {preventDefault:true, scope:KeyBinding_Scopes.Card_IsHovered},
	})
	static initialize(keys?:KeyBinding.Key[]){
		return (event:KeyboardEvent) => {
			HoverManager.apply_Callback( (card:{element:JQuery, model:any}) => {
				KanbanTool.API.tasks.groupUpdate([card.model.id], {_action:"archive"})
			})
		}
	}

}
