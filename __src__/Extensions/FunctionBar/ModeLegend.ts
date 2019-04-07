//###  Module  ###//
import {Mode                   } from "./Mode"
import {Feature                } from "~/Utils/Module_BaseClasses"
import {KeyBinding             } from "~/Utils/KeyBinding"
import {KanbanTool, activeBoard} from "~/Utils/KanbanTool"

//###  Module: CSS  ###//
import {CSS} from "~/Utils/CSS"
CSS.apply(__dirname)
const cssVariables = require("./CSS_Variables.json")

//###  NPM  ###//
const $:any = require("jquery")


//#################//
//###  Exports  ###//
//#################//

export class ModeLegend extends Feature{
	static load(){
		const modes           = _TEMP_modes
		const legendContainer = _build_LegendContainer()

		modes.forEach( (mode, i) => {
			const cell =_build_TableCell(i, mode)
			legendContainer.tableRow.append(cell)
		})
		console.log(" - ModeLegend Loaded")
	}

}

//###############//
//###  Utils  ###//
//###############//

const __ALL_ROWS__    = "__ALL_ROWS__"
const __ALL_COLUMNS__ = "__ALL_COLUMNS__"

let _TEMP_modes = [
	new Mode({name:"Work", rows:["Daily", "Active"], columns:[]}),
	new Mode({name:"Plan", rows:[__ALL_ROWS__],      columns:[]}),
]

function _build_LegendContainer(){
	const legendContainer = $("<div>", {"class":cssVariables.legendContainer})

	const cardType_Legend = $("table.kt-extensions-card_legend").detach()
	const table           = $("<table>", {"class":cssVariables.extension})
	const tableBody       = $("<tbody>")
	const tableRow        = $("<tr>"   )

	$("body")      .append(legendContainer)
	table          .append(tableBody      )
	tableBody      .append(tableRow       )
	legendContainer.append(cardType_Legend)
	legendContainer.append(table          )

	return {
		legendContainer,
		table,
		tableBody,
		tableRow,
	}
}

function _build_TableCell(index:number, mode:Mode){
	const cell      = $("<td>", {"class":cssVariables.extension})
	const keyNumber = _get_KeyNumber(index)
	const set_Mode  = _get_SetMode_Callback(mode)

	if(keyNumber !== null){
		KeyBinding.add(
			`Alt + ${keyNumber}`,
			set_Mode,
			{preventDefault: true}
		)
	}

	cell.text(`[${keyNumber}]  ${mode.name}`)
	cell.on("click", set_Mode)

	return cell
}

function _get_SetMode_Callback(mode:Mode)
	{return (event:Event) => _set_Mode(mode)}

function _set_Mode(mode:Mode){
	const target_AllRows = ((mode.rows.length == 1) && (mode.rows[0] == __ALL_ROWS__))
	_set_RowVisibility_States(mode, target_AllRows)
}

function _set_RowVisibility_States(mode:Mode, target_AllRows:boolean){
	const rows = $.find("#show > div.kt-side-panel-slide > kt-board > tbody > tr")
	const targetRows = (target_AllRows) ? [] : _get_TargetRows(mode)

	rows.forEach((row, i) => {
		const $row = $(row)
		if(target_AllRows || targetRows.includes(i))
			{$row.removeClass("kt-collapsed")}
		else
			{$row.addClass("kt-collapsed")}
	})
}

function _get_TargetRows(mode:Mode){
	return (
		activeBoard.swimlanes()
			.map   ((lane, index) => ({lane, index})                     )
			.filter(item => mode.rows.includes(item.lane.attributes.name))
			.map   (item => item.index                                   )
	)
}


function _get_KeyNumber(index:number){
	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	//!!  __ UPDATE __                                                  !!
	//!!  extract logic from cardLegend_AddKeyboardShortcuts to module  !!
	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	return (index + 1)
}
