//###  Module: CSS  ###//
const CSS = require("./__CSS_Variables__.json").FunctionBar

//###  Module  ###//
import {functionBar_ToggleModifiers} from "./Settings"
import {Entry                      } from "./Entry"
import {Position                   } from "./Position"
import {set_CSS_Variable           } from "~/Utils/CSS_Variables/__Main__"
import {KeyBinding                 } from "~/Utils/KeyBinding/__Main__"
import {KanbanTool                 } from "~/Utils/KanbanTool/__Main__"

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
		KanbanTool.on_PageLoad(() => {
			this._build()
			_update_OriginalLayout()
		})
	}

	static initialize_ToggleBindings(){
		KanbanTool.on_PageLoad(() => {
			const toggleMap = [
				{position:Position.Left,   key:"left" },
				{position:Position.Right,  key:"right"},
				{position:Position.Top,    key:"up"   },
				{position:Position.Bottom, key:"down" },
			]

			toggleMap.forEach((entry) => {
				const callback = _get_ContainerToggle_Callback(entry.position)
				const {containerSelector, toggleButton_Selector} = _BarComponent_Map[entry.position]

				const toggleButton = $(toggleButton_Selector)
				toggleButton.on("click", callback)

				const container = $(`${containerSelector}:not(.${CSS.collapsed})`)
				container.on("dblclick", callback)

				KeyBinding.add(
					[(entry.key as KeyBinding.Key), ...functionBar_ToggleModifiers],
					callback,
					{preventDefault: true},
				)
			})
		})
	}

	add_Cell(entry:Entry, groupIndex:number, keyBinding:string){
		const cell = $("<div>", {class:"cell"})
		entry.cell = cell

		let text = entry.name
		if(keyBinding)
			{text = `[${keyBinding.toUpperCase()}] &nbsp;${text}`}

		this._initialize_Cell(entry, cell, text)
		this.subContainers[groupIndex].append(cell)
	}

	_build(){
		const {autoMap_KeyBindings, entryGroups, keyBinding_Modifiers, position, is_VerticalBar, stretchCells} = this._functionBar
		let {containerSelector, subContainer_Class} = _BarComponent_Map[position]
		this.container = $(containerSelector)
		this.container.removeClass(CSS.empty)

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

	_initialize_Cell(entry:Entry, cell:JQuery, cellText:string,){
		cell.on("click",    (event:JQuery.ClickEvent      ) => entry.on_Click      (event, cell))
		cell.on("dblclick", (event:JQuery.DoubleClickEvent) => entry.on_DoubleClick(event, cell))
		cell.html(cellText)
		entry.on_Layout(cell)
		this._apply_CellProperties(cell)
	}

	_apply_CellProperties(cell:JQuery){
		for(const {functionName, args} of this._functionBar.cellProperties)
			{cell[functionName as string](...args)}
	}

}


//###############//
//###  Utils  ###//
//###############//

const _BarComponent_Map = {
	[Position.Left  ]: {containerSelector:`.${CSS.container} > .center > .left`,  subContainer_Class:"column", toggleButton_Selector:".left   > .expand-button > .cell"},
	[Position.Right ]: {containerSelector:`.${CSS.container} > .center > .right`, subContainer_Class:"column", toggleButton_Selector:".right  > .expand-button > .cell"},
	[Position.Top   ]: {containerSelector:`.${CSS.container} > .top`,             subContainer_Class:"row",    toggleButton_Selector:".top    > .expand-button > .cell"},
	[Position.Bottom]: {containerSelector:`.${CSS.container} > .bottom`,          subContainer_Class:"row",    toggleButton_Selector:".bottom > .expand-button > .cell"},
}

function _get_ContainerToggle_Callback(position:Position){
	const {containerSelector} = _BarComponent_Map[position]
	const container = $(containerSelector)

	return () => {
		if(container.hasClass(CSS.collapsed))
			{container.removeClass(CSS.collapsed)}
		else
			{container.addClass(CSS.collapsed)}

		_update_OriginalLayout()
	}
}

function _update_OriginalLayout(){
	const navbarHeight = $("nav.navbar").height()
	set_CSS_Variable("KanbanToolOffsets_NavHeight", `${navbarHeight}px`)

	const topRow_Height = $(`.${CSS.container} > .top`).height()
	set_CSS_Variable("KanbanToolOffsets_TopHeight", `${topRow_Height}px`)

	const leftColumn_Width = $(`.${CSS.container} > .center > .left`).width()
	set_CSS_Variable("KanbanToolOffsets_LeftWidth", `${leftColumn_Width}px`)

	const rightColumn_Width = $(`.${CSS.container} > .center > .right`).width()
	set_CSS_Variable("KanbanToolOffsets_RightWidth", `${rightColumn_Width}px`)

	const top_Offset = (navbarHeight + topRow_Height)
	set_CSS_Variable("KanbanToolOffsets_TopOffset", `${top_Offset}px`)
}
