
export class TaskContainer{
	type:            TaskContainer.Type
	index:           number
	model:           any
	clickElement:    HTMLElement
	collapseElement: HTMLElement

	parent:   TaskContainer
	children: TaskContainer[] = []

	constructor(
		{type,                    index,        model,     clickElement,             collapseElement            }:
		{type:TaskContainer.Type, index:number, model:any, clickElement:HTMLElement, collapseElement:HTMLElement}
	){
		this.type            = type
		this.index           = index
		this.model           = model
		this.clickElement    = clickElement
		this.collapseElement = collapseElement
	}

	get parents(){
		let   child   : TaskContainer   = this
		const parents : TaskContainer[] = []

		while(child.parent){
			parents.push(child.parent)
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


export namespace TaskContainer{

	export enum Type{
		Row,
		Column,
	}

}
