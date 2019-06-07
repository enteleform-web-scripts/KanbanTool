
//###  Module  ###//
import {FunctionBar} from "~/Extensions/FunctionBar/__Main__"
const {Entry, Position, Show, Hide} = FunctionBar
import {CardType_Filter} from "~/Extensions/FunctionBar/DefaultFunctions/CardType_Filter/__Main__"

export default new FunctionBar({

	position: Position.Left,

	entryGroups:[

		[
			new Entry({
				name: "Show: All Rows",
				callback: () => {
					Show.allRows()
				},
			}),
			new Entry({
				name: "Show: All Columns",
				callback: () => {
					Show.allColumns()
				},
			}),
			new Entry({
				name: "Hide: Empty Rows",
				callback: () => {
					Hide.emptyRows()
				},
			}),
			new Entry({
				name: "Hide: Empty Columns",
				callback: () => {
					Hide.emptyColumns()
				},
			}),
		],

		[
			new Entry({
				name: "Filter: Enable All",
				callback: () => {
					CardType_Filter.enable_CardTypes()
				},
			}),
			new Entry({
				name: "Filter: Disable All",
				callback: () => {
					CardType_Filter.disable_CardTypes()
				},
			}),
		],

	],

})
