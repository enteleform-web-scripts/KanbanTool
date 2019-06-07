
//###  Module  ###//
import {FunctionBar} from "~/Extensions/FunctionBar/__Main__"
const {Entry, Position, Show, Hide} = FunctionBar


export default new FunctionBar({

	position:             Position.Top,
	autoMap_KeyBindings:  true,
	keyBinding_Modifiers: ["ctrl", "shift", "alt"],
	stretchCells:         false,

	entryGroups:[

		[
			new Entry({
				name: "Today",
				callback: () => {
					Show.rows({include:["Routine", "Tasks.Active"]})
					Show.allColumns()
					Hide.emptyColumns()
				},
			}),
			new Entry({
				name: "Today.All",
				callback: () => {
					Show.rows({include:["Routine", "Tasks.Active"]})
					Show.allColumns()
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
					Show.rows({include:["Routine"]})
					Show.allColumns()
					Hide.emptyColumns()
				},
			}),
			new Entry({
				name: "Tasks.Active",
				callback: () => {
					Show.rows({include:["Tasks.Active"]})
					Show.allColumns()
					Hide.emptyColumns()
				},
			}),
			new Entry({
				name: "Routine.Short",
				callback: () => {
					Show.rows({include:["Routine.Short"]})
					Show.allColumns()
					Hide.emptyColumns()
				},
			}),
		],

	],

})
