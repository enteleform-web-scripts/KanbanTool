
//#################//
//###  Exports  ###//
//#################//

export function get_CardTypes(activeBoard): CardType[]{
	return activeBoard.cardTypes().active().map(
		({attributes}, index) => new CardType({
			index:   index,
			id:      attributes.id,
			name:    attributes.name,
			bgColor: attributes.color_attrs.rgb,
			fgColor: (
				attributes.color_attrs.invert
				? "#FFF"
				: "#000"
			),
		})
	)
}

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

export function get_CardType_FromName(name:string)
	{return _get_CardType_FromProperty("name", name)}

export function get_CardType_FromID(id:number)
	{return _get_CardType_FromProperty("id", id)}

export function get_CardTypes_FromRegEx(pattern:RegExp){
	return cardTypes.filter(cardType =>
		pattern.exec(cardType.name)
	)
}


//##############//
//###  Init  ###//
//##############//

import {cardTypes} from "./__Main__"


//###############//
//###  Utils  ###//
//###############//

function _get_CardType_FromProperty(key:string, value:any){
	const matches = cardTypes.filter(cardType => (cardType[key] == value))
	if(matches.length > 0)
		{return matches[0]}
	else
		{return undefined}
}
