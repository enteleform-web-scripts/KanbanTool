//###  Module  ###//
import {cardType_Filter_Index} from "../Settings"
import {KeyBinding           } from "~/Utils/KeyBinding/__Main__"
import {
	cardTypes,
	on_PageLoad,
	Show, Hide,
} from "~/Utils/KanbanTool/__Main__"

//###  NPM  ###//
const $:any = require("jquery")


//################//
//###  Export  ###//
//################//

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

	static enable_CardTypes (...ids:(number|string|RegExp)[]){_set_CardType_States(ids, CardType_Filter._disabled_CardType_Buttons)}
	static disable_CardTypes(...ids:(number|string|RegExp)[]){_set_CardType_States(ids, CardType_Filter._enabled_CardType_Buttons )}
	static toggle_CardTypes (...ids:(number|string|RegExp)[]){_set_CardType_States(ids, CardType_Filter._cardType_Buttons         )}

}


//##############//
//###  Init  ###//
//##############//

on_PageLoad(() => {
	CardType_Filter.enable()
	CardType_Filter.enable_CardTypes()
})

KeyBinding.add(["ctrl", "`"], () => {
	Hide.emptyColumns()
	Hide.emptyRows()
})


//###############//
//###  Utils  ###//
//###############//

function _set_CardType_States(
	ids:           (number|string|RegExp)[],
	targetButtons: JQuery[],
){
	const allButtons = CardType_Filter._cardType_Buttons

	const apply_State_To_AllCardTypes = (ids.length == 0)
	if(apply_State_To_AllCardTypes)
		{ids = allButtons.map((value, index) => index)}

	ids = _process_RegExp_IDs(allButtons, targetButtons, ids)

	for(const id of ids){
		const index = _get_CardType_Index(id as (number|string))
		if(index == undefined)
			{return}

		const button = allButtons[index]
		if(targetButtons.includes(button))
			{button.click()}
	}
}

function _process_RegExp_IDs(allButtons:JQuery[], targetButtons:JQuery[], ids:(number|string|RegExp)[]){
	const patterns = ids.filter(id => (id instanceof RegExp )) as RegExp[]
	ids            = ids.filter(id => !(id instanceof RegExp)) as (number|string)[]

	const matchingButton_Indexes =
		cardTypes
			.filter(cardType   => patterns.some(pattern => pattern.exec(cardType.name) ? true : false))
			.map   (cardType   => ({button:allButtons[cardType.index], index:cardType.index})         )
			.filter(({button}) => targetButtons.includes(button)                                      )
			.map   (({index }) => index                                                               )

	ids.push(...matchingButton_Indexes)
	ids = [...new Set(ids)]

	return ids
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

function _get_CardType_FromName(name:string){
	const matches = cardTypes.filter(cardType => (cardType.name == name))
	if(matches.length > 0)
		{return matches[0]}
	else
		{return undefined}
}















// //###  Module  ###//
// import {cardType_Filter_Index} from "../Settings"
// import {cardTypes            } from "~/Utils/KanbanTool/__Main__"

// //###  NPM  ###//
// const $:any = require("jquery")


// //################//
// //###  Export  ###//
// //################//

// export class CardType_Filter{

// 	static get enabled()
// 		{return CardType_Filter._filterButton.hasClass("kt-board_search-filter--active")}

// 	static get disabled()
// 		{return !(this.enabled)}

// 	static get _filterButton()
// 		{return $(`.kt-board_search-filter:nth-child(${cardType_Filter_Index})`)}

// 	static get _cardType_Buttons(): JQuery[]
// 		{return Array.from($(".kt-board_search-processors-card_types").children())}

// 	static get _enabled_CardType_Buttons(): JQuery[]
// 		{return Array.from($.find(".kt-board_search-processors-card_types > .kt-board_search-processors-card_types--active"))}
// 	static get _disabled_CardType_Buttons(): JQuery[]
// 		{return Array.from($.find(".kt-board_search-processors-card_types > :not(.kt-board_search-processors-card_types--active)"))}

// 	static enable(){
// 		if(CardType_Filter.disabled)
// 			{CardType_Filter._filterButton.click()}
// 	}
// 	static disable(){
// 		if(CardType_Filter.enabled)
// 			{CardType_Filter._filterButton.click()}
// 	}

// 	static enable_CardTypes (...ids:(number|string|RegExp)[]){_set_CardType_States(ids, CardType_Filter._disabled_CardType_Buttons)}
// 	static disable_CardTypes(...ids:(number|string|RegExp)[]){_set_CardType_States(ids, CardType_Filter._enabled_CardType_Buttons )}
// 	static toggle_CardTypes (...ids:(number|string|RegExp)[]){_set_CardType_States(ids, CardType_Filter._cardType_Buttons         )}

// }


// //##############//
// //###  Init  ###//
// //##############//

// CardType_Filter.enable()
// CardType_Filter.enable_CardTypes()


// //###############//
// //###  Utils  ###//
// //###############//

// function _set_CardType_States(
// 	ids:            (number|string|RegExp)[],
// 	target_Buttons: JQuery[],
// ){
// 	const cardType_Buttons = CardType_Filter._cardType_Buttons

// 	const apply_State_To_AllCardTypes = (ids.length == 0)
// 	if(apply_State_To_AllCardTypes)
// 		{ids = cardType_Buttons.map((value, index) => index)}

// 	const cardTypes

// 	for(const id of ids){
// 		if(id instanceof RegExp)
// 			{_set_CardType_State_FromRegExp(cardType_Buttons, target_Buttons, id)}
// 		else
// 			{_set_CardType_State_FromIndex(cardType_Buttons, target_Buttons, id)}
// 	}
// }

// function _set_CardType_State_FromIndex(cardType_Buttons:JQuery[], target_Buttons:JQuery[], id:string|number){
// 	const index = _get_CardType_Index(id)
// 	if(index == undefined)
// 		{return}

// 	const button = cardType_Buttons[index]
// 	if(target_Buttons.includes(button))
// 		{button.click()}
// }

// function _set_CardType_State_FromRegExp(cardType_Buttons:JQuery[], target_Buttons:JQuery[], id:RegExp){
// 	const cardType_Indexes =
// 		cardTypes
// 			.filter(cardType => id.exec(cardType.name))
// 			.map   (cardType => cardType.index        )

// 	cardType_Indexes.forEach(index => {
// 		const button = cardType_Buttons[index]
// 		if(target_Buttons.includes(button)){
// 			button.click()
// 		}
// 	})

// 	const buttons = cardType_Buttons.filter(button => matching_CardTypes.some()
// 	// if(target_Buttons.includes(button))
// 	// 	{button.click()}
// }

// function _get_CardType_FromName(name:string){
// 	const matches = cardTypes.filter(cardType => (cardType.name == name))
// 	if(matches.length > 0)
// 		{return matches[0]}
// 	else
// 		{return undefined}
// }

// function _get_CardType_Index(id:number|string){
// 	let index

// 	if(typeof id == "string"){
// 		const cardType = _get_CardType_FromName(id)
// 		index = (cardType)
// 		? cardType.index
// 		: undefined
// 	}
// 	else
// 		{index = id}

// 	return index
// }
