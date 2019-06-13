
//###  Module  ###//
import {_CardOptions} from "./__Main__"
import {KanbanTool  } from "~/Utils/KanbanTool/__Main__"
import {KeyBinding  } from "~/Utils/KeyBinding/__Main__"

//###  Aliases  ###//
type  CardType = KanbanTool.CardType
const {CardType, cardTypes} = KanbanTool


//#################//
//###  Exports  ###//
//#################//

export function get_Auto_CardTypes_Rows(){
	let cardType_Rows: CardType[][] = []
	let cardIndex = 0

	for(const keyRow of KeyBinding.alphanumericKey_Rows){
		if(_cardTypes_Exhausted(cardIndex))
			{break}

		const cardType_Row = []
		cardType_Rows.push(cardType_Row)

		for(const key of keyRow){
			if(_cardTypes_Exhausted(cardIndex))
				{break}

			const cardType = cardTypes[cardIndex]
			cardType_Row.push(cardType)
			cardIndex += 1
		}
	}

	return cardType_Rows
}

export function get_Manual_CardTypes_MultipleRows(cardOptions:_CardOptions[][]){
	const cardType_Rows: CardType[][] = []
	let index = 0

	for(const optionsRow of cardOptions){
		if(_cardTypes_Exhausted(index))
			{break}

		const cardType_Row = []

		for(const options of optionsRow){
			if(_cardTypes_Exhausted(index))
				{break}

			const cardType = cardTypes[index]
			cardType_Row.push(cardType)
			index += 1
		}

		cardType_Rows.push(cardType_Row)
	}

	return cardType_Rows
}

export function get_Manual_CardTypes_SingleRow(cardOptions:_CardOptions[][]){
	const flattened = cardOptions.flatMap(options => options)
	return get_Manual_CardTypes_MultipleRows([flattened])
}


//###############//
//###  Utils  ###//
//###############//

function _cardTypes_Exhausted(cardIndex:number)
	{return (cardIndex == cardTypes.length)}
