
//###############//
//###  Setup  ###//
//###############//

const _on_PageLoad_Callbacks:({id:Symbol, callback:(() => void)}[]) = []


//#########################//
//###  Exports - Class  ###//
//#########################//

export class KanbanTool{

	static API:         any
	static _activeBoard: any

	static initialize(){
		KanbanTool.API = (window as any).KT

		KanbanTool.API.activeBoard = KanbanTool.activeBoard

		_CardMover.initialize(KanbanTool.activeBoard)
		_CardType .initialize(KanbanTool.activeBoard)

		KanbanTool.API.onInit( ()=>{
			setTimeout(() => {
				_on_PageLoad_Callbacks.forEach( ({callback}) => {
					callback()
				})
			}, onPageLoad_Timeout_MS)
		})
	}

	static on_PageLoad(callback:(() => void)                            )
	static on_PageLoad(id:Symbol, callback:(() => void)                 )
	static on_PageLoad(arg_1?:(Symbol|(() => void)), arg_2?:(() => void)){
		const [id, callback] =
			(typeof arg_1 == "symbol")
			? [arg_1,    arg_2 as (() => void)]
			: [Symbol(), arg_1 as (() => void)]

		_on_PageLoad_Callbacks.push({id, callback})
	}

	static remove_PageLoad_Callback(id:Symbol){
		const match = _on_PageLoad_Callbacks.filter(entry => (entry.id === id))
		if(match.length > 0){
			match.forEach(entry =>
				_on_PageLoad_Callbacks.splice(_on_PageLoad_Callbacks.indexOf(entry), 1)
			)
		}
	}

	static get activeBoard(){
		if(! KanbanTool._activeBoard)
			{KanbanTool._activeBoard = KanbanTool.API.boards.models[0]}

		return KanbanTool._activeBoard
	}

	static get taskView_IsVisible(){
		const taskView = document.querySelector("kt-taskview")
		return (
			(taskView != null)
			&& ($(taskView).css("display") != "none")
		)
	}

}


//#############################//
//###  Exports - NameSpace  ###//
//#############################//

export namespace KanbanTool{
	export const Show       = _Show
	export const Hide       = _Hide
	export const KeyBinding = KeyBinding_Decorator

	export type  CardType  = _CardType
	export const CardType  = _CardType
	export const cardTypes = _CardType.cardTypes

	export const CardMover = _CardMover
}


//#################//
//###  Imports  ###//
//#################//

//!!!  keep @ end to avoid circular dependencies  !!!//

//###  Module  ###//
import {onPageLoad_Timeout_MS  } from "./Settings"
import {KeyBinding_Decorator   } from "./KeyBinding_Decorator/__Main__"
import {Show      as _Show     } from "./Show/__Main__"
import {Hide      as _Hide     } from "./Hide/__Main__"
import {CardMover as _CardMover} from "./CardMover/__Main__"
import {CardType  as _CardType } from "./CardType/__Main__"
