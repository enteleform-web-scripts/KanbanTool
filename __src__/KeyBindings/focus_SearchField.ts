//###  Module  ###//
import {KanbanTool} from "~/Utils/KanbanTool/__Main__"
import {KeyBinding} from "~/Utils/KeyBinding/__Main__"


//##############//
//###  Init  ###//
//##############//

const _searchField = $("#kt-board_search-q")

_unfocus_SearchField_OnEnter()


//#################//
//###  Exports  ###//
//#################//

export class focus_SearchField{

	@KanbanTool.KeyBinding({
		defaultKeys: ["shift", "alt", "f"],
		options:     {preventDefault:true},
	})
	static initialize(keys?:KeyBinding.Key[]){
		return (event:KeyboardEvent) => {
			_searchField.focus()
			_searchField.select()
		}
	}

}


//###############//
//###  Utils  ###//
//###############//

const _enter_KeyCode = 13

function _unfocus_SearchField_OnEnter(){
	_searchField.keypress((event:JQuery.KeyPressEvent) => {
		var keycode = (event.keyCode) ? event.keyCode : event.which
		if(keycode == _enter_KeyCode)
			{_searchField.blur()}
	})
}
