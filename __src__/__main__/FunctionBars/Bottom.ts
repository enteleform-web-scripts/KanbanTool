
//###  Module  ###
import {FunctionBar} from "~/Extensions/FunctionBar/__Main__"
const {Entry, Position, Show, Hide} = FunctionBar


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

		[
			new Entry({
				name: "Hide.emptyColumns",
				on_Load: () => {
					Show.allColumns()
					Show.allRows()
					Hide.emptyColumns()
				},
			}),
			new Entry({
				name: "Hide.emptyRows",
				on_Load: () => {
					Show.allColumns()
					Show.allRows()
					Hide.emptyRows()
				},
			}),
		],

		// [
		// 	new Entry({
		// 		name: "Fitness Math",
		// 		on_Load: () => {
		// 			Show.allRows()
		// 			Show.columns({include:["Fitness", "Math"]})
		// 		},
		// 	}),
		// 	new Entry({
		// 		name: "!(Fitness Math)",
		// 		on_Load: () => {
		// 			Show.allRows()
		// 			Show.columns({exclude:["Fitness", "Math"]})
		// 		},
		// 	}),
		// 	new Entry({
		// 		name: "Music\\Theory",
		// 		on_Load: () => {
		// 			Show.allRows()
		// 			Show.columns({include:["Music\\Theory"]})
		// 		},
		// 	}),
		// ],

		// [
		// 	new Entry({
		// 		name: "HideAll",
		// 		on_Load: () => {
		// 			Hide.allColumns()
		// 			Hide.allRows()
		// 		},
		// 	}),
		// 	new Entry({
		// 		name: "ShowAll",
		// 		on_Load: () => {
		// 			Show.allColumns()
		// 			Show.allRows()
		// 		},
		// 	}),
		// ],

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

		// [
		// 	new Entry({
		// 		name: "!(B\\2)",
		// 		on_Load: () => {
		// 			Show.allRows()
		// 			Show.columns({exclude:["B\\2\\*"]})
		// 		},
		// 	}),
		// 	new Entry({
		// 		name: "!(B\\2\\*)",
		// 		on_Load: () => {
		// 			Show.allRows()
		// 			Show.columns({exclude:["B\\2\\*"]})
		// 		},
		// 	}),
		// 	new Entry({
		// 		name: "!(B\\2\\21)",
		// 		on_Load: () => {
		// 			Show.allRows()
		// 			Show.columns({exclude:["B\\2\\21"]})
		// 		},
		// 	}),
		// ],

	],

})
