
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
				},
			}),
			new Entry({
				name: "Today",
				on_Load: () => {
					Show.rows({include:["Tasks.Active"]})
					Show.allColumns()
				},
			}),
			new Entry({
				name: "Routine.Short",
				on_Load: () => {
					Show.rows({include:["Routine.Short"]})
					Show.allColumns()
				},
			}),
		],

		[
			new Entry({
				name: "HideAll",
				on_Load: () => {
					Show.noColumns()
					Show.noRows()
				},
			}),
			new Entry({
				name: "Fitness Math",
				on_Load: () => {
					Show.allRows()
					Show.columns({include:["Fitness", "Math"]})
				},
			}),
			new Entry({
				name: "!(Fitness Math)",
				on_Load: () => {
					Show.allRows()
					Show.columns({exclude:["Fitness", "Math"]})
				},
			}),
		],

		[
			new Entry({
				name: "HideAll",
				on_Load: () => {
					Show.noColumns()
					Show.noRows()
				},
			}),
			new Entry({
				name: "ShowAll",
				on_Load: () => {
					Show.allColumns()
					Show.allRows()
				},
			}),
		],

		// [
		// 	new Entry({
		// 		name: "*",
		// 		on_Load: () => {
		// 			Show.allRows()
		// 			Show.columns({include:["*"]})
		// 		},
		// 	}),
		// 	new Entry({
		// 		name: "**",
		// 		on_Load: () => {
		// 			Show.allRows()
		// 			Show.columns({include:["**"]})
		// 		},
		// 	}),
		// 	new Entry({
		// 		name: "**\\*",
		// 		on_Load: () => {
		// 			Show.allRows()
		// 			Show.columns({include:["**\\*"]})
		// 		},
		// 	}),
		// 	new Entry({
		// 		name: "***",
		// 		on_Load: () => {
		// 			Show.allRows()
		// 			Show.columns({include:["***"]})
		// 		},
		// 	}),
		// ],

		// [
		// 	new Entry({
		// 		name: "B\\*",
		// 		on_Load: () => {
		// 			Show.allRows()
		// 			Show.columns({include:["B\\*"]})
		// 		},
		// 	}),
		// 	new Entry({
		// 		name: "B\\**",
		// 		on_Load: () => {
		// 			Show.allRows()
		// 			Show.columns({include:["B\\**"]})
		// 		},
		// 	}),
		// 	new Entry({
		// 		name: "B\\**\\*",
		// 		on_Load: () => {
		// 			Show.allRows()
		// 			Show.columns({include:["B\\**\\*"]})
		// 		},
		// 	}),
		// 	new Entry({
		// 		name: "B\\***",
		// 		on_Load: () => {
		// 			Show.allRows()
		// 			Show.columns({include:["B\\***"]})
		// 		},
		// 	}),
		// ],

		// [
		// 	new Entry({
		// 		name: "2\\*",
		// 		on_Load: () => {
		// 			Show.allRows()
		// 			Show.columns({include:["2\\*"]})
		// 		},
		// 	}),
		// 	new Entry({
		// 		name: "2\\**",
		// 		on_Load: () => {
		// 			Show.allRows()
		// 			Show.columns({include:["2\\**"]})
		// 		},
		// 	}),
		// 	new Entry({
		// 		name: "**\\2\\*",
		// 		on_Load: () => {
		// 			Show.allRows()
		// 			Show.columns({include:["**\\2\\*"]})
		// 		},
		// 	}),
		// 	new Entry({
		// 		name: "**\\2\\**",
		// 		on_Load: () => {
		// 			Show.allRows()
		// 			Show.columns({include:["**\\2\\**"]})
		// 		},
		// 	}),
		// ],

	],

})
