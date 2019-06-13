//###  Module  ###//
import {onPageLoad_Timeout_MS} from "./Settings"
import {get_ActiveBoard      } from "./get/activeBoard"


//#########################//
//###  Exports - Class  ###//
//#########################//

export class KanbanTool{

	static API         = (window as any).KT
	static activeBoard = get_ActiveBoard()

	static _on_PageLoad_Callbacks:({id:Symbol, callback:(() => void)}[]) = []

	static on_PageLoad(callback:(() => void)                            )
	static on_PageLoad(id:Symbol, callback:(() => void)                 )
	static on_PageLoad(arg_1?:(Symbol|(() => void)), arg_2?:(() => void)){
		const [id, callback] =
			(typeof arg_1 == "symbol")
			? [arg_1,    arg_2 as (() => void)]
			: [Symbol(), arg_1 as (() => void)]

		KanbanTool._on_PageLoad_Callbacks.push({id, callback})
	}

	static remove_PageLoad_Callback(id:Symbol){
		const callbacks = KanbanTool._on_PageLoad_Callbacks
		const match = callbacks.filter(entry => (entry.id === id))
		if(match.length > 0){
			match.forEach(entry =>
				callbacks.splice(callbacks.indexOf(entry), 1)
			)
		}
	}

	static get taskView_IsVisible(){
		const taskView = document.querySelector("kt-taskview")
		return (
			(taskView != null)
			&& ($(taskView).css("display") != "none")
		)
	}

}


//##############//
//###  Init  ###//
//##############//

KanbanTool.API.activeBoard = KanbanTool.activeBoard

KanbanTool.API.onInit( ()=>{
	setTimeout(() => {
		KanbanTool._on_PageLoad_Callbacks.forEach( ({callback}) => {
			callback()
		})
	}, onPageLoad_Timeout_MS)
})


//#############################//
//###  Exports - NameSpace  ###//
//#############################//

//!!!  keep @ end to avoid circular dependency conficts  !!!//

import {KeyBinding_Decorator   } from "./KeyBinding_Decorator/__Main__"
import {Show      as _Show     } from "./Show/__Main__"
import {Hide      as _Hide     } from "./Hide/__Main__"
import {CardType  as _CardType } from "./CardType/__Main__"
import {CardMover as _CardMover} from "./CardMover/__Main__"

export namespace KanbanTool{

	export const KeyBinding = KeyBinding_Decorator

	export const Show = _Show
	export const Hide = _Hide

	export type  CardType  = _CardType
	export const CardType  = _CardType
	export const cardTypes = _CardType.cardTypes

	export const CardMover = _CardMover

}
