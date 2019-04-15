
//###  Module  ###
import {FunctionBar} from "~/Extensions/FunctionBar/__Main__"
const {Entry, Position, Show, Hide} = FunctionBar


export default new FunctionBar({

	position: Position.Right,

	entryGroups:[

		[
			new Entry({
				name: "LOL",
				on_Load: () => {
					Show.allRows()
				},
			}),
			new Entry({
				name: "WUT",
				on_Load: () => {
					Show.allColumns()
				},
			}),
		],

	],

})
