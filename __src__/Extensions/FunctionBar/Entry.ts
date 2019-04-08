
export class Entry{
	name:     string
	on_Enter: (() => void)

	constructor(
		{name,        on_Enter,            }:
		{name:string, on_Enter:(() => void)}
	){
		this.name     = name
		this.on_Enter = on_Enter
	}
}
