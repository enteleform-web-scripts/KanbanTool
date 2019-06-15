//###  Utils  ###//
import {TaskToggle} from "../Utils/TaskToggle";

//###  Module  ###//
import {FunctionBar} from "~/Extensions/FunctionBar/__Main__"
import {KanbanTool } from "~/Utils/KanbanTool/__Main__"

//###  Aliases  ###//
const {Entry, Position     } = FunctionBar
const {CardType, Show, Hide} = KanbanTool


//#####################//
//###  FunctionBar  ###//
//#####################//

FunctionBar.load( new FunctionBar({

	position:        Position.Left,
	singleContainer: true,

	entryGroups:[

		{"Today":[
			new Entry({
				name: "Clear",
				callback: () => {
					TaskToggle.convert_TodayCards_To_TaskCards()
				},
			}),
		]},

		{"Show":[
			new Entry({
				name: "Rows",
				callback: () => {
					Show.allRows()
				},
			}),
			new Entry({
				name: "Columns",
				callback: () => {
					Show.allColumns()
				},
			}),
		]},

		{"Hide":[
			new Entry({
				name: "Rows",
				callback: () => {
					Hide.emptyRows()
				},
			}),
			new Entry({
				name: "Columns",
				callback: () => {
					Hide.emptyColumns()
				},
			}),
		]},

		{"Filter":[
			new Entry({
				name: "Clear",
				callback: () => {
					CardType.Filter.enable_CardTypes()
				},
			}),
			new Entry({
				name: "All",
				callback: () => {
					CardType.Filter.disable_CardTypes()
				},
			}),
		]},

	],

}))
