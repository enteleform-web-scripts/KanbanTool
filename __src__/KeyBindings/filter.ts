//###  Module  ###//
import {Keyboard} from "~/Utils/Keyboard"

//###  NPM  ###//
import jquery from "jquery"
const $:any = jquery


class FilterKeybindings{

	@Keyboard.bind("Ctrl + F", {preventDefault:true})
	static focus_SearchField(event){
		event.preventDefault()
		const searchField = $("#kt-board_search-q")
		searchField.focus()
	}

	@Keyboard.bind("Ctrl + Space", {preventDefault:false})
	static show_FilterMenu(event){
		event.preventDefault()
		const filterMenu = $(".kt-board_search-filters_popover")
		const displayValue =
			(filterMenu.css("display") == "none")
			? "block"
			: "none"
		filterMenu.css("display", displayValue)
	}

}
