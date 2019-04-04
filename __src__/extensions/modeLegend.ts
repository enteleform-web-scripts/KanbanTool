//###  NPM  ###//
import $       from "jquery"
import hotkeys from "hotkeys-js"


const cssClass = "custom_extension--mode_legend"
const cssClass_LegendContainer = "legendContainer"
const __ALL_ROWS__    = "__ALL_ROWS__"
const __ALL_COLUMNS__ = "__ALL_COLUMNS__"

const legendContainer = $("<div>", {"class":`${cssClass} ${cssClass_LegendContainer}`})
$("body").append(legendContainer)

const cardType_Legend = $("table.kt-extensions-card_legend").detach()

let table     = $("<table>", {"class":cssClass})
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
	new Mode({name:"Mode_A", rows:["Daily", "Active"], columns:[]}),
	new Mode({name:"Mode_B", rows:[__ALL_ROWS__],      columns:[]}),
	new Mode({name:"Mode_C", rows:[],                  columns:[]}),
]

function get_SetMode_Function(mode:Mode){
	return (event:Event) => {
		console.log("PRESSED @ ", mode.name)
	}
}

function get_KeyNumber(index:number){
	//!!!!!!!!!!!!!!!!!!!!!
	//!!  ___UPDATE____  !!
	//!!!!!!!!!!!!!!!!!!!!!
	return (index + 1)
}

modes.forEach( (mode, i) => {
	const cell = $("<td>", {"class":cssClass})
	cell.text(mode.name)
	let set_Mode = get_SetMode_Function(mode)
	let keyNumber = get_KeyNumber(i)
	console.log("@@@", keyNumber)
	if(keyNumber !== null)
		{hotkeys(`Alt+${keyNumber}`, set_Mode)}
	cell.on("click", set_Mode)
	tableRow.append(cell)
})

$("<style>")
	.prop("type", "text/css")
	.html(`

		.${cssClass}{
			width:        100%;
			table-layout: fixed;
			z-index:      10;
		}

		.${cssClass_LegendContainer}.${cssClass}{
			position: fixed;
			bottom:   0;
		}

		.${cssClass}.td{
			background-color: #444;
			color:            #EEE;
			text-align:       center;
			padding:          2px;
			cursor:           pointer;
			position:         relative;
			user-select:      none;
			border:           1px solid #D4D4D4;
			box-shadow:       0 -1px 1px rgba(0,0,0,0.065);
		}

		.kt-extensions-card_legend{
			position: static !important;
		}

		#show > div.kt-side-panel-slide{
			margin-bottom: 70px;
		}

	`)
	.appendTo("head")
