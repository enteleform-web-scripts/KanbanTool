
//###  Module  ###//
import {activeBoard} from "~/Utils/KanbanTool"


//#################//
//###  Exports  ###//
//#################//

export function get_EmptyRows(){
	const emptyCell_Map = _get_EmptyCell_Map()
	return _get_EmptyRows(emptyCell_Map)
}

export function get_EmptyColumns(){
	const emptyCell_Map = _get_EmptyCell_Map()
	return _get_EmptyColumns(emptyCell_Map)
}


//###############//
//###  Utils  ###//
//###############//

function _get_EmptyCell_Map(){
	const {rows, columns} = _get_Containers()

	const cellMap: boolean[][] =
		Array.from({length:rows.length})
			.map(x => [])

	rows.forEach( (row, rowIndex) => {
		columns.forEach(column => {
			const is_Empty = _get_Cell_IsEmpty(row, column)
			cellMap[rowIndex].push(is_Empty)
		})
	})

	return cellMap
}

function _get_Containers(){
	return {
		rows:    activeBoard.swimlanes     ().toArray(),
		columns: activeBoard.workflowStages().toArray().splice(1),
	}
}

function _get_Cell_IsEmpty(row:number, column:number){
	const tasks = _get_Tasks(row, column)
	return (tasks.length == 0)
}

function _get_Tasks(row:number, column:number){
	return (
		activeBoard.tasks()
			.filter(task =>
				(task.swimlane()         === row   )
				&& (task.workflowStage() === column)
			)
	)
}

function _get_EmptyRows(emptyCell_Map:boolean[][]){
	const rowCount = emptyCell_Map.length

	const emptyRows = []

	for(let rowIndex = 0; (rowIndex < rowCount); rowIndex++){
		const row_IsEmpty =
			emptyCell_Map[rowIndex].every(is_Empty =>
				(is_Empty == true)
			)

		if(row_IsEmpty)
			{emptyRows.push(rowIndex)}
	}

	return emptyRows
}

function _get_EmptyColumns(emptyCell_Map:boolean[][]){
	const columnCount = emptyCell_Map[0].length

	const emptyColumns = []

	for(let columnIndex = 0; (columnIndex < columnCount); columnIndex++){
		const cells = emptyCell_Map.map(row => row[columnIndex])

		const column_IsEmpty =
			cells.every(is_Empty =>
				(is_Empty == true)
			)

		if(column_IsEmpty)
			{emptyColumns.push(columnIndex)}
	}

	return emptyColumns
}
