
//###  Module  ###//
import {activeBoard} from "~/Utils/KanbanTool"


const allColumns =
	activeBoard.workflowStages().toArray()
		.map(column => column.attributes)

const userColumns = allColumns.slice(1)
const rootColumn  = allColumns[0]

function _build_HeaderOrdered_Columns(parentColumns:any){
	const queue          = [...userColumns]
	const orderedColumns = []

	while(queue.length > 0){
		const next_Parent_StartIndex = orderedColumns.length

		parentColumns.forEach(parent => {
			const children =
				queue.filter(column =>
					(column.parent_id == parent.id)
				)

			children.forEach(child => {
				const child_QueueIndex = queue.indexOf(child)
				const column_WasAdded = (child_QueueIndex == -1)
				if(! column_WasAdded){
					console.log("--", child_QueueIndex, child.name)
					queue.splice(child_QueueIndex, 1)
					orderedColumns.push(child)
				}
			})
		})

		parentColumns = orderedColumns.slice(next_Parent_StartIndex)
	}

	return orderedColumns
}

const headerOrdered_Columns = _build_HeaderOrdered_Columns([rootColumn])
console.log(">>>", headerOrdered_Columns)


































// // const headers = $.find("kt-board > thead > tr > th")
// // const columns = KT.boards.models[0].workflowStages().toArray()

// // $("kt-board > thead").children().toArray().forEach((row, rowIndex) => {
// // 		$(row).children().toArray().forEach((cell, cellIndex) => {
// // 			console.log(rowIndex, cellIndex, cell)
// // 		})
// // })


// class Header{
// 	children     = []
// 	children_IDs = []

// 	name:     string
// 	id:       number
// 	parentID: number
// 	parent:   Header
// 	element:  HTMLElement

// 	constructor(
// 		{name, id, parentID,  element            }:
// 		{name, id, parentID?, element:HTMLElement}
// 	){
// 		this.name     = name
// 		this.id       = id
// 		this.parentID = parentID
// 		this.element  = element
// 	}

// 	get path(){
// 		if(this.parent)
// 			{return `${this.parent.path}\\${this.name}`}
// 		else
// 			{return this.name}
// 	}

// 	add_Child(child:Header){
// 		child.parent = this

// 		this.children    .push(child   )
// 		this.children_IDs.push(child.id)
// 	}

// }


// // const headerRows = [
// // 	[new Header({name:"A", id:1}), new Header({name:"B", id:2}), new Header({name:"C", id:3})],
// // 	[new Header({name:"1", id:21, parentID:2}), new Header({name:"2", id:22, parentID:2}), new Header({name:"3", id:23, parentID:2})],
// // 	[new Header({name:"10", id:221, parentID:22}), new Header({name:"20", id:222, parentID:22})],
// // ]


// // const headerRows = []

// // $("kt-board > thead").children().toArray().forEach((row, rowIndex) => {
// // 	const headerRow = headerRows[rowIndex] = []
// // 	$(row).children().toArray().forEach((cell, cellIndex) => {
// // 		headerRow.push(
// // 			new Header(name, id, parentID, cell)
// // 		)
// // 		// console.log(rowIndex, cellIndex, cell)
// // 	})
// // })

// // console.log(">>>", headerRows)


// const parent_Headers = headerRows[0]
// const nestedRows     = headerRows.slice(1)

// let count = -1

// nestedRows.forEach((row, rowIndex) => {
// 	row.forEach(cell => {
// 		headerRows[rowIndex].forEach(header => {
// 			count += 1

// 			if(cell.parentID == header.id)
// 				{header.add_Child(cell)}
// 		})
// 		// const parent = headerTree.index
// 		// headerTree.
// 		// console.log(cell)
// 	})
// })

// console.log(">>>", count) // 39

// let indentation = []

// function print_Headers(target:Header|Header[]){
// 	if(target instanceof Array){
// 		target.forEach(child => {
// 			print_Headers(child)
// 		})
// 	}
// 	else{
// 		if(target.children){
// 			indentation.push("-")
// 			print_Headers(target.children)
// 			indentation.pop()
// 		}
// 		console.log(indentation.join(""), target.name)
// 	}
// }

// parent_Headers.forEach(header => {
// 	print_Headers(header)
// })


// const x = [].concat.apply([], headerRows)

// x.forEach(header => {
// 	console.log(">>>", header.path)
// })









// console.log(headerOrdered_Columns.map(x => x.name))
