
//###  Module  ###//
import {_CardOptions, _CardOptions_Group} from "./__Main__"
import {KanbanTool                      } from "~/Utils/KanbanTool/__Main__"
import {KeyBinding                      } from "~/Utils/KeyBinding/__Main__"

//###  Aliases  ###//
type  CardType = KanbanTool.CardType
const {CardType, cardTypes} = KanbanTool


//#################//
//###  Exports  ###//
//#################//

export function get_Auto_CardTypes_Rows(): CardType_Group[]{
	const cardType_Rows: CardType_Group[] = []
	let cardIndex = 0

	for(const keyRow of KeyBinding.alphanumericKey_Rows){
		if(_cardTypes_Exhausted(cardIndex))
			{break}

		const cardType_Array: _CardType_Data[] = []
		const cardType_Row = {"":cardType_Array}
		cardType_Rows.push(cardType_Row)

		for(const key of keyRow){
			if(_cardTypes_Exhausted(cardIndex))
				{break}

			const cardType = cardTypes[cardIndex]
			cardType_Array.push({name:cardType.name, cardType})
			cardIndex += 1
		}
	}

	return cardType_Rows
}

export function get_Manual_CardTypes_Rows(cardOptions:_CardOptions_Group[]): CardType_Group[]{
	const cardType_Rows: CardType_Group[] = []
	let index = 0

	for(const optionsRow of cardOptions){
		if(_cardTypes_Exhausted(index))
			{break}

		const [groupName, group] =
			(optionsRow instanceof Array)
			? ["", optionsRow]
			: Object.entries(optionsRow)[0]

		const cardType_Array: _CardType_Data[] = []
		const cardType_Row = {[groupName]: cardType_Array}

		for(const options of group){
			if(_cardTypes_Exhausted(index))
				{break}
			const cardType = cardTypes[index]
			const name = (options.name) ? options.name : cardType.name
			cardType_Array.push({name, cardType})
			index += 1
		}

		cardType_Rows.push(cardType_Row)
	}

	return cardType_Rows
}

export type CardType_Group = {[name:string]: _CardType_Data[]}


//###############//
//###  Utils  ###//
//###############//

export type _CardType_Data = {name:string, cardType:CardType}

function _cardTypes_Exhausted(cardIndex:number)
	{return (cardIndex == cardTypes.length)}
