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

	static get _enabled_CardType_Buttons()
		{return $.find(".kt-board_search-processors-card_types > .kt-board_search-processors-card_types--active")}
	static get _disabled_CardType_Buttons()
		{return $.find(".kt-board_search-processors-card_types > :not(.kt-board_search-processors-card_types--active)")}

	static enable(){
		if(CardType_Filter.disabled)
			{CardType_Filter._filterButton.click()}
	}
	static disable(){
		if(CardType_Filter.enabled)
			{CardType_Filter._filterButton.click()}
	}

	static add_All_CardTypes(){
		CardType_Filter._disabled_CardType_Buttons.forEach(button => {
			button.click()
		})
	}
	static remove_All_CardTypes(){
		CardType_Filter._enabled_CardType_Buttons.forEach(button => {
			button.click()
		})
	}

	static enable_CardTypes(...indexes:number[]){
		const disabled_CardType_Buttons = CardType_Filter._disabled_CardType_Buttons

		indexes.forEach(index => {
			const button = CardType_Filter._cardType_Buttons[index]
			if(disabled_CardType_Buttons.includes(button))
				{button.click()}
		})
	}
	static disable_CardTypes(...indexes:number[]){
		const enabled_CardType_Buttons = CardType_Filter._enabled_CardType_Buttons

		indexes.forEach(index => {
			const button = CardType_Filter._cardType_Buttons[index]
			if(enabled_CardType_Buttons.includes(button))
				{button.click()}
		})
	}

	static toggle_CardTypes(...indexes:number[]){
		indexes.forEach(index => {
			const button = CardType_Filter._cardType_Buttons[index]
			button.click()
		})
	}

}

//###  !!!!!!!!!!!!!!!!!  ###//
//###  !!! TEMPORARY !!!  ###//
//###  !!!!!!!!!!!!!!!!!  ###//
(window as any).CF = CardType_Filter
