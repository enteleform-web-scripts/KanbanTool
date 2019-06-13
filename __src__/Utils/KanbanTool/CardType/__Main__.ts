//###  Module  ###//
import {Filter as _Filter} from "./Filter"
import {KanbanTool       } from "../__Main__"
import {is_JQuery        } from "~/Utils/is_JQuery"

//###  NPM  ###//
const $:any = require("jquery")


//#################//
//###  Exports  ###//
//#################//

export class CardType{

	static Filter     = _Filter
	static _cardTypes = _get_CardTypes()

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

	static get cardTypes()
		{return CardType._cardTypes}

	static initialize(activeBoard){
		CardType._cardTypes =
			activeBoard.cardTypes().active().map(
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

	static get_FromName(name:string)
		{return _get_CardType_FromProperty("name", name)}

	static get_FromID(id:number)
		{return _get_CardType_FromProperty("id", id)}

	static get_FromRegEx(pattern:RegExp){
		return CardType.cardTypes.filter(cardType =>
			pattern.exec(cardType.name)
		)
	}

	static get_Cards(...cardTypes:CardType[]): ({cardType:CardType, element:JQuery, model:any}[]){
		const cardElements = $.find("kt-task")
		return cardTypes.flatMap(cardType =>
			cardElements
				.map   (element   => ({cardType, element:$(element), model:element.props.task}))
				.filter(({model}) => (model.cardType().id == cardType.id)                      )
		)
	}

	static set(element:(JQuery|HTMLElement), cardType:CardType){
		if(is_JQuery(element))
			{element = (element as any).get(0)}
		(element as any).props.task.save("card_type_id", cardType.id)
	}

}


//###############//
//###  Utils  ###//
//###############//

function _get_CardTypes(){
	return KanbanTool.activeBoard.cardTypes().active().map(
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

function _get_CardType_FromProperty(key:string, value:any){
	const matches =
		CardType.cardTypes.filter(cardType =>
			(cardType[key] == value)
		)

	if(matches.length > 0)
		{return matches[0]}
	else
		{return undefined}
}
