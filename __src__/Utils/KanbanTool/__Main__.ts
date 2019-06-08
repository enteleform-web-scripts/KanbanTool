//###  Module  ###//
import {CardType} from "./_CardType"


//#########################//
//###  Exports: Nested  ###//
//#########################//

export {CardType_Filter} from "./CardType_Filter/__Main__"
export {Show           } from "./Show/__Main__"
export {Hide           } from "./Hide/__Main__"


//########################//
//###  Exports: Local  ###//
//########################//

export const KanbanTool  = (window as any).KT
export const activeBoard = KanbanTool.boards.models[0]

export const cardTypes: CardType[] =
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


//##############//
//###  Init  ###//
//##############//

KanbanTool.activeBoard = activeBoard
