//###  Module  ###//
import {KanbanTool} from "~/Utils/KanbanTool"



const legendIndex_Key_Map = {
	// index: key,
	0: 1,
	1: 2,
	2: 3,
	3: 4,
	4: 5,
	5: 6,
	6: 7,
	7: 8,
	8: 9,
	9: 0,
}

const numberKey_Count = Object.keys(legendIndex_Key_Map).length


let card = null




function main(){
	$("kt-board").each( function(){

		const board          = (this as any).props.board
		const cardTypes      = board.cardTypes().active()
		const cardType_Count = _get_CardType_Count(cardTypes)

		if(! _board_HasLegend(board))
			{return}

		_set_Card_HoverCallback(this)

		for(let i = 0; (i < cardType_Count); i++){
			const cardType  = cardTypes[i]
			const keyNumber = legendIndex_Key_Map[i]
			_add_LegendPrefix(keyNumber, cardType)
			_set_CardType_KeyPressCallback(keyNumber, cardType)
		}

	})
}




function _set_Card_HoverCallback(element:HTMLElement){
	const $element = $(element)

	$element.on("mouseover", "kt-task", (event) => {
		card = event.currentTarget
	})

	$element.on("mouseout", "kt-task", (event) => {
		card = null
	})
}

function _set_CardType_KeyPressCallback(keyNumber:number, cardType:any){
	$(window).on(`keydown.${keyNumber}`, (event) => {
		if(card)
			{card.props.task.save("card_type_id", cardType.id)}
	})
}

function _add_LegendPrefix(keyNumber:number, cardType:any){
	const element = `.kt-extensions-card_legend [data-card_type_id=${cardType.id}]`
	const prefix = `[${keyNumber}] &nbsp;`

	$(element).prepend(prefix)
}

function _board_HasLegend(board:any){
	return KanbanTool.extensionsManager.powerupSettings("CardLegend", board).enabled
}

function _get_CardType_Count(cardTypes:any[]){
	return Math.min(cardTypes.length, numberKey_Count)
}




main()



// $(".kt-board_search-filters [data-card-type-id='5921145']").click()
// $(".kt-board_search-filter[data-filter-name='extensions.board_search.filters.card_type']").click()
// hasClass("kt-board_search-filter--active")
