
//###  Extensions  ###
import "~/Extensions/CheckList/TEMP"
// import "~/Extensions/FB/TEMP_ModeLegend"
// import "~/Extensions/FunctionBar/TEMP_CardLegend"

import {FunctionBar} from "~/Extensions/FunctionBar/__Main__"
FunctionBar.load(
	require("./FunctionBars/Bottom_CardFilters").default,
	require("./FunctionBars/Top_BoardFilters"  ).default,
	require("./FunctionBars/Left_Commands"     ).default,
	require("./FunctionBars/Right_Misc"        ).default,
)

//###  KeyBindings  ###
import "~/KeyBindings/Filter"
