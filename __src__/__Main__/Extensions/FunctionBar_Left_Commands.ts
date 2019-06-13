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

	position: Position.Left,

	entryGroups:[

		[
			new Entry({
				name: "Show_Rows",
				callback: () => {
					Show.allRows()
				},
			}),
			new Entry({
				name: "Show_Columns",
				callback: () => {
					Show.allColumns()
				},
			}),
			new Entry({
				name: "Hide_Rows",
				callback: () => {
					Hide.emptyRows()
				},
			}),
			new Entry({
				name: "Hide_Columns",
				callback: () => {
					Hide.emptyColumns()
				},
			}),
			new Entry({
				name: "Filter_All",
				callback: () => {
					CardType.Filter.enable_CardTypes()
				},
			}),
			new Entry({
				name: "Filter_None",
				callback: () => {
					CardType.Filter.disable_CardTypes()
				},
			}),
			new Entry({
				name: "Clear_Today",
				callback: () => {
					TaskToggle.convert_TodayCards_To_TaskCards()
				},
			}),
		],

	],

}))
