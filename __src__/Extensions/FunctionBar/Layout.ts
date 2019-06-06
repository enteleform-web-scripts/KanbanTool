//###  Module: CSS  ###//
const cssVariables = require("./CSS_Variables.json")

//###  Module  ###//
import {Entry           } from "./Entry"
import {Position        } from "./Position"
import {set_CSS_Variable} from "~/Utils/CSS_Variables/__main__"
import {KeyBinding      } from "~/Utils/KeyBinding/__Main__"
import {
	css_Timeout_MS,
	functionBar_ToggleModifiers,
} from "./Settings"

//###  NPM  ###//
const $:any = require("jquery")


//#################//
//###  Exports  ###//
//#################//

export class Layout{

	_functionBar:  any // FunctionBar
	container:     JQuery
	subContainers: JQuery[]

	constructor(functionBar){
		this._functionBar = functionBar
		setTimeout(() => {
			this._build()
			_update_OriginalLayout()
		}, css_Timeout_MS)
	}

	static initialize_KeyBindings(){
		setTimeout(() => {
			const element_KeyMap = [
				{position:Position.Left,   key:"left" },
				{position:Position.Right,  key:"right"},
				{position:Position.Top,    key:"up"   },
				{position:Position.Bottom, key:"down" },
			]

			element_KeyMap.forEach((entry) => {
				const callback = _get_ContainerToggle_Callback(entry.position)

				KeyBinding.add(
					[(entry.key as KeyBinding.Key), ...functionBar_ToggleModifiers],
					callback,
					{preventDefault: true}
				)
			})
		}, css_Timeout_MS)
	}

	add_Cell(entry:Entry, groupIndex:number, keyBinding:string){
		const cell = $("<div>", {class:"cell"})

		let text = entry.name
		if(keyBinding)
			{text = `[${keyBinding.toUpperCase()}] &nbsp;${text}`}

		cell.html(text)
		cell.on("click", entry.on_Load)

		this.subContainers[groupIndex].append(cell)
	}

	_build(){
		const {autoMap_KeyBindings, entryGroups, keyBinding_Modifiers, position, is_VerticalBar, stretchCells} = this._functionBar
		let {containerSelector, subContainer_Class} = _BarComponent_Map[position]
		this.container = $(containerSelector)
		this.container.removeClass(cssVariables.empty)

		if(is_VerticalBar && stretchCells)
			{subContainer_Class += " stretch"}

		this.subContainers = []

		entryGroups.forEach((group, groupIndex) => {
			const subContainer = $("<div>", {class:subContainer_Class})
			this.container.append(subContainer)
			this.subContainers.push(subContainer)

			group.forEach((entry, entryIndex) => {
				const keyBinding = entry.initialize_KeyBinding(autoMap_KeyBindings, keyBinding_Modifiers, groupIndex, entryIndex)
				this.add_Cell(entry, groupIndex, keyBinding)
			})
		})
	}

}


//###############//
//###  Utils  ###//
//###############//

const _BarComponent_Map = {
	[Position.Left  ]: {containerSelector:`.${cssVariables.container} > .center > .left`,  subContainer_Class:"column"},
	[Position.Right ]: {containerSelector:`.${cssVariables.container} > .center > .right`, subContainer_Class:"column"},
	[Position.Top   ]: {containerSelector:`.${cssVariables.container} > .top`,             subContainer_Class:"row"   },
	[Position.Bottom]: {containerSelector:`.${cssVariables.container} > .bottom`,          subContainer_Class:"row"   },
}

function _get_ContainerToggle_Callback(position:Position){
	const {containerSelector} = _BarComponent_Map[position]
	const container = $(containerSelector)

	return () => {
		if(container.hasClass(cssVariables.collapsed))
			{container.removeClass(cssVariables.collapsed)}
		else
			{container.addClass(cssVariables.collapsed)}

		_update_OriginalLayout()
	}
}

function _update_OriginalLayout(){
	const navbarHeight = $("nav.navbar").height()
	set_CSS_Variable("KanbanToolOffsets_NavHeight", `${navbarHeight}px`)

	const topRow_Height = $(`.${cssVariables.container} > .top`).height()
	set_CSS_Variable("KanbanToolOffsets_TopHeight", `${topRow_Height}px`)

	const leftColumn_Width = $(`.${cssVariables.container} > .center > .left`).width()
	set_CSS_Variable("KanbanToolOffsets_LeftWidth", `${leftColumn_Width}px`)

	const rightColumn_Width = $(`.${cssVariables.container} > .center > .right`).width()
	set_CSS_Variable("KanbanToolOffsets_RightWidth", `${rightColumn_Width}px`)

	const top_Offset = (navbarHeight + topRow_Height)
	set_CSS_Variable("KanbanToolOffsets_TopOffset", `${top_Offset}px`)
}
