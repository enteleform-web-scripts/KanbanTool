
//###  Module  ###//
import {FunctionBar} from "~/Extensions/FunctionBar/__Main__"
const {Entry, Position, Show, Hide} = FunctionBar


export default new FunctionBar({

	position:             Position.Top,
	autoMap_KeyBindings:  true,
	keyBinding_Modifiers: ["shift", "alt"],
	stretchCells:         false,

	entryGroups:[

		[
			new Entry({
				name: "Today",
				callback: () => {
					Show.allColumns()
					Show.rows({include:["Routine", "Tasks.Active"]})
					Hide.emptyColumns()
				},
			}),
			new Entry({
				name: "Today.All",
				callback: () => {
					Show.allColumns()
					Show.rows({include:["Routine", "Tasks.Active"]})
				},
			}),
			new Entry({
				name: "All",
				callback: () => {
					Show.allColumns()
					Show.allRows()
				},
			}),
		],

		[
			new Entry({
				name: "Routine",
				callback: () => {
					Show.allColumns()
					Show.rows({include:["Routine"]})
					Hide.emptyColumns()
				},
			}),
			new Entry({
				name: "Tasks.Active",
				callback: () => {
					Show.allColumns()
					Show.rows({include:["Tasks.Active"]})
					Hide.emptyColumns()
				},
			}),
			new Entry({
				name: "Routine.Short",
				callback: () => {
					Show.allColumns()
					Show.rows({include:["Routine.Short"]})
					Hide.emptyColumns()
				},
			}),
		],

	],

})
