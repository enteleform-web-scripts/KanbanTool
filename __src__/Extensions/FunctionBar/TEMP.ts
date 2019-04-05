//###  Module: CSS  ###//
import {CSS} from "~/Utils/CSS"
require("./CSS.styl")
CSS.apply("__Main__.css")

//###  NPM  ###//
import jquery from "jquery"
const $:any = jquery
import hotkeys from "hotkeys-js"

const KanbanTool = (window as any).KT

const cssVariables = require("./CSS_Variables.json")

const __ALL_ROWS__    = "__ALL_ROWS__"
const __ALL_COLUMNS__ = "__ALL_COLUMNS__"

const legendContainer = $("<div>", {"class":cssVariables.legendContainer})
$("body").append(legendContainer)

const cardType_Legend = $("table.kt-extensions-card_legend").detach()

let table     = $("<table>", {"class":cssVariables.extension})
let tableBody = $("<tbody>")
let tableRow  = $("<tr>"   )
table.append(tableBody)
tableBody.append(tableRow)
legendContainer.append(cardType_Legend)
legendContainer.append(table)

class Mode{
	name:    string
	rows:    string[]
	columns: string[]

	constructor(
		{name,        rows,          columns         }:
		{name:string, rows:string[], columns:string[]}
	){
		this.name    = name
		this.rows    = rows
		this.columns = columns
	}
}

let modes = [
	new Mode({name:"Work", rows:["Daily", "Active"], columns:[]}),
	new Mode({name:"Plan", rows:[__ALL_ROWS__],      columns:[]}),
]

function get_SetMode_Callback(mode:Mode){
	return (event:Event) => set_Mode(mode)
}

function get_KeyNumber(index:number){
	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	//!!  __ UPDATE __                                                  !!
	//!!  extract logic from cardLegend_AddKeyboardShortcuts to module  !!
	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	return (index + 1)
}

modes.forEach( (mode, i) => {
	let keyNumber = get_KeyNumber(i)
	const cell = $("<td>", {"class":cssVariables.extension})
	cell.text(`[${keyNumber}]  ${mode.name}`)
	let set_Mode = get_SetMode_Callback(mode)
	if(keyNumber !== null)
		{hotkeys(`Alt+${keyNumber}`, set_Mode)}
	cell.on("click", set_Mode)
	tableRow.append(cell)
})


function get_ActiveBoard(){
	const boards = KanbanTool.boards.filter(board => board.isOpen)
	if(boards.length == 1)
		{return boards[0]}
	else
		{return null}
}

function set_Mode(mode:Mode){
	const target_AllRows = ((mode.rows.length == 1) && (mode.rows[0] == __ALL_ROWS__))
	_set_RowStates(mode, target_AllRows)
}

function _get_TargetRows(mode:Mode){
	const board = get_ActiveBoard()

	return (
		board.swimlanes()
			.map   ((lane, index) => ({lane, index})                     )
			.filter(item => mode.rows.includes(item.lane.attributes.name))
			.map   (item => item.index                                   )
	)
}

function _set_RowStates(mode:Mode, target_AllRows:boolean){
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
