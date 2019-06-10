//###  Module  ###//
import {CardType_Manager} from "~/Extensions/CardType_Manager/__Main__"
import {FunctionBar     } from "~/Extensions/FunctionBar/__Main__"

import "~/Extensions/TODO_CheckList/TEMP"


//######################################//
//###  Extension - CardType_Manager  ###//
//######################################//

const priorityColors = {
	low:    "#7268FD",
	medium: "#FDE568",
	high:   "#FF974B",
	urgent: "#E65868",
}

const todaySettings = {
	borderColor:     "#7CCE9B",
	backgroundColor: "#CDEAD8",
	foregroundColor: "#636B66",
}

const taskSettings = {
	borderColor:     "#B1B1B1",
	backgroundColor: "#CCCCCC",
	foregroundColor: "#505050",
}

CardType_Manager.initialize_Manual({
	// mode:      CardType_Manager.Mode.SingleRow,
	mode:      CardType_Manager.Mode.MultipleRows,
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
				borderColor:     "#B1B1B1",
				backgroundColor: "#CCCCCC",
				foregroundColor: "#505050",
			},
			{ //###  Book  ###//
				borderColor:     "#B1B1B1",
				backgroundColor: "#CCCCCC",
				foregroundColor: "#505050",
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
