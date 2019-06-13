//###  Modules  ###//
import {KanbanTool} from "../__Main__"

//###  NPM  ###//
const $:any = require("jquery")


//########################//
//###  Exports: Class  ###//
//########################//

export class TaskContainer{
	type:                TaskContainer.Type
	domIndex:            number
	modelIndex:          number
	model:               any
	_clickableElement:   HTMLElement
	_collapsibleElement: HTMLElement

	parent:   TaskContainer
	children: TaskContainer[] = []

	constructor(
		{type,                    domIndex,        modelIndex,        model,     element            }:
		{type:TaskContainer.Type, domIndex:number, modelIndex:number, model:any, element:HTMLElement}
	){
		this.type       = type
		this.domIndex   = domIndex
		this.modelIndex = modelIndex
		this.model      = model

		this._clickableElement = element

		this._collapsibleElement =
			(this.type == TaskContainer.Type.Row)
			? $(element).parent()
			: element
	}

	get parents(){
		let   child   : TaskContainer   = this
		const parents : TaskContainer[] = []

		while(child.parent){
			parents.unshift(child.parent)
			child = child.parent
		}

		return parents
	}

	get descendants(){
		const descendants : TaskContainer[] = []

		function add(container:TaskContainer){
			container.children.forEach(child => {
				descendants.push(child)
				add(child)
			})
		}

		add(this)

		return descendants
	}

	get name()
		{return this.model.attributes.name}

	get path(){
		return (
			(this.type == TaskContainer.Type.Row)
			? this.name
			: this._columnPath
		)
	}

	get tasks(){
		return (
			KanbanTool.activeBoard.tasks().filter(task => {
				const taskContainer =
					(this.type == TaskContainer.Type.Row)
					? task.swimlane()
					: task.workflowStage()

				return (taskContainer === this.model)
			})
		)
	}

	get is_Collapsed()
		{return $(this._collapsibleElement).hasClass("kt-collapsed")}

	get is_Empty()
		{return (this.tasks.length == 0)}

	get _columnPath(){
		const tree = [...this.parents, this]

		const names =
			tree.map(container => container.name)

		return names.join("\\")
	}

	add_Child(child:TaskContainer){
		child.parent = this
		this.children.push(child)
	}

	show(){
		if(this.is_Collapsed)
			{this._click()}
	}

	hide(){
		if(! this.is_Collapsed)
			{this._click()}
	}

	_click()
		{this._clickableElement.click()}
}


//############################//
//###  Exports: Namespace  ###//
//############################//

export namespace TaskContainer{

	export enum Type{
		Row,
		Column,
	}

}
