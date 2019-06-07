
//###  Module  ###//
import {FunctionBar} from "~/Extensions/FunctionBar/__Main__"
const {Entry, Position, Show, Hide} = FunctionBar


export default new FunctionBar({

	position: Position.Left,

	entryGroups:[

		[
			new Entry({
				name: "Show: All Rows",
				on_Load: () => {
					Show.allRows()
				},
			}),
			new Entry({
				name: "Show: All Columns",
				on_Load: () => {
					Show.allColumns()
				},
			}),
			new Entry({
				name: "Hide: Empty Rows",
				on_Load: () => {
					Hide.emptyRows()
				},
			}),
			new Entry({
				name: "Hide: Empty Columns",
				on_Load: () => {
					Hide.emptyColumns()
				},
			}),
		],

	],

})
