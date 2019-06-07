
//####################//
//###  Extensions  ###//
//####################//

import "~/Extensions/TODO_CheckList/TEMP"

import {FunctionBar} from "~/Extensions/FunctionBar/__Main__"
import {get_CardType_FunctionBar} from "~/Extensions/FunctionBar/DefaultBars/CardTypes/__Main__"
FunctionBar.load(
	require("./FunctionBars/Left_Commands"     ).default,
	require("./FunctionBars/Right_Misc"        ).default,
	require("./FunctionBars/Top_BoardFilters"  ).default,
	get_CardType_FunctionBar({rowCounts: [2, 2, 3]}),
)

//#####################//
//###  KeyBindings  ###//
//#####################//

import "~/KeyBindings/Filter"
