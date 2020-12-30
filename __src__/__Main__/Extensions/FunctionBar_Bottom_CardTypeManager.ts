//###  Module  ###//
import {CardType_Manager} from "~/Extensions/CardType_Manager/__Main__"
import {KanbanTool      } from "~/Utils/KanbanTool/__Main__"


//###############//
//###  Setup  ###//
//###############//

const priorityColors = {
	low:    "hsl(220, 40%,  60%)",
	medium: "hsl(50,  100%, 70%)",
	high:   "hsl(25,  100%, 65%)",
	urgent: "hsl(350, 75%,  65%)",
}

const dailyColors = {
	active:   "hsl(143, 60%, 50%)",
	complete: "hsl(143, 0%,  43%)",
}

const todaySettings = {
	background_Color:    "hsl(143, 40%, 85%)",
	foreground_Color:    "hsl(143, 5%,  40%)",
	borderColor_Inside:  "hsl(143, 40%, 50%)",
	borderColor_Main:    "hsl(143, 45%, 65%)",
	borderColor_Outside: "hsl(143, 50%, 40%)",
}

const taskSettings = {
	background_Color:    "hsl(0, 0%, 80%)",
	foreground_Color:    "hsl(0, 0%, 30%)",
	borderColor_Inside:  "hsl(0, 0%, 60%)",
	borderColor_Main:    "hsl(0, 0%, 70%)",
	borderColor_Outside: "hsl(0, 0%, 60%)",
}

const dailySettings = {
	background_Color:    "hsl(215, 80%, 85%)",
	foreground_Color:    "hsl(215, 20%, 40%)",
	borderColor_Inside:  "hsl(215, 40%, 50%)",
	borderColor_Main:    "hsl(215, 40%, 65%)",
	borderColor_Outside: "hsl(215, 50%, 50%)",
}


//#####################//
//###  FunctionBar  ###//
//#####################//

CardType_Manager.initialize_Manual({
	cellWidth: 75,

	functionBar_Options:{
		singleContainer: true,
		stretchCells:    false,
	},

	cardTypes: [
		{"Task":[
			{/*###  Task_Low    ###*/ name:"Low",    borderAccent_Color:priorityColors.low,    ...taskSettings},
			{/*###  Task_Medium ###*/ name:"Medium", borderAccent_Color:priorityColors.medium, ...taskSettings},
			{/*###  Task_High   ###*/ name:"High",   borderAccent_Color:priorityColors.high,   ...taskSettings},
			{/*###  Task_Urgent ###*/ name:"Urgent", borderAccent_Color:priorityColors.urgent, ...taskSettings},
		]},
		{"Today":[
			{/*###  Today_Low    ###*/ name:"Low",    borderAccent_Color:priorityColors.low,    ...todaySettings},
			{/*###  Today_Medium ###*/ name:"Medium", borderAccent_Color:priorityColors.medium, ...todaySettings},
			{/*###  Today_High   ###*/ name:"High",   borderAccent_Color:priorityColors.high,   ...todaySettings},
			{/*###  Today_Urgent ###*/ name:"Urgent", borderAccent_Color:priorityColors.urgent, ...todaySettings},
		]},
		{"Daily":[
			{/*###  Daily_Complete ###*/ name:"Complete", borderAccent_Color:dailyColors.complete, ...dailySettings},
			{/*###  Daily_Active   ###*/ name:"Active",   borderAccent_Color:dailyColors.active,   ...dailySettings},
		]},
		{"Misc":[
			...KanbanTool.cardTypes.slice(10).map(cardType =>
				_get_Default_CardOptions(cardType)
			),
		]},
	],
})


//####################################################################################################################//
//##>  Utilities                                                                                                    ##//
//####################################################################################################################//

function _get_Default_CardOptions(cardType:KanbanTool.CardType){
	const h = _get_Hue_From_Hex(cardType.bgColor)
	return {
		name:                cardType.name,
		borderAccent_Color:  undefined,
		background_Color:    `hsl(${h}, 50%, 85%)`,
		foreground_Color:    `hsl(${h}, 20%, 40%)`,
		borderColor_Inside:  `hsl(${h}, 50%, 50%)`,
		borderColor_Main:    `hsl(${h}, 50%, 65%)`,
		borderColor_Outside: `hsl(${h}, 60%, 50%)`,
	}
}

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
