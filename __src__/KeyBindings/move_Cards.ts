//###  Module  ###//
import {HoverManager     } from "~/Extensions/CardType_Manager/HoverManager"
import {KeyBinding       } from "~/Utils/KeyBinding/__Main__"
import {KeyBinding_Scopes} from "~/Utils/KanbanTool/KeyBinding_Scopes/__Main__"
import {CardMover        } from "~/Utils/KanbanTool/CardMover/__Main__"


//#################//
//###  Exports  ###//
//#################//

export class move_Cards{

	static initialize(){
		CardMover.Directions.forEach(direction => {
			_add_KeyBinding(direction)
		})
	}

}


//###############//
//###  Utils  ###//
//###############//

function _add_KeyBinding(direction){
	KeyBinding.add(
		["ctrl", (direction as KeyBinding.Key)],
		() => {
			HoverManager.apply_Callback( (card:{element:JQuery, model:any}) => {
				CardMover.move(card.model, direction)
			})
		},
		{
			preventDefault:true,
			scope:KeyBinding_Scopes.Card_IsHovered
		},
	)
}
