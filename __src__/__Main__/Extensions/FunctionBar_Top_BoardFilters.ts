
//###  Module  ###//
import {FunctionBar} from "~/Extensions/FunctionBar/__Main__"
const {Entry, Position} = FunctionBar
import {KeyBinding} from "~/Utils/KeyBinding/__Main__"
import {
	CardType,
	Show, Hide,
	remove_PageLoad_Callback,
} from "~/Utils/KanbanTool/__Main__"


//###############//
//###  Setup  ###//
//###############//

const activeTask_Columns = ["Routine", "Tasks.Active"]


//################//
//###  Export  ###//
//################//

FunctionBar.load( new FunctionBar({

	position:             Position.Top,
	autoMap_KeyBindings:  true,
	keyBinding_Modifiers: ["shift", "alt"],
	stretchCells:         false,
	cellProperties:       [{functionName:"css", args:["min-width", "90px"]}],

	entryGroups:[

		[
			new Entry({
				name: "Today",
				...get_Callbacks(() => {
					Show.allColumns()
					Show.rows({include:activeTask_Columns})
					CardType.Filter.disable_CardTypes()
					CardType.Filter.enable_CardTypes(/^(Today.*)|(Task_Daily)/)
				})
			}),
			new Entry({
				on_Layout: function(cell:JQuery){this.on_KeyBinding(null, null)},
				name: "Tasks",
				...get_Callbacks(() => {
					Show.allColumns()
					Show.rows({include:activeTask_Columns})
					CardType.Filter.enable_CardTypes()
				}),
			}),
			new Entry({
				name: "Planning",
				...get_Callbacks(() => {
					Show.allColumns()
					Show.allRows()
					CardType.Filter.enable_CardTypes()
				}),
			}),
		],

	],

}))


//##############//
//###  Init  ###//
//##############//

remove_PageLoad_Callback(CardType.Filter.show_AllCards_ID)


//###############//
//###  Utils  ###//
//###############//

const _secondaryCallback =
	() => {Hide.emptyColumns()}

function get_Callbacks(callback:(() => void)){
	return {
		on_KeyBinding: (event:KeyboardEvent, cell:JQuery) => {
			callback()
			_secondaryCallback()
		},
		on_Click: (event:JQuery.ClickEvent, cell:JQuery) => {
			callback()
			if(! KeyBinding.is_Pressed("ctrl"))
				{_secondaryCallback()}
		}
	}
}
