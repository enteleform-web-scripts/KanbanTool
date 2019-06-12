//###  Module: CSS  ###//
const CSS = require("./__CSS_Variables__.json").FunctionBar


export class Divider{
	text: string

	constructor(text:string){
		this.text = text
	}

	get cssClass(){
		if(this.text)
			{return CSS.textDivider}
		else
			{return CSS.divider}
	}
}
