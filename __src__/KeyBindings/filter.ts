//###  Module  ###//
import {Keyboard} from "~/Utils/Keyboard"

//###  NPM  ###//
import jquery from "jquery"
const $:any = jquery


class FilterKeybindings{

	@Keyboard.bind("Ctrl + F")
	static show_FilterMenu(){
		const filterButton = $(".kt-board_search-container > .btn[data-toggle=kt-board_search-filters_popover]")
		filterButton.click()
	}

}
