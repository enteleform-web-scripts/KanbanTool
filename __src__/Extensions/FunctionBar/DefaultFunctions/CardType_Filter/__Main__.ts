//###  Module  ###//
import {cardType_Filter_Index} from "../../Settings"
import {cardTypes            } from "~/Utils/KanbanTool"

//###  NPM  ###//
const $:any = require("jquery")


export class CardType_Filter{

	static get enabled()
		{return CardType_Filter._filterButton.hasClass("kt-board_search-filter--active")}

	static get disabled()
		{return !(this.enabled)}

	static get _filterButton()
		{return $(`.kt-board_search-filter:nth-child(${cardType_Filter_Index})`)}

	static get _cardType_Buttons(): JQuery[]
		{return Array.from($(".kt-board_search-processors-card_types").children())}

	static get _enabled_CardType_Buttons(): JQuery[]
		{return Array.from($.find(".kt-board_search-processors-card_types > .kt-board_search-processors-card_types--active"))}
	static get _disabled_CardType_Buttons(): JQuery[]
		{return Array.from($.find(".kt-board_search-processors-card_types > :not(.kt-board_search-processors-card_types--active)"))}

	static enable(){
		if(CardType_Filter.disabled)
			{CardType_Filter._filterButton.click()}
	}
	static disable(){
		if(CardType_Filter.enabled)
			{CardType_Filter._filterButton.click()}
	}

	static enable_All_CardTypes(){
		CardType_Filter._disabled_CardType_Buttons.forEach(button => {
			button.click()
		})
	}
	static disable_All_CardTypes(){
		CardType_Filter._enabled_CardType_Buttons.forEach(button => {
			button.click()
		})
	}

	static enable_CardTypes (...ids:(number|string)[]){_set_CardType_States(ids, CardType_Filter._disabled_CardType_Buttons)}
	static disable_CardTypes(...ids:(number|string)[]){_set_CardType_States(ids, CardType_Filter._enabled_CardType_Buttons )}
	static toggle_CardTypes (...ids:(number|string)[]){_set_CardType_States(ids, CardType_Filter._cardType_Buttons         )}

}

//###  !!!!!!!!!!!!!!!!!  ###//
//###  !!! TEMPORARY !!!  ###//
//###  !!!!!!!!!!!!!!!!!  ###//
(window as any).CF = CardType_Filter


//###############//
//###  Utils  ###//
//###############//

function _set_CardType_States(
	ids:              (number|string)[],
	target_CardTypes: JQuery[],
){
	const cardType_Buttons = CardType_Filter._cardType_Buttons

	const apply_State_To_AllCardTypes = (ids.length == 0)
	if(apply_State_To_AllCardTypes)
		{ids = cardType_Buttons.map((value, index) => index)}

	for(const id of ids){
		const index = _get_CardType_Index(id)
		if(! index)
			{continue}

		const button = cardType_Buttons[index]
		if(target_CardTypes.includes(button))
			{button.click()}
	}
}

function _get_CardType_FromName(name:string){
	const matches = cardTypes.filter(cardType => (cardType.name == name))
	if(matches.length > 0)
		{return matches[0]}
	else
		{return undefined}
}

function _get_CardType_Index(id:number|string){
	let index

	if(typeof id == "string"){
		const cardType = _get_CardType_FromName(id)
		index = (cardType)
		? cardType.index
		: undefined
	}
	else
		{index = id}

	return index
}
