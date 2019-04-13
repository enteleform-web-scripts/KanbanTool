
//###  Module  ###//
import {activeBoard} from "~/Utils/KanbanTool"


//########################//
//###  Exports: Class  ###//
//########################//

export class TaskContainer{
	type:            TaskContainer.Type
	domIndex:        number
	model:           any
	clickElement:    HTMLElement
	collapseElement: HTMLElement

	parent:   TaskContainer
	children: TaskContainer[] = []

	constructor(
		{type,                    domIndex,        model,     clickElement,             collapseElement            }:
		{type:TaskContainer.Type, domIndex:number, model:any, clickElement:HTMLElement, collapseElement:HTMLElement}
	){
		this.type            = type
		this.domIndex        = domIndex
		this.model           = model
		this.clickElement    = clickElement
		this.collapseElement = collapseElement
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
			activeBoard.tasks().filter(task => {
				const taskContainer = (this.type == TaskContainer.Type.Row)
					? task.swimlane()
					: task.workflowStage()

				return (taskContainer === this.model)
			})
		)
	}

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
