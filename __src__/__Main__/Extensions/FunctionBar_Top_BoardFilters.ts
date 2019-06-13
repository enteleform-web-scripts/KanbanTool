
//###  Module  ###//
import {FunctionBar} from "~/Extensions/FunctionBar/__Main__"
import {KeyBinding } from "~/Utils/KeyBinding/__Main__"
import {KanbanTool } from "~/Utils/KanbanTool/__Main__"

//###  Aliases  ###//
const {Entry, Position     } = FunctionBar
const {CardType, Show, Hide} = KanbanTool


//##############//
//###  Init  ###//
//##############//

KanbanTool.remove_PageLoad_Callback(CardType.Filter.show_AllCards_ID)


//###############//
//###  Setup  ###//
//###############//

const activeTask_Columns = ["Routine", "Tasks.Active"]


//#####################//
//###  FunctionBar  ###//
//#####################//

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
