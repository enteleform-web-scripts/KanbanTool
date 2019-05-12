
//###  Module  ###
import {FunctionBar} from "~/Extensions/FunctionBar/__Main__"
const {Entry, Position, Show, Hide} = FunctionBar


export default new FunctionBar({

	position:             Position.Top,
	autoMap_KeyBindings:  true,
	keyBinding_Modifiers: ["ctrl", "shift", "alt"],

	entryGroups:[

		[
			new Entry({
				name: "Active",
				on_Load: () => {
					Show.rows({include:["Routine", "Tasks.Active"]})
					Show.allColumns()
				},
			}),
			new Entry({
				name: "Plan",
				on_Load: () => {
					Show.allColumns()
					Show.allRows()
				},
			}),
		],

		[
			new Entry({
				name: "Routine",
				on_Load: () => {
					Show.rows({include:["Routine"]})
					Show.allColumns()
					Hide.emptyColumns()
				},
			}),
			new Entry({
				name: "Today",
				on_Load: () => {
					Show.rows({include:["Tasks.Active"]})
					Show.allColumns()
					Hide.emptyColumns()
				},
			}),
			new Entry({
				name: "Routine.Short",
				on_Load: () => {
					Show.rows({include:["Routine.Short"]})
					Show.allColumns()
					Hide.emptyColumns()
				},
			}),
		],

	],

})