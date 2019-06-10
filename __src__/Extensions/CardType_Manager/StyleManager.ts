// //###  Module: CSS  ###//
// const cssVariables = require("./__CSS_Variables__.json")

// //###  Module  ###//
// import {set_CSS_Variable       } from "~/Utils/CSS_Variables/__Main__"
// import {on_PageLoad, KanbanTool} from "~/Utils/KanbanTool/__Main__"

// //###  NPM  ###//
// const $:any = require("jquery")


// const callback = ()=>{
// 	console.log("--------------")
// 	$.find("kt-task").forEach(element=>{
// 		const $element    = $(element)
// 		const taskID      = $element.data("task-id")
// 		const model       = KanbanTool.tasks.load(taskID)
// 		const cardType_ID = model.cardType().id
// 		console.log($element, model)
// 		$element.css({border:"3px solid #F00"})
// 	})
// }

// on_PageLoad(() => {
// 	callback()
// 	KanbanTool.boards.on("change", callback)
// })
