//###  Module  ###//
import {KeyBinding} from "~/Utils/KeyBinding/__Main__"

//###  NPM  ###//
const $:any = require("jquery")


class FilterKeybindings{

	@KeyBinding.add(["ctrl", "f"], {preventDefault:true})
	static focus_SearchField(event:KeyboardEvent){
		const searchField = $("#kt-board_search-q")
		searchField.focus()
	}

	// @KeyBinding.add(["ctrl", "space"], {preventDefault:true})
	// static show_FilterMenu(event){
	// 	const filterMenu = $(".kt-board_search-filters_popover")
	// 	const displayValue =
	// 		(filterMenu.css("display") == "none")
	// 		? "block"
	// 		: "none"
	// 	filterMenu.css("display", displayValue)
	// }

}
