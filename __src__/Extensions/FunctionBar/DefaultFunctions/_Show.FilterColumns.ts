
//###  Module  ###//
import {activeBoard} from "~/Utils/KanbanTool"


class Header{
	children     = []
	children_IDs = []

	name:     string
	id:       number
	parentID: number
	parent:   Header
	element:  HTMLElement

	constructor(
		{model,     element            }:
		{model:any, element:HTMLElement}
	){
		this.name     = model.name
		this.id       = model.id
		this.parentID = model.parent_id
		this.element  = element
	}

	get path(){
		if(this.parent)
			{return `${this.parent.path}\\${this.name}`}
		else
			{return this.name}
	}

	add_Child(child:Header){
		child.parent = this

		this.children    .push(child   )
		this.children_IDs.push(child.id)
	}

}


function _build_Headers(columnHeader_CellElements:HTMLElement[], userModels:any[], parentModels:any[]){
	const queue            = [...userModels]
	const headers:Header[] = []

	while(queue.length > 0){
		const next_Parent_StartIndex = headers.length

		parentModels.forEach(parent => {
			const children =
				queue.filter(column =>
					(column.parent_id == parent.id)
				)

			children.forEach(child => {
				const child_QueueIndex = queue.indexOf(child)
				const column_WasAdded = (child_QueueIndex == -1)
				if(! column_WasAdded){
					queue.splice(child_QueueIndex, 1)
					const elementIndex = (headers.length)
					headers.push(
						new Header({
							model:   child,
							element: columnHeader_CellElements[elementIndex],
						})
					)
				}
			})
		})

		parentModels = headers.slice(next_Parent_StartIndex)
	}

	return headers
}


const columnHeader_RowElements = $("kt-board > thead").children().toArray()

const columnHeader_CellElements =
	columnHeader_RowElements
		.flatMap(row =>
			$(row).children().toArray()
		)

const all_ColumnModels =
	activeBoard.workflowStages().toArray()
		.map(column => column.attributes)

const user_ColumnModels = all_ColumnModels.slice(1)
const root_ColumnModel  = all_ColumnModels[0]

const columnHeaders = _build_Headers(columnHeader_CellElements, user_ColumnModels, [root_ColumnModel])

console.log(columnHeaders.map(x => x.element))
console.log(columnHeaders.map(x => x.path))

































// const headers = $.find("kt-board > thead > tr > th")
// const columns = KT.boards.models[0].workflowStages().toArray()

// $("kt-board > thead").children().toArray().forEach((row, rowIndex) => {
// 		$(row).children().toArray().forEach((cell, cellIndex) => {
// 			console.log(rowIndex, cellIndex, cell)
// 		})
// })







// // const headerRows = [
// // 	[new Header({name:"A", id:1}), new Header({name:"B", id:2}), new Header({name:"C", id:3})],
// // 	[new Header({name:"1", id:21, parentID:2}), new Header({name:"2", id:22, parentID:2}), new Header({name:"3", id:23, parentID:2})],
// // 	[new Header({name:"10", id:221, parentID:22}), new Header({name:"20", id:222, parentID:22})],
// // ]


// function _get_ColumnHeaders(headerOrdered_ColumnModels:any[]){
// 	const columnHeaders:Header[] = []
// 	let   index = 0
// 	let   parents = []

// 	$("kt-board > thead").children().toArray().forEach((row, rowIndex) => {
// 		const next_Parent_StartIndex = columnHeaders.length

// 		$(row).children().toArray().forEach((cell, cellIndex) => {
// 			const {name, id, parent_id} = headerOrdered_ColumnModels[index]

// 			const header = new Header({name, id, parentID:parent_id, element:cell})
// 			parents.forEach(parent => {

// 			})
// 			columnHeaders.push(header)

// 			index += 1
// 		})

// 		parents = columnHeaders.slice(next_Parent_StartIndex)
// 	})

// 	return columnHeaders
// }

// const columnHeaders = _get_ColumnHeaders(headerOrdered_ColumnModels)
// console.log(">>>", columnHeaders)
// console.log(">>>", columnHeaders.map(x => x.element))
// console.log(">>>", columnHeaders.map(x => x.path))


// // const parent_Headers = headerRows[0]
// // const nestedRows     = headerRows.slice(1)

// // let count = -1

// // nestedRows.forEach((row, rowIndex) => {
// // 	row.forEach(cell => {
// // 		headerRows[rowIndex].forEach(header => {
// // 			count += 1

// // 			if(cell.parentID == header.id)
// // 				{header.add_Child(cell)}
// // 		})
// // 		// const parent = headerTree.index
// // 		// headerTree.
// // 		// console.log(cell)
// // 	})
// // })

// // console.log(">>>", count) // 39

// // let indentation = []

// // function print_Headers(target:Header|Header[]){
// // 	if(target instanceof Array){
// // 		target.forEach(child => {
// // 			print_Headers(child)
// // 		})
// // 	}
// // 	else{
// // 		if(target.children){
// // 			indentation.push("-")
// // 			print_Headers(target.children)
// // 			indentation.pop()
// // 		}
// // 		console.log(indentation.join(""), target.name)
// // 	}
// // }

// // parent_Headers.forEach(header => {
// // 	print_Headers(header)
// // })


// // const x = [].concat.apply([], headerRows)

// // x.forEach(header => {
// // 	console.log(">>>", header.path)
// // })









// // console.log(headerOrdered_Columns.map(x => x.name))
