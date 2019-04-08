
//###  Extensions  ###
// import "~/Extensions/CheckList/TEMP"
// import "~/Extensions/FB/TEMP_ModeLegend"
// import "~/Extensions/FunctionBar/TEMP_CardLegend"

import {FunctionBar as FB} from "~/Extensions/FunctionBar/__main__"
import {Show} from "../Extensions/FunctionBar/DefaultFunctions/show";
FB.load(
	new FB.Entry({
		name: "Work",
		on_Enter: () => {
			FB.Show.rows({include:["Daily", "Active"]})
			FB.Show.allColumns()
		},
	}),
	new FB.Entry({
		name: "WorkExclude",
		on_Enter: () => {
			FB.Show.rows({exclude:["Daily", "Active"]})
			FB.Show.allColumns()
		},
	}),
	new FB.Entry({
		name: "Plan",
		on_Enter: () => {
			FB.Show.allRows()
			FB.Show.allColumns()
		},
	}),
	new FB.Entry({
		name: "HideAll",
		on_Enter: () => {
			FB.Show.rows({include:[]})
			FB.Show.columns({include:[]})
		},
	}),
)

//###  KeyBindings  ###
// import "~/KeyBindings/Filter"
