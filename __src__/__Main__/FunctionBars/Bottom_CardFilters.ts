
//###  Module  ###//
import {FunctionBar} from "~/Extensions/FunctionBar/__Main__"
const {Entry, Position, Show, Hide} = FunctionBar
import {_CardType_Manager} from "./Bottom_CardFilters_Utils"


//###############//
//###  Setup  ###//
//###############//

_CardType_Manager.set_Card_HoverCallback()
const get_OnLoad = _CardType_Manager.get_OnLoad


//################//
//###  Export  ###//
//################//

export default new FunctionBar({

	position:             Position.Bottom,
	autoMap_KeyBindings:  true,
	keyBinding_Modifiers: [],
	stretchCells:         false,

	entryGroups:[

		[
			new Entry({name:"Today.Low",    on_Load:get_OnLoad()}),
			new Entry({name:"Today.Medium", on_Load:get_OnLoad()}),
			new Entry({name:"Today.High",   on_Load:get_OnLoad()}),
			new Entry({name:"Today.Urgent", on_Load:get_OnLoad()}),
		],

		[
			new Entry({name:"Low",    on_Load:get_OnLoad()}),
			new Entry({name:"Medium", on_Load:get_OnLoad()}),
			new Entry({name:"High",   on_Load:get_OnLoad()}),
			new Entry({name:"Urgent", on_Load:get_OnLoad()}),
		],

		[
			new Entry({name:"DailyTask", on_Load:get_OnLoad()}),
			new Entry({name:"Book",      on_Load:get_OnLoad()}),
		],

	],

})

