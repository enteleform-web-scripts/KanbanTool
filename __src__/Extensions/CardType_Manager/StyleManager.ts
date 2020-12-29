//###  Module  ###//
import {_CardOptions     } from "./__Main__"
import {$set_CSS_Variable} from "~/Utils/CSS_Variables/__Main__"
import {KanbanTool       } from "~/Utils/KanbanTool/__Main__"

//###  NPM  ###//
const $:any = require("jquery")

//###  Aliases  ###//
type  CardType = KanbanTool.CardType
const {CardType, cardTypes} = KanbanTool


//#################//
//###  Exports  ###//
//#################//

export namespace StyleManager{

	export let _CardType_Options: _CardOptions[]
	export let _CardType_ID_Map:  {[id:number]: CardType}

	export function initialize(cardOptions:_CardOptions[][]){
		StyleManager._CardType_Options =
			(cardOptions === undefined)
			? undefined
			: cardOptions.flatMap(option => option)

		StyleManager._CardType_ID_Map = _build_CardType_ID_Map()

		const callback = ()=>{
			$.find("kt-task").forEach(element=>{
				update_CardStyle(element)
			})
		}

		KanbanTool.on_PageLoad(() => {
			callback()
			KanbanTool.API.tasks.on("change", callback)
		})
	}

	export function update_CardStyle(element:(HTMLElement|JQuery), cardType?:CardType){
		element  = $(element) as JQuery
		cardType = (cardType || _get_CardType(element))

		if(StyleManager._CardType_Options === undefined)
			{_update_CardStyle_From_CardTypes(element, cardType)}
		else
			{_update_CardStyle_From_CardOptions(element, cardType)}
	}

}

//###############//
//###  Utils  ###//
//###############//

function _get_Default_CardOptions(cardType:CardType){
	const h = _get_Hue_From_Hex(cardType.bgColor)
	return {
		borderAccent_Color:  undefined,
		background_Color:    `hsl(${h}, 50%, 85%)`,
		foreground_Color:    `hsl(${h}, 20%, 40%)`,
		borderColor_Inside:  `hsl(${h}, 50%, 50%)`,
		borderColor_Main:    `hsl(${h}, 50%, 65%)`,
		borderColor_Outside: `hsl(${h}, 60%, 50%)`,
	}
}

function _build_CardType_ID_Map(){
	const idMap: {[id:number]: CardType} = {}
	cardTypes.forEach(cardType => {
		idMap[cardType.id] = cardType
	})
	return idMap
}

function _update_CardStyle_From_CardTypes(element:JQuery, cardType:CardType){
	$set_CSS_Variable(element, "title_BorderColor_Main", cardType.bgColor)
}

function _update_CardStyle_From_CardOptions(element:JQuery, cardType:CardType){
	const cardOptions = (_get_CardOptions(element, cardType) || _get_Default_CardOptions(cardType))

	Array.from([
		["title_Background_Color",    cardOptions.background_Color   ],
		["title_Foreground_Color",    cardOptions.foreground_Color   ],
		["title_BorderColor_Main",    cardOptions.borderColor_Main   ],
		["title_BorderColor_Inside",  cardOptions.borderColor_Inside ],
		["title_BorderColor_Outside", cardOptions.borderColor_Outside],
	]).forEach( ([key, value]) => {
		if(value)
			{$set_CSS_Variable(element, key, value)}
	})

	if(cardOptions.borderAccent_Color){
		$set_CSS_Variable(element, "title_BorderAccent_Color", cardOptions.borderAccent_Color)
		element.addClass("borderAccent_Enabled")
	}
	else{
		$set_CSS_Variable(element, "title_BorderAccent_Color", "#0000")
		element.removeClass("borderAccent_Enabled")
	}
}

function _get_CardType(element:JQuery){
	const taskID      = element.data("task-id")
	const model       = KanbanTool.API.tasks.stub(taskID)
	const cardType_ID = model.cardType().id
	return StyleManager._CardType_ID_Map[cardType_ID]
}

function _get_CardOptions(element:JQuery, cardType:CardType)
	{return StyleManager._CardType_Options[cardType.index]}

//###  Reference: https://css-tricks.com/converting-color-spaces-in-javascript/#hex-to-hsl  ###//
function _get_Hue_From_Hex(H){
	let r = parseInt("0x" + H[1] + H[2])
	let g = parseInt("0x" + H[3] + H[4])
	let b = parseInt("0x" + H[5] + H[6])

	// Then to HSL
	r /= 255
	g /= 255
	b /= 255
	let cmin = Math.min(r,g,b),
			cmax = Math.max(r,g,b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0

	if (delta == 0)
		h = 0
	else if (cmax == r)
		h = ((g - b) / delta) % 6
	else if (cmax == g)
		h = (b - r) / delta + 2
	else
		h = (r - g) / delta + 4

	h = Math.round(h * 60)

	if (h < 0)
		h += 360

	l = (cmax + cmin) / 2
	s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
	s = +(s * 100).toFixed(1)
	l = +(l * 100).toFixed(1)

	return h
}
