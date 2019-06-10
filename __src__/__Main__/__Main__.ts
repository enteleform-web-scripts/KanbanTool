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

// CardType_Manager.initialize_Manual({
// 	mode:      CardType_Manager.Mode.SingleRow,
// 	// mode:      CardType_Manager.Mode.MultipleRows,
// 	cellWidth: 125,

// 	functionBar_Options:{
// 		stretchCells: false,
// 	},

// 	cardTypes: [
// 		[
// 			{name:"Today_Low",    borderAccentColor:priorityColors.low,    ...todaySettings},
// 			{name:"Today_Medium", borderAccentColor:priorityColors.medium, ...todaySettings},
// 			{name:"Today_High",   borderAccentColor:priorityColors.high,   ...todaySettings},
// 			{name:"Today_Urgent", borderAccentColor:priorityColors.urgent, ...todaySettings},
// 		],
// 		[
// 			{name:"Task_Low",    borderAccentColor:priorityColors.low,    ...taskSettings},
// 			{name:"Task_Medium", borderAccentColor:priorityColors.medium, ...taskSettings},
// 			{name:"Task_High",   borderAccentColor:priorityColors.high,   ...taskSettings},
// 			{name:"Task_Urgent", borderAccentColor:priorityColors.urgent, ...taskSettings},
// 		],
// 		[
// 			{
// 				name:            "Daily_Task",
// 				borderColor:     "#B1B1B1",
// 				backgroundColor: "#CCCCCC",
// 				foregroundColor: "#505050",
// 			},
// 			{
// 				name:            "Book",
// 				borderColor:     "#B1B1B1",
// 				backgroundColor: "#CCCCCC",
// 				foregroundColor: "#505050",
// 			},
// 		],
// 	],
// })

CardType_Manager.initialize_Auto({
	cellWidth: 125,

	functionBar_Options:{
		stretchCells: false,
	},
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
