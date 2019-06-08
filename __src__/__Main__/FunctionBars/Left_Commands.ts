
//###  Module  ###//
import {FunctionBar} from "~/Extensions/FunctionBar/__Main__"
const {Entry, Position} = FunctionBar
import {
	CardType_Filter,
	Show, Hide,
} from "~/Utils/KanbanTool/__Main__"


//################//
//###  Export  ###//
//################//

export default new FunctionBar({

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
					CardType_Filter.enable_CardTypes()
				},
			}),
			new Entry({
				name: "Filter_None",
				callback: () => {
					CardType_Filter.disable_CardTypes()
				},
			}),
		],

	],

})
