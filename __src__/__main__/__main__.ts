
//###  Extensions  ###
import "~/Extensions/CheckList/TEMP"
// import "~/Extensions/FB/TEMP_ModeLegend"
// import "~/Extensions/FunctionBar/TEMP_CardLegend"

import {FunctionBar} from "~/Extensions/FunctionBar/__Main__"
FunctionBar.load(
	require("./FunctionBars/Bottom_CardFilters"),
	require("./FunctionBars/Top_BoardFilters"  ),
	require("./FunctionBars/Left_Commands"     ),
	require("./FunctionBars/Right_Misc"        ),
)

//###  KeyBindings  ###
import "~/KeyBindings/Filter"
