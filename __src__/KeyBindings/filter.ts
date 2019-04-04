//###  Module  ###//
import {Keyboard} from "~/Utils/Keyboard"

//###  NPM  ###//
import jquery from "jquery"
const $:any = jquery


class FilterKeybindings{

	@Keyboard.bind("ctrl+shift+alt+t")
	static show_FilterMenu(event){
		console.log("@@@ Func")
		event.preventDefault()
		const filterButton = $(".kt-board_search-container > .btn[data-toggle=kt-board_search-filters_popover]")
		filterButton.click()
	}

}
