
export class Header{
	children     = []
	children_IDs = []

	element:   HTMLElement
	id:        number
	index:     number
	name:      string
	parent_id: number
	parent:    Header

	constructor(
		{model,     element,             index       }:
		{model:any, element:HTMLElement, index:number}
	){
		this.name      = model.name
		this.id        = model.id
		this.parent_id = model.parent_id

		this.element = element
		this.index   = index
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
