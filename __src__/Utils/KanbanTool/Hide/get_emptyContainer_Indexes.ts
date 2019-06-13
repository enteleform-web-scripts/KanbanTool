
//###  Module  ###//
import {KanbanTool   } from "../__Main__"
import {TaskContainer} from "../Show/TaskContainer"

//###  Aliases  ###//
const {activeBoard} = KanbanTool


//#################//
//###  Exports  ###//
//#################//

export function get_EmptyRow_Indexes(columns:TaskContainer[]){
	const hiddenColumn_Indexes =
		columns
			.filter(column => column.is_Collapsed)
			.map   (column => column.modelIndex  )

	return _get_EmptyRow_Indexes(hiddenColumn_Indexes)
}

export function get_EmptyColumn_Indexes(rows:TaskContainer[]){
	const hiddenRow_Indexes =
		rows
			.filter(row => row.is_Collapsed)
			.map   (row => row.modelIndex  )

	return _get_EmptyColumn_Indexes(hiddenRow_Indexes)
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

function _get_Cell_IsEmpty(row:any, column:any){
	const tasks =
		_get_Tasks(row, column)
			.filter(task => {
				const element = $(`[data-task-id=${task.attributes.id}]`)
				return !(element.hasClass("kt-board_search--filtered_out"))
			})

	return (tasks.length == 0)
}

function _get_Tasks(row:any, column:any){
	return (
		activeBoard.tasks()
			.filter(task =>
				(task.swimlane()         === row   )
				&& (task.workflowStage() === column)
			)
	)
}

function _get_EmptyRow_Indexes(hiddenColumn_Indexes:number[]){
	const emptyCell_Map = _get_EmptyCell_Map()
	const rowCount      = emptyCell_Map.length
	const emptyRows     = []

	hiddenColumn_Indexes.forEach(columnIndex => {
		emptyCell_Map.forEach(row => {
			row[columnIndex] = true
		})
	})

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

function _get_EmptyColumn_Indexes(hiddenRow_Indexes:number[]){
	const emptyCell_Map = _get_EmptyCell_Map()
	const columnCount   = emptyCell_Map[0].length
	const emptyColumns  = []

	hiddenRow_Indexes.forEach(rowIndex => {
		emptyCell_Map[rowIndex] =
			emptyCell_Map[rowIndex].map(is_Empty => true)
	})

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
