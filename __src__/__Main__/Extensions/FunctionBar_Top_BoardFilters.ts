//###  Module  ###//
import {FunctionBar} from "~/Extensions/FunctionBar/__Main__"
import {KanbanTool } from "~/Utils/KanbanTool/__Main__"
import {Filter     } from "~/Utils/KanbanTool/CardType/Filter"

//###  Aliases  ###//
const {Entry, Position                    } = FunctionBar
const {CardType, Show, Hide               } = KanbanTool
const {enable_CardTypes, disable_CardTypes} = CardType.Filter


//###############//
//###  Setup  ###//
//###############//

const Modes: {[name:string]: Mode[]}[] = [
	{"Today": [
		{name:"Plan",   rows:["Daily", "Active"], enabled_CardTypes:undefined,                                         disabled_CardTypes:/Archived/, hide_EmptyRows:true, hide_EmptyColumns:true, is_Default:true},
		{name:"Active", rows:["Daily", "Active"], enabled_CardTypes:/(Daily_Active)|(Today_(Low|Medium|High|Urgent))/, disabled_CardTypes:/Archived/, hide_EmptyRows:true, hide_EmptyColumns:true,                },
	]},
	{"Overview": [
		{name:"Plan", rows:undefined, enabled_CardTypes:undefined, disabled_CardTypes:/Archived/},
	]},
	//{"Tasks": [
	//	{name:"All",      rows:["Active"], cardTypes:/(Task|Today)_(Low|Medium|High|Urgent)/, is_Default:true},
	//	{name:"Priority", rows:["Active"], cardTypes:/(Task|Today)_(Medium|High|Urgent)/                     },
	//]},
	//{"Today": [
	//	{name:"All",       rows:["Active"], cardTypes:/Today_(Low|Medium|High|Urgent)/},
	//	{name:"Priority",  rows:["Active"], cardTypes:/Today_(Medium|High|Urgent)/    },
	//]},
	//{"Daily": [
	//	{name:"All",    rows:["Daily"          ], cardTypes:/Task_Daily/                                   },
	//	{name:"+Today", rows:["Daily", "Active"], cardTypes:/(Task_Daily)|(Today_(Low|Medium|High|Urgent))/},
	//]},
	//{"Plan": [
	//	{name:"Active", rows:["Active", "Next"         ], cardTypes:undefined},
	//	{name:"Next",   rows:["Next",   "Queue"        ], cardTypes:undefined},
	//	{name:"Tasks",  rows:["Active", "Next", "Queue"], cardTypes:undefined},
	//	{name:"All",    rows:undefined,                   cardTypes:undefined},
	//]},
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
	name:               string
	rows:               string[]
	enabled_CardTypes:  RegExp
	disabled_CardTypes: RegExp
	is_Default?:        boolean
	hide_EmptyRows?:    boolean
	hide_EmptyColumns?: boolean
}

function _get_EntryGroups(){
	return Modes.map(row => {

		const [groupName, group] = Object.entries(row)[0]

		return {[groupName]:
			group.map( ({name, rows, enabled_CardTypes, disabled_CardTypes, hide_EmptyRows, hide_EmptyColumns, is_Default}) =>
				new Entry({
					name,
					..._get_OnLayout(is_Default),
					..._get_Callback(rows, enabled_CardTypes, disabled_CardTypes, hide_EmptyRows, hide_EmptyColumns),
				})
			)
		}
	})
}

function _get_Callback(rows:string[], enabled_CardTypes:RegExp, disabled_CardTypes:RegExp, hide_EmptyRows:boolean, hide_EmptyColumns:boolean){
	return {callback: (event:any) => {
		const _enabled_CardTypes  = (enabled_CardTypes ) ? [enabled_CardTypes ] : []
		const _disabled_CardTypes = (disabled_CardTypes) ? [disabled_CardTypes] : []

		Show.allColumns()

		if(rows)
			{Show.rows({include:rows})}
		else
			{Show.allRows()}

		disable_CardTypes()
		enable_CardTypes(..._enabled_CardTypes)

		if(_disabled_CardTypes.length > 0){
			setTimeout(()=>{
				Filter.disable_CardTypes(..._disabled_CardTypes)
			}, 100)
		}

		if(hide_EmptyColumns)
			{Hide.emptyColumns()}
		if(hide_EmptyRows)
			{Hide.emptyRows()}
	}}
}

function _get_OnLayout(is_Default:boolean){
	return (
		is_Default
		? {on_Layout: function(cell:JQuery){this.callback(null, null)}}
		: {}
	)
}
