
export class CardType{
	index:   number
	id:      number
	name:    string
	bgColor: string
	fgColor: string

	constructor(
		{index,        id,        name,        bgColor,        fgColor       }:
		{index:number, id:number, name:string, bgColor:string, fgColor:string}
	){
		this.index   = index
		this.id      = id
		this.name    = name
		this.bgColor = bgColor
		this.fgColor = fgColor
	}
}
