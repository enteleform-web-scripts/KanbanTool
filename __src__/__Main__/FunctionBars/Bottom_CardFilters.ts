
//###  Module  ###//
import {FunctionBar} from "~/Extensions/FunctionBar/__Main__"
const {Entry, Position, Show, Hide} = FunctionBar
import {KeyBinding } from "~/Utils/KeyBinding/__Main__"
import {activeBoard} from "~/Utils/KanbanTool"


//###############//
//###  Setup  ###//
//###############//

_CardType_Manager.set_Card_HoverCallback()


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
			new Entry({
				name:       "Today.Low",
				// keyBinding: "1",
				on_Load: _CardType_Manager.get_OnLoad(),
			}),
			new Entry({
				name:       "Today.Medium",
				// keyBinding: "2",
				on_Load: _CardType_Manager.get_OnLoad(),
			}),
			new Entry({
				name:       "Today.High",
				// keyBinding: "3",
				on_Load: _CardType_Manager.get_OnLoad(),
			}),
			new Entry({
				name:       "Today.Urgent",
				// keyBinding: "4",
				on_Load: _CardType_Manager.get_OnLoad(),
			}),
		],
		[
			new Entry({
				name:       "Low",
				// keyBinding: "1",
				on_Load: _CardType_Manager.get_OnLoad(),
			}),
			new Entry({
				name:       "Medium",
				// keyBinding: "2",
				on_Load: _CardType_Manager.get_OnLoad(),
			}),
			new Entry({
				name:       "High",
				// keyBinding: "3",
				on_Load: _CardType_Manager.get_OnLoad(),
			}),
			new Entry({
				name:       "Urgent",
				// keyBinding: "4",
				on_Load: _CardType_Manager.get_OnLoad(),
			}),
		],

		[
			new Entry({
				name:       "DailyTask",
				// keyBinding: "1",
				on_Load: _CardType_Manager.get_OnLoad(),
			}),
			new Entry({
				name:       "Book",
				// keyBinding: "2",
				on_Load: _CardType_Manager.get_OnLoad(),
			}),
		],

	],

})


//###############//
//###  Utils  ###//
//###############//

const _cardTypes = activeBoard.cardTypes().active()

namespace _CardType_Manager{
	let _entryIndex = -1
	let _card       = undefined

	export function set_Card_HoverCallback(){
		const $element = $("kt-board")

		$element.on("mouseover", "kt-task", (event) => {
			_card = event.currentTarget
		})

		$element.on("mouseout", "kt-task", (event) => {
			_card = null
		})
	}

	export function get_OnLoad(){
		_entryIndex += 1
		const cardType = _cardTypes[_entryIndex]
		return () =>
			{_update_CardType(cardType)}
	}

	function _update_CardType(cardType){
		if(_card)
			{_card.props.task.save("card_type_id", cardType.id)}
	}

}

