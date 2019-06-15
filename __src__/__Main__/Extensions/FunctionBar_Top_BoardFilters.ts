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

const Modes: {[name:string]: Mode[]}[] = [
	{"Tasks": [
		{name:"All",      rows:["Active"], cardTypes:/(Task|Today)_(Low|Medium|High|Urgent)/, is_Default:true},
		{name:"Priority", rows:["Active"], cardTypes:/(Task|Today)_(Medium|High|Urgent)/                     },
	]},
	{"Today": [
		{name:"All",       rows:["Active"], cardTypes:/Today_(Low|Medium|High|Urgent)/},
		{name:"Priority",  rows:["Active"], cardTypes:/Today_(Medium|High|Urgent)/    },
	]},
	{"Daily": [
		{name:"All",    rows:["Daily"          ], cardTypes:/Task_Daily/                                   },
		{name:"+Today", rows:["Daily", "Active"], cardTypes:/(Task_Daily)|(Today_(Low|Medium|High|Urgent))/},
	]},
	{"Plan": [
		{name:"Active", rows:["Active", "Next"         ], cardTypes:undefined},
		{name:"Next",   rows:["Next",   "Queue"        ], cardTypes:undefined},
		{name:"Tasks",  rows:["Active", "Next", "Queue"], cardTypes:undefined},
		{name:"All",    rows:undefined,                   cardTypes:undefined},
	]},
]


//#####################//
//###  FunctionBar  ###//
//#####################//

FunctionBar.load( new FunctionBar({

	position:             Position.Top,
	autoMap_KeyBindings:  true,
	keyBinding_Modifiers: ["shift", "alt"],
	singleContainer:      true,
	stretchCells:         false,
	cellProperties:       [{functionName:"css", args:["min-width", "80px"]}],
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
	return Modes.map(row => {

		const [groupName, group] = Object.entries(row)[0]

		return {[groupName]:
			group.map( ({name, rows, cardTypes, is_Default}) =>
				new Entry({
					name,
					..._get_OnLayout(is_Default),
					..._get_Callback(rows, cardTypes),
				})
			)
		}
	})
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
