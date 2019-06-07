//###  Module  ###//
import {cardType_Filter_Index} from "../../Settings"

//###  NPM  ###//
const $:any = require("jquery")


export class CardType_Filter{

	static get enabled()
		{return CardType_Filter._filterButton.hasClass("kt-board_search-filter--active")}

	static get disabled()
		{return !(this.enabled)}

	static get _filterButton()
		{return $(`.kt-board_search-filter:nth-child(${cardType_Filter_Index})`)}

	static get _cardType_Buttons()
		{return $(".kt-board_search-processors-card_types").children()}

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

	static enable_CardTypes(...indexes:number[])
		{_set_CardType_States(indexes, CardType_Filter._disabled_CardType_Buttons)}
	static disable_CardTypes(...indexes:number[])
		{_set_CardType_States(indexes, CardType_Filter._enabled_CardType_Buttons)}
	static toggle_CardTypes(...indexes:number[])
		{_set_CardType_States(indexes, CardType_Filter._cardType_Buttons)}

}

//###  !!!!!!!!!!!!!!!!!  ###//
//###  !!! TEMPORARY !!!  ###//
//###  !!!!!!!!!!!!!!!!!  ###//
(window as any).CF = CardType_Filter


//###############//
//###  Utils  ###//
//###############//

function _set_CardType_States(
	indexes:          number[],
	target_CardTypes: JQuery[],
){
	console.log("----------")
	console.log("START:", indexes)
	const cardType_Buttons = CardType_Filter._cardType_Buttons

	const apply_State_To_AllCardTypes = (indexes.length == 0)
	if(apply_State_To_AllCardTypes)
		{indexes = cardType_Buttons.map((value, index) => index)}
	console.log("END:", indexes)

	indexes.forEach(index => {
		const button = cardType_Buttons[index]
		if(target_CardTypes.includes(button))
			{button.click()}
	})
}
