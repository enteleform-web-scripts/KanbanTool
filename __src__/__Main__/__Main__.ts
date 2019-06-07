
//####################//
//###  Extensions  ###//
//####################//

import "~/Extensions/TODO_CheckList/TEMP"

import {FunctionBar} from "~/Extensions/FunctionBar/__Main__"
import {Basic_CardType_FunctionBar} from "~/Extensions/FunctionBar/DefaultBars/CardTypes/__Main__"
import {get_CardType_FunctionBar} from "~/Extensions/FunctionBar/DefaultBars/CardTypes/__Main__"
FunctionBar.load(
	require("./FunctionBars/Left_Commands"     ).default,
	require("./FunctionBars/Right_Misc"        ).default,
	require("./FunctionBars/Top_BoardFilters"  ).default,
	Basic_CardType_FunctionBar,
	// get_CardType_FunctionBar({
	// 	position:             FunctionBar.Position.Bottom,
	// 	autoMap_KeyBindings:  true,
	// 	keyBinding_Modifiers: [],
	// 	stretchCells:         false,
	// 	rowCounts:            [3, 2]
	// }),
)

//#####################//
//###  KeyBindings  ###//
//#####################//

import "~/KeyBindings/Filter"
