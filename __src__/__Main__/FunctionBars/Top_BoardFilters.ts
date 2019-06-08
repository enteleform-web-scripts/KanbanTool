
//###  Module  ###//
import {FunctionBar} from "~/Extensions/FunctionBar/__Main__"
const {Entry, Position} = FunctionBar
import {KeyBinding} from "~/Utils/KeyBinding/__Main__"
import {
	CardType_Filter,
	on_PageLoad,
	Show, Hide,
} from "~/Utils/KanbanTool/__Main__"


//###############//
//###  Setup  ###//
//###############//

const activeTask_Columns = ["Routine", "Tasks.Active"]


//################//
//###  Export  ###//
//################//

const functionBar = new FunctionBar({

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
					CardType_Filter.disable_CardTypes()
					CardType_Filter.enable_CardTypes(/^(Today.*)|(DailyTask)/)
				})
			}),
			new Entry({
				name: "Tasks",
				...get_Callbacks(() => {
					Show.allColumns()
					Show.rows({include:activeTask_Columns})
					CardType_Filter.enable_CardTypes()
				}),
			}),
			new Entry({
				name: "Planning",
				...get_Callbacks(() => {
					Show.allColumns()
					Show.allRows()
					CardType_Filter.enable_CardTypes()
				}),
			}),
		],

	],

})

export default functionBar


//##############//
//###  Init  ###//
//##############//

on_PageLoad(() => {
	functionBar.entryGroups[0][1].on_KeyBinding(null, null) // Tasks
})


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
