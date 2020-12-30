//###  Module  ###//
import {CardType_Manager} from "~/Extensions/CardType_Manager/__Main__"
import {HoverManager    } from "~/Extensions/CardType_Manager/HoverManager"
import {KanbanTool      } from "~/Utils/KanbanTool/__Main__"

//###  Aliases  ###//
type  CardType = KanbanTool.CardType
const {CardType} = KanbanTool


//#################//
//###  Exports  ###//
//#################//

export class TaskToggle{

	static get today_CardTypes()
		{return CardType.get_FromRegEx(/^(Today_.*)|(Daily_Active)$/)}

	static get task_CardTypes()
		{return CardType.get_FromRegEx(/^(Task_.*)|(Daily_Complete)$/)}

	static get daily_CardTypes()
		{return CardType.get_FromRegEx(/^Daily_(Active|Complete)$/)}

	static get cards_ToInvert(){
		return CardType.get_Cards(
			...CardType.get_FromRegEx(/^(Today_.*)|(Daily_Complete)$/)
		)
	}

	static toggle_Hovered_Task(){
		const cardType     = CardType_Manager.HoverManager.get_CardType()
		const new_CardType = _get_Inverted_CardType(cardType)

		if(new_CardType)
			{HoverManager.set_CardType(new_CardType)}
	}

	static invert_ActiveCards(){
		TaskToggle.cards_ToInvert.forEach(({element, cardType}) => {
			const inverted_CardType = _get_Inverted_CardType(cardType)
			CardType.set(element, inverted_CardType)
		})
	}

}


//###############//
//###  Utils  ###//
//###############//

function _get_Inverted_CardType(cardType:CardType){
	const task_CardTypes  = TaskToggle.task_CardTypes
	const today_CardTypes = TaskToggle.today_CardTypes

	let new_CardType, new_CardType_Index

	if(task_CardTypes.includes(cardType)){
		new_CardType_Index = task_CardTypes.indexOf(cardType)
		new_CardType       = today_CardTypes[new_CardType_Index]
	}
	else if(today_CardTypes.includes(cardType)){
		new_CardType_Index = today_CardTypes.indexOf(cardType)
		new_CardType       = task_CardTypes[new_CardType_Index]
	}

	return new_CardType
}
