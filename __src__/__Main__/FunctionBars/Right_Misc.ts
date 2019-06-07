
//###  Module  ###//
import {FunctionBar} from "~/Extensions/FunctionBar/__Main__"
const {Entry, Position, Show, Hide} = FunctionBar


export default new FunctionBar({

	position: Position.Right,

	entryGroups:[

		[
			new Entry({
				name: "LOL",
				callback: () => {
					Show.allRows()
				},
			}),
			new Entry({
				name: "WUT",
				callback: () => {
					Show.allColumns()
				},
			}),
		],

	],

})
