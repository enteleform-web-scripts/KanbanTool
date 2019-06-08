//###  Module  ###//
import {onPageLoad_Timeout_MS} from "./Settings"
import {CardType             } from "./_CardType"


//###############//
//###  Setup  ###//
//###############//

const _on_PageLoad_Callbacks:(() => void)[] = []


//########################//
//###  Exports: Local  ###//
//########################//

export const KanbanTool  = (window as any).KT
export const activeBoard = KanbanTool.boards.models[0]

export function on_PageLoad(callback:(() => void))
	{_on_PageLoad_Callbacks.push(callback)}

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


//#########################//
//###  Exports: Nested  ###//
//#########################//

export {CardType_Filter} from "./CardType_Filter/__Main__"
export {Show           } from "./Show/__Main__"
export {Hide           } from "./Hide/__Main__"


//##############//
//###  Init  ###//
//##############//

KanbanTool.activeBoard = activeBoard

setTimeout(() => {
	_on_PageLoad_Callbacks.forEach(callback =>
		callback()
	)
}, onPageLoad_Timeout_MS)
