//###  Module: Pug  ###//
// const pug = require("pug")
// const _layoutFile = require("!!raw-loader!./Layout.pug").default
// ;(window as any).pug = pug
// const layoutHTML  = pug.compileFile(_layoutFile)
// console.log(">>>", layoutHTML)

//###  Module: CSS  ###//
const cssVariables = require("./CSS_Variables.json")

//###  Module  ###//
import {css_Timeout_MS  } from "./Settings"
import {Entry           } from "./Entry"
import {Position        } from "./Position"
import {set_CSS_Variable} from "~/Utils/CSS_Variables/__main__"

//###  NPM  ###//
const $:any = require("jquery")


//#################//
//###  Exports  ###//
//#################//

export class Layout{

	container:     HTMLElement
	subContainers: HTMLElement[]
	position:      Position

	constructor(entryGroups:Entry[][], position:Position){
		this.position = position
		this._build(entryGroups)
	}

	_build(entryGroups:Entry[][]){
		const {selectorTail, subContainer_Class} = _BarComponent_Map[this.position]
		const containerSelector = [cssVariables.container, selectorTail].join(" > ")
		this.container = $(containerSelector)

		this.subContainers = []
		entryGroups.forEach(group => {
			const subContainer = $("<div>", {class:subContainer_Class})
			this.container.append(subContainer)
			this.subContainers.push(subContainer)
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

	update_OriginalLayout(){
		setTimeout( () => {
			set_CSS_Variable("KanbanToolOffsets_NavHeight",  `${$("nav.navbar"                                        ).height()}px`)
			set_CSS_Variable("KanbanToolOffsets_TopHeight",  `${$("." + cssVariables.container + " > .top"            ).height()}px`)
			set_CSS_Variable("KanbanToolOffsets_LeftWidth",  `${$("." + cssVariables.container + " > .center > .left" ).width() }px`)
			set_CSS_Variable("KanbanToolOffsets_RightWidth", `${$("." + cssVariables.container + " > .center > .right").width() }px`)
		}, css_Timeout_MS)
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
