
export class Header{
	children     = []
	children_IDs = []

	clickElement:    HTMLElement
	collapseElement: HTMLElement
	id:              number
	index:           number
	name:            string
	parent_id:       number
	parent:          Header

	constructor(
		{index,        model,     clickElement,             collapseElement            }:
		{index:number, model:any, clickElement:HTMLElement, collapseElement:HTMLElement}
	){
		this.index           = index
		this.clickElement    = clickElement
		this.collapseElement = collapseElement

		this.name      = model.name
		this.id        = model.id
		this.parent_id = model.parent_id
	}

	get path(){
		if(this.parent)
			{return `${this.parent.path}\\${this.name}`}
		else
			{return this.name}
	}

	get parents(){
		let   child   : Header   = this
		const parents : Header[] = []

		while(child.parent){
			parents.push(child.parent)
			child = child.parent
		}

		return parents
	}

	add_Child(child:Header){
		child.parent = this

		this.children    .push(child   )
		this.children_IDs.push(child.id)
	}
}
