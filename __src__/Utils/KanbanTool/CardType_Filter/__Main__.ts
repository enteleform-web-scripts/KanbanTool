//###  Module  ###//
import {cardType_Filter_Index} from "../Settings"
import {CardType             } from "../_CardType"
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

	static show_AllCards_ID = Symbol()

	static _onUpdate_Callbacks:(() => void)[] = []

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

	static cardType_IsEnabled(cardType:CardType){
		const cardType_Buttons         = CardType_Filter._cardType_Buttons
		const enabled_CardType_Buttons = CardType_Filter._enabled_CardType_Buttons

		const enabledIndexes = cardType_Buttons
			.map   ((button, index) => ({button, index})                        )
			.filter(({button})      => enabled_CardType_Buttons.includes(button))
			.map   (({index })      => index                                    )

		return enabledIndexes.includes(cardType.index)
	}
	static cardType_IsDisabled(cardType:CardType)
		{return !(CardType_Filter.cardType_IsEnabled(cardType))}

	static enable(){
		if(CardType_Filter.disabled)
			{CardType_Filter._filterButton.click()}
		CardType_Filter._on_Update()
	}
	static disable(){
		if(CardType_Filter.enabled)
			{CardType_Filter._filterButton.click()}
		CardType_Filter._on_Update()
	}

	static enable_CardTypes (...ids:(number|string|RegExp)[]){_set_CardType_States(ids, CardType_Filter._disabled_CardType_Buttons)}
	static disable_CardTypes(...ids:(number|string|RegExp)[]){_set_CardType_States(ids, CardType_Filter._enabled_CardType_Buttons )}
	static toggle_CardTypes (...ids:(number|string|RegExp)[]){_set_CardType_States(ids, CardType_Filter._cardType_Buttons         )}

	static on_Update(callback:(() => void))
		{CardType_Filter._onUpdate_Callbacks.push(callback)}

	static _on_Update(){
		CardType_Filter._onUpdate_Callbacks.forEach(callback =>
			callback()
		)
	}

}


//##############//
//###  Init  ###//
//##############//

on_PageLoad(() => {
	CardType_Filter.enable()
})

on_PageLoad(CardType_Filter.show_AllCards_ID, ()=>{
	CardType_Filter.enable()
	CardType_Filter.enable_CardTypes()
})

KeyBinding.add(["ctrl", "`"], ()=>{
	Hide.emptyColumns()
	Hide.emptyRows()
})

KeyBinding.add(["ctrl", "shift", "`"], ()=>{
	Show.allColumns()
	Show.allRows()
	CardType_Filter.enable_CardTypes()
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

	CardType_Filter._on_Update()
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
