
//###  Module  ###//
import {FunctionBar} from "~/Extensions/FunctionBar/__Main__"
const {Entry, Position, Show, Hide} = FunctionBar


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

	],

})
