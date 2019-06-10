//###  Module  ###//
import {CardType_Manager} from "~/Extensions/CardType_Manager/__Main__"
import {FunctionBar     } from "~/Extensions/FunctionBar/__Main__"

import "~/Extensions/TODO_CheckList/TEMP"


//######################################//
//###  Extension - CardType_Manager  ###//
//######################################//

const priorityColors = {
	low:    "hsl(220, 40%,  60%)",
	medium: "hsl(50,  100%, 70%)",
	high:   "hsl(25,  100%, 65%)",
	urgent: "hsl(350, 75%,  65%)",
}

const todaySettings = {
	borderColor:     "hsl(143, 45%, 65%)",
	backgroundColor: "hsl(143, 40%, 85%)",
	foregroundColor: "hsl(143, 5%,  40%)",
}

const taskSettings = {
	borderColor:     "hsl(0, 0%, 70%)",
	backgroundColor: "hsl(0, 0%, 80%)",
	foregroundColor: "hsl(0, 0%, 30%)",
}

CardType_Manager.initialize_Manual({
	mode:      CardType_Manager.Mode.SingleRow,
	cellWidth: 125,

	functionBar_Options:{
		stretchCells: false,
	},

	cardTypes: [
		[
			{/*###  "Today_Low"    ###*/ borderAccentColor:priorityColors.low,    ...todaySettings},
			{/*###  "Today_Medium" ###*/ borderAccentColor:priorityColors.medium, ...todaySettings},
			{/*###  "Today_High"   ###*/ borderAccentColor:priorityColors.high,   ...todaySettings},
			{/*###  "Today_Urgent" ###*/ borderAccentColor:priorityColors.urgent, ...todaySettings},
		],
		[
			{/*###  "Task_Low"    ###*/ borderAccentColor:priorityColors.low,    ...taskSettings},
			{/*###  "Task_Medium" ###*/ borderAccentColor:priorityColors.medium, ...taskSettings},
			{/*###  "Task_High"   ###*/ borderAccentColor:priorityColors.high,   ...taskSettings},
			{/*###  "Task_Urgent" ###*/ borderAccentColor:priorityColors.urgent, ...taskSettings},
		],
		[
			{ //###  Daily_Task  ###//
				borderColor:     "hsl(215, 40%, 65%)",
				backgroundColor: "hsl(215, 80%, 85%)",
				foregroundColor: "hsl(215, 20%, 45%)",
			},
			{ //###  Book  ###//
				borderColor:     "hsl(255, 40%, 65%)",
				backgroundColor: "hsl(255, 70%, 85%)",
				foregroundColor: "hsl(255, 20%, 45%)",
			},
		],
	],
})

//#################################//
//###  Extension - FunctionBar  ###//
//#################################//


FunctionBar.load(
	require("./FunctionBars/Left_Commands"   ).default,
	require("./FunctionBars/Top_BoardFilters").default,
)


//#####################//
//###  KeyBindings  ###//
//#####################//

import "~/KeyBindings/Filter"
