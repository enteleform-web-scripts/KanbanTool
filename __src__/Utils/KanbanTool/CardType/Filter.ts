//###  Module  ###//
import {CardType             } from "./__Main__"
import {cardType_Filter_Index} from "../Settings"
import {KanbanTool           } from "../__Main__"
import {Show                 } from "../Show/__Main__"
import {Hide                 } from "../Hide/__Main__"
import {KeyBinding           } from "~/Utils/KeyBinding/__Main__"

//###  NPM  ###//
const $:any = require("jquery")


//################//
//###  Export  ###//
//################//

export class Filter{

	static show_AllCards_ID   = Symbol()
	static add_KeyBindings_ID = Symbol()

	static _onUpdate_Callbacks:(() => void)[] = []

	static get enabled()
		{return Filter._filterButton.hasClass("kt-board_search-filter--active")}
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
		const cardType_Buttons         = Filter._cardType_Buttons
		const enabled_CardType_Buttons = Filter._enabled_CardType_Buttons

		const enabledIndexes = cardType_Buttons
			.map   ((button, index) => ({button, index})                        )
			.filter(({button})      => enabled_CardType_Buttons.includes(button))
			.map   (({index })      => index                                    )

		return enabledIndexes.includes(cardType.index)
	}
	static cardType_IsDisabled(cardType:CardType)
		{return !(Filter.cardType_IsEnabled(cardType))}

	static enable(){
		if(Filter.disabled)
			{Filter._filterButton.click()}
		Filter._on_Update()
	}
	static disable(){
		if(Filter.enabled)
			{Filter._filterButton.click()}
		Filter._on_Update()
	}

	static enable_CardTypes (...ids:(number|string|RegExp)[]){_set_CardType_States(ids, Filter._disabled_CardType_Buttons)}
	static disable_CardTypes(...ids:(number|string|RegExp)[]){_set_CardType_States(ids, Filter._enabled_CardType_Buttons )}
	static toggle_CardTypes (...ids:(number|string|RegExp)[]){_set_CardType_States(ids, Filter._cardType_Buttons         )}

	static on_Update(callback:(() => void))
		{Filter._onUpdate_Callbacks.push(callback)}

	static _on_Update(){
		Filter._onUpdate_Callbacks.forEach(callback =>
			callback()
		)
	}

}


//##############//
//###  Init  ###//
//##############//

KanbanTool.on_PageLoad(() => {
	Filter.enable()
})

KanbanTool.on_PageLoad(Filter.show_AllCards_ID, ()=>{
	Filter.enable()
	Filter.enable_CardTypes()
})

KanbanTool.on_PageLoad(Filter.add_KeyBindings_ID, ()=>{
	KeyBinding.add(["ctrl", "`"], ()=>{
		Hide.emptyColumns()
		Hide.emptyRows()
	})

	KeyBinding.add(["ctrl", "shift", "`"], ()=>{
		Show.allColumns()
		Show.allRows()
		Filter.enable_CardTypes()
	})
})


//###############//
//###  Utils  ###//
//###############//

function _set_CardType_States(
	ids:           (number|string|RegExp)[],
	targetButtons: JQuery[],
){
	const allButtons = Filter._cardType_Buttons

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

	Filter._on_Update()
}

function _process_RegExp_IDs(allButtons:JQuery[], targetButtons:JQuery[], ids:(number|string|RegExp)[]){
	const patterns = ids.filter(id => (id instanceof RegExp )) as RegExp[]
	ids            = ids.filter(id => !(id instanceof RegExp)) as (number|string)[]

	const matchingButton_Indexes =
		CardType.cardTypes
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
		const cardType = CardType.get_FromName(id)
		index = (cardType)
		? cardType.index
		: undefined
	}
	else
		{index = id}

	return index
}

