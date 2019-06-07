
//###  Module  ###//
import {cardTypes} from "./CardType_Manager"
import {KeyBinding} from "~/Utils/KeyBinding/__Main__"


//#################//
//###  Exports  ###//
//#################//

export function get_Auto_CardType_Rows(){
	let cardType_Rows = []
	let cardIndex     = 0

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

export function get_Manual_CardType_Rows(rowCounts:number[]){
	const rows = []
	let   startIndex = 0

	for(let i = 0; (i < rowCounts.length); i++){
		const count    = rowCounts[i]
		const endIndex = (startIndex + count)
		const row      = cardTypes.slice(startIndex, endIndex)
		rows.push(row)
		startIndex += count
	}

	return rows
}


//###############//
//###  Utils  ###//
//###############//

function _cardTypes_Exhausted(cardIndex:number)
	{return (cardIndex == cardTypes.length)}
