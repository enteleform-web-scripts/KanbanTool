//###  Module  ###//
import {KanbanTool} from "~/Utils/KanbanTool/__Main__"
import {KeyBinding} from "~/Utils/KeyBinding/__Main__"


export class clear_SearchField{

	@KanbanTool.KeyBinding({
		defaultKeys: ["ctrl", "shift", "alt", "f"],
		options:     {preventDefault:true},
	})
	static initialize(keys?:KeyBinding.Key[]){
		return (event:KeyboardEvent) => {
			$(".kt-board_search-container > [class=icon-et-erase]").click()
		}
	}

}
