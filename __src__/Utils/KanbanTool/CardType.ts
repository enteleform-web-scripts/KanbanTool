
//#################//
//###  Exports  ###//
//#################//

export class CardType{

	static _cardTypes: CardType[]

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

	static get cardTypes(){
		return CardType._cardTypes
	}

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

}


//###############//
//###  Utils  ###//
//###############//

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
