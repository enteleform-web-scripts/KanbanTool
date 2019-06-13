//###  Module  ###//
import {KanbanTool} from "~/Utils/KanbanTool/__Main__"
import {KeyBinding} from "~/Utils/KeyBinding/__Main__"


export class focus_SearchField{

	@KanbanTool.KeyBinding({
		defaultKeys: ["shift", "alt", "f"],
		options:     {preventDefault:true},
	})
	static initialize(keys?:KeyBinding.Key[]){
		return (event:KeyboardEvent) => {
			const searchField = $("#kt-board_search-q")
			searchField.focus()
		}
	}

}
