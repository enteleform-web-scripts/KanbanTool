//###  Module: CSS  ###//
const cssVariables = require("./CSS_Variables.json")

//###  Module  ###//
import {css_Timeout_MS                    } from "./Settings"
import {Entry                             } from "./Entry"
import {Position                          } from "./Position"
import {get_CSS_Variable, set_CSS_Variable} from "~/Utils/CSS_Variables/__main__"

//###  NPM  ###//
const $:any = require("jquery")


//#################//
//###  Exports  ###//
//#################//

export class Layout{

	_functionBar:  any // FunctionBar
	container:     HTMLElement
	subContainers: HTMLElement[]

	constructor(functionBar){
		this._functionBar = functionBar
		setTimeout(() => {
			this._build()
			this._update_OriginalLayout()
		}, css_Timeout_MS)
	}

	_build(){
		const {autoMap_KeyBindings, entryGroups, keyBinding_Modifiers, position, is_VerticalBar, stretchCells} = this._functionBar
		let {selectorTail, subContainer_Class} = _BarComponent_Map[position]
		const containerSelector = [`.${cssVariables.container}`, selectorTail].join(" > ")
		this.container = $(containerSelector)

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

	add_Cell(entry:Entry, groupIndex:number, keyBinding:string){
		const cell = $("<div>", {class:"cell"})

		let text = entry.name
		if(keyBinding)
			{text = `[${keyBinding.toUpperCase()}] &nbsp;${text}`}

		cell.html(text)
		cell.on("click", entry.on_Load)

		this.subContainers[groupIndex].append(cell)
	}

	_update_OriginalLayout(){
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

}


// //###############//
// //###  Utils  ###//
// //###############//

const _BarComponent_Map = {
	[Position.Left  ]: {selectorTail:".center > .left",  subContainer_Class:"column"},
	[Position.Right ]: {selectorTail:".center > .right", subContainer_Class:"column"},
	[Position.Top   ]: {selectorTail:".top",             subContainer_Class:"row"   },
	[Position.Bottom]: {selectorTail:".bottom",          subContainer_Class:"row"   },
}
