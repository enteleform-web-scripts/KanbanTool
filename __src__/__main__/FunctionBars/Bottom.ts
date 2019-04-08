
//###  Module  ###
import {FunctionBar} from "~/Extensions/FunctionBar/__main__"
const {Entry, Position, Show} = FunctionBar


export const bottom_FunctionBar = new FunctionBar({

	position:             Position.Bottom,
	autoMap_KeyBindings:  true,
	keyBinding_Modifiers: ["alt"],

	entryGroups:[

		[
			new Entry({
				name: "Work",
				on_Load: () => {
					Show.rows({include:["Daily", "Active"]})
					Show.allColumns()
				},
			}),
			new Entry({
				name: "WorkExclude",
				on_Load: () => {
					Show.rows({exclude:["Daily", "Active"]})
					Show.allColumns()
				},
			}),
		],

		[
			new Entry({
				name: "Plan",
				on_Load: () => {
					Show.allRows()
					Show.allColumns()
				},
			}),
			new Entry({
				name: "HideAll",
				on_Load: () => {
					Show.rows({include:[]})
					Show.columns({include:[]})
				},
			}),
		],

	],

})
