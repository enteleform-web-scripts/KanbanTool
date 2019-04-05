//###  Module  ###//
import {KeyBinding} from "~/Utils/KeyBinding"

//###  NPM  ###//
import jquery from "jquery"
const $:any = jquery


class FilterKeybindings{

	@KeyBinding.add("Ctrl + F", {preventDefault:true})
	static focus_SearchField(event){
		const searchField = $("#kt-board_search-q")
		searchField.focus()
	}

	@KeyBinding.add("Ctrl + Space", {preventDefault:false})
	static show_FilterMenu(event){
		const filterMenu = $(".kt-board_search-filters_popover")
		const displayValue =
			(filterMenu.css("display") == "none")
			? "block"
			: "none"
		filterMenu.css("display", displayValue)
	}

}
