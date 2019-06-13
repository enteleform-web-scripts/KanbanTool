//###  Module  ###//
import {CardType_Manager} from "~/Extensions/CardType_Manager/__Main__"


//###############//
//###  Setup  ###//
//###############//

const priorityColors = {
	low:    "hsl(220, 40%,  60%)",
	medium: "hsl(50,  100%, 70%)",
	high:   "hsl(25,  100%, 65%)",
	urgent: "hsl(350, 75%,  65%)",
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


//#####################//
//###  FunctionBar  ###//
//#####################//

CardType_Manager.initialize_Manual({
	mode:      CardType_Manager.Mode.SingleRow,
	cellWidth: 125,

	functionBar_Options:{
		stretchCells: false,
	},

	cardTypes: [
		[
			{/*###  "Task_Low"    ###*/ borderAccent_Color:priorityColors.low,    ...taskSettings},
			{/*###  "Task_Medium" ###*/ borderAccent_Color:priorityColors.medium, ...taskSettings},
			{/*###  "Task_High"   ###*/ borderAccent_Color:priorityColors.high,   ...taskSettings},
			{/*###  "Task_Urgent" ###*/ borderAccent_Color:priorityColors.urgent, ...taskSettings},
		],
		[
			{/*###  "Today_Low"    ###*/ borderAccent_Color:priorityColors.low,    ...todaySettings},
			{/*###  "Today_Medium" ###*/ borderAccent_Color:priorityColors.medium, ...todaySettings},
			{/*###  "Today_High"   ###*/ borderAccent_Color:priorityColors.high,   ...todaySettings},
			{/*###  "Today_Urgent" ###*/ borderAccent_Color:priorityColors.urgent, ...todaySettings},
		],
		[
			{ //###  Task_Daily  ###//
				background_Color:    "hsl(215, 80%, 85%)",
				foreground_Color:    "hsl(215, 20%, 40%)",
				borderColor_Inside:  "hsl(215, 40%, 50%)",
				borderColor_Main:    "hsl(215, 40%, 65%)",
				borderColor_Outside: "hsl(215, 50%, 50%)",
			},
			{ //###  Book  ###//
				background_Color:    "hsl(255, 70%, 85%)",
				foreground_Color:    "hsl(255, 20%, 40%)",
				borderColor_Inside:  "hsl(255, 40%, 50%)",
				borderColor_Main:    "hsl(255, 40%, 65%)",
				borderColor_Outside: "hsl(255, 50%, 55%)",
			},

		],
	],
})

