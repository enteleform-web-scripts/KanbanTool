//###  Module  ###//
import {activeBoard} from "./__Main__"


//#################//
//###  Exports  ###//
//#################//

export const cardTypes: _CardType[] =
	activeBoard.cardTypes().active().map(
		({attributes}, index) => new _CardType({
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

export class _CardType{
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

export function _get_CardType_FromName(name:string)
	{return _get_CardType_FromProperty("name", name)}

export function _get_CardType_FromID(id:number)
	{return _get_CardType_FromProperty("id", id)}


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
