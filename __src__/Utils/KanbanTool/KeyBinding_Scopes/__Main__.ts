//###  Modules  ###//
import {on_PageLoad, taskView_IsVisible} from "../__Main__"
import {KeyBinding                     } from "~/Utils/KeyBinding/__Main__"


//###########################//
//###  SubModules - Init  ###//
//###########################//

import {Card_DetailView_IsActive} from "./Card_DetailView_IsActive"
Card_DetailView_IsActive.initialize()


//#################//
//###  Exports  ###//
//#################//

export const KeyBinding_Scopes = {
	Card_IsHovered:           "Card_IsHovered",
	Card_DetailView_IsActive: "Card_DetailView_IsActive",
}


//##############//
//###  Init  ###//
//##############//
on_PageLoad( ()=>{
	if(taskView_IsVisible())
		{KeyBinding.set_Scope(KeyBinding_Scopes.Card_DetailView_IsActive)}
})
