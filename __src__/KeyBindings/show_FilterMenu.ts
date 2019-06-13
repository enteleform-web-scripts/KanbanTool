//###  Module  ###//
import {KanbanTool} from "~/Utils/KanbanTool/__Main__"
import {KeyBinding} from "~/Utils/KeyBinding/__Main__"


export class show_FilterMenu{

	@KanbanTool.KeyBinding({
		defaultKeys: ["ctrl", "space"],
		options:     {preventDefault:true},
	})
	static initialize(keys?:KeyBinding.Key[]){
		return (event:KeyboardEvent) => {
			const filterMenu = $(".kt-board_search-filters_popover")
			const displayValue =
				(filterMenu.css("display") == "none")
				? "block"
				: "none"
			filterMenu.css("display", displayValue)
		}
	}

}
