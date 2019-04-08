


// //#################//
// //###  Exports  ###//
// //#################//

// // export class ModeLegend extends Feature{

// // 	static load(){
// // 		const entries         = _TEMP_entries
// // 		const elements = _build_Layout()

// // 		entries.forEach( (mode, i) => {
// // 			const cell =_build_TableCell(i, mode)
// // 			elements.tableRow.append(cell)
// // 		})
// // 		console.log(" - ModeLegend Loaded")
// // 	}

// // }


// //###############//
// //###  Utils  ###//
// //###############//

// const __ALL_ROWS__    = "__ALL_ROWS__"
// const __ALL_COLUMNS__ = "__ALL_COLUMNS__"

// // let _TEMP_modes = [
// // 	new Mode({name:"Work", rows:["Daily", "Active"], columns:[]}),
// // 	new Mode({name:"Plan", rows:[__ALL_ROWS__],      columns:[]}),
// // ]

// function _build_Layout(){
// 	const legendContainer = $("<div>", {"class":cssVariables.legendContainer})

// 	const cardType_Legend = $("table.kt-extensions-card_legend").detach()
// 	const table           = $("<table>", {"class":cssVariables.extension})
// 	const tableBody       = $("<tbody>")
// 	const tableRow        = $("<tr>"   )

// 	$("body")      .append(legendContainer)
// 	table          .append(tableBody      )
// 	tableBody      .append(tableRow       )
// 	legendContainer.append(cardType_Legend)
// 	legendContainer.append(table          )

// 	return {
// 		legendContainer,
// 		table,
// 		tableBody,
// 		tableRow,
// 	}
// }

// function _build_TableCell(index:number, entry:Entry){
// 	const cell      = $("<td>", {"class":cssVariables.extension})
// 	const keyNumber = _get_KeyNumber(index)
// 	const set_Mode  = _get_SetMode_Callback(entry)

// 	if(keyNumber !== null){
// 		KeyBinding.add(
// 			`Alt + ${keyNumber}`,
// 			set_Mode,
// 			{preventDefault: true}
// 		)
// 	}

// 	cell.text(`[${keyNumber}]  ${entry.name}`)
// 	cell.on("click", set_Mode)

// 	return cell
// }

// function _get_SetMode_Callback(entry:Entry)
// 	{return (event:Event) => _set_Mode(entry)}

// function _set_Mode(entry:Entry){
// 	const target_AllRows = ((entry.rows.length == 1) && (entry.rows[0] == __ALL_ROWS__))
// 	_set_RowVisibility_States(entry, target_AllRows)
// }



// function _get_KeyNumber(index:number){
// 	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 	//!!  __ UPDATE __                                                  !!
// 	//!!  extract logic from cardLegend_AddKeyboardShortcuts to module  !!
// 	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 	return (index + 1)
// }
