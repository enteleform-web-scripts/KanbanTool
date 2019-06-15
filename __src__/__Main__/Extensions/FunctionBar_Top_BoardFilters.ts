//###  Module  ###//
import {FunctionBar} from "~/Extensions/FunctionBar/__Main__"
import {KanbanTool } from "~/Utils/KanbanTool/__Main__"

//###  Aliases  ###//
const {Entry, Position                    } = FunctionBar
const {CardType, Show, Hide               } = KanbanTool
const {enable_CardTypes, disable_CardTypes} = CardType.Filter


//###############//
//###  Setup  ###//
//###############//

const Modes: Mode[][] = [
	[
		{name:"Tasks_All",      rows:["Active"], cardTypes:/(Task|Today)_(Low|Medium|High|Urgent)/, is_Default:true},
		{name:"Tasks_Priority", rows:["Active"], cardTypes:/(Task|Today)_(Medium|High|Urgent)/                     },
	],
	[
		{name:"Today_All",       rows:["Active"], cardTypes:/Today_(Low|Medium|High|Urgent)/},
		{name:"Today_Priority",  rows:["Active"], cardTypes:/Today_(Medium|High|Urgent)/    },
	],
	[
		{name:"Routine",         rows:["Daily"          ], cardTypes:/Task_Daily/                                   },
		{name:"Routine + Today", rows:["Daily", "Active"], cardTypes:/(Task_Daily)|(Today_(Low|Medium|High|Urgent))/},
	],
	[
		{name:"Plan_Active", rows:["Active", "Next"         ], cardTypes:undefined},
		{name:"Plan_Next",   rows:["Next",   "Queue"        ], cardTypes:undefined},
		{name:"Plan_Tasks",  rows:["Active", "Next", "Queue"], cardTypes:undefined},
		{name:"Plan_All",    rows:undefined,                   cardTypes:undefined},
	],
]


//#####################//
//###  FunctionBar  ###//
//#####################//

FunctionBar.load( new FunctionBar({

	position:             Position.Top,
	autoMap_KeyBindings:  true,
	keyBinding_Modifiers: ["alt"],
	singleRow:            true,
	stretchCells:         false,
	cellProperties:       [{functionName:"css", args:["min-width", "130px"]}],
	entryGroups:          _get_EntryGroups(),

}))


//###############//
//###  Utils  ###//
//###############//

interface Mode{
	name:        string,
	rows:        string[],
	cardTypes:   RegExp,
	is_Default?: boolean
}

function _get_EntryGroups(){
	return Modes.map(row =>
		row.map( ({name, rows, cardTypes, is_Default}) =>

			new Entry({
				name,
				..._get_OnLayout(is_Default),
				..._get_Callback(rows, cardTypes),
			})

		)
	)
}

function _get_Callback(rows:string[], cardTypes:RegExp){
	return {callback: (event:any) => {
		const _cardTypes = (cardTypes) ? [cardTypes] : []

		Show.allColumns()

		if(rows)
			{Show.rows({include:rows})}
		else
			{Show.allRows()}

		disable_CardTypes()
		enable_CardTypes(..._cardTypes)
		Hide.emptyColumns()
	}}
}

function _get_OnLayout(is_Default:boolean){
	return (
		is_Default
		? {on_Layout: function(cell:JQuery){this.callback(null, null)}}
		: {}
	)
}
