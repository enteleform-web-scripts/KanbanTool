//###  Module: Pug  ###//
// const pug = require("pug")
const _layoutFile = require("!!raw-loader!./Layout.pug").default
// ;(window as any).pug = pug
// const layoutHTML  = pug.compileFile(_layoutFile)
// console.log(">>>", layoutHTML)

//###  Module: CSS  ###//
const cssVariables = require("./CSS_Variables.json")

//###  Module  ###//
import {css_Timeout_MS} from "./Settings"
import {Entry         } from "./Entry"
import {Position      } from "./Position"

//###  NPM  ###//
const $:any = require("jquery")


//#################//
//###  Exports  ###//
//#################//

export class Layout{

	container: HTMLElement
	rows:      HTMLElement[]
	position:  Position

	constructor(entryGroups:Entry[][], position:Position){
		this.position = position
		this._build(entryGroups)
	}

	_build(entryGroups:Entry[][]){
		const positionClass = _BarPosition_CSS_Map[this.position]
		this.container = $(
			"<div>",
			{"class":[cssVariables.root, positionClass].join(" ")}
		)
		$("body").append(this.container)

		this.rows = []
		entryGroups.forEach(group => {
			const row = $("<div>", {"class":cssVariables.legendRow})
			this.container.append(row)
			this.rows.push(row)
		})
	}

	add_Cell(entry:Entry, groupIndex:number, keyBinding:string){
		const cell = $("<div>", {"class":cssVariables.legendCell})

		let text = entry.name
		if(keyBinding)
			{text = `[${keyBinding.toUpperCase()}] &nbsp;${text}`}

		cell.html(text)
		cell.on("click", entry.on_Load)

		this.rows[groupIndex].append(cell)
	}

	update_OriginalLayout(){
		setTimeout( () => {
			const $container = $(this.container)
			const $board           = $("#show > div.kt-side-panel-slide")

			if(this.position == Position.Top){
				_set_Style(".navbar", "margin-top", `${$container.height()}px`)
				_set_Style($board,    "margin-top", `${$container.height()}px`)
			}
			else if(this.position == Position.Bottom){
				const padding = 10
				_set_Style($board, "margin-bottom", `${$container.height() + padding}px`)
			}
		}, css_Timeout_MS)
	}

}


//###############//
//###  Utils  ###//
//###############//

const _BarPosition_CSS_Map = {
	[Position.Left  ]: cssVariables.leftBar,
	[Position.Right ]: cssVariables.rightBar,
	[Position.Top   ]: cssVariables.topBar,
	[Position.Bottom]: cssVariables.bottomBar,
}

function _set_Style(element:(HTMLElement|JQuery|string), propertyName:string, propertyValue:string)
	{$(element)[0].style.setProperty(propertyName, propertyValue, "important")}
