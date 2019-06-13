//###  Module  ###//
import {onPageLoad_Timeout_MS} from "./Settings"


//###############//
//###  Setup  ###//
//###############//

const _on_PageLoad_Callbacks:({id:Symbol, callback:(() => void)}[]) = []


//########################//
//###  Exports: Local  ###//
//########################//

export const KanbanTool  = (window as any).KT
export const activeBoard = KanbanTool.boards.models[0]

export function on_PageLoad(callback:(() => void)                            )
export function on_PageLoad(id:Symbol, callback:(() => void)                 )
export function on_PageLoad(arg_1?:(Symbol|(() => void)), arg_2?:(() => void)){
	const [id, callback] =
		(typeof arg_1 == "symbol")
		? [arg_1,    arg_2 as (() => void)]
		: [Symbol(), arg_1 as (() => void)]

	_on_PageLoad_Callbacks.push({id, callback})
}

export function remove_PageLoad_Callback(id:Symbol){
	const match = _on_PageLoad_Callbacks.filter(entry => (entry.id === id))
	if(match.length > 0){
		match.forEach(entry =>
			_on_PageLoad_Callbacks.splice(_on_PageLoad_Callbacks.indexOf(entry), 1)
		)
	}
}

export function taskView_IsVisible(){
	const taskView = document.querySelector("kt-taskview")
	return (
		(taskView != null)
		&& ($(taskView).css("display") != "none")
	)
}

//###################################//
//###  Exports: Local (Circular)  ###//
//###################################//
// keep after 'Exports: Local' declarations
// to avoid issues with circular dependencies

import {CardType as _CardType} from "./CardType/__Main__"
_CardType.initialize(activeBoard)
export const cardTypes = _CardType.cardTypes
export const CardType  = _CardType
export type  CardType  = _CardType


//#########################//
//###  Exports: Nested  ###//
//#########################//

export {Show                              } from "./Show/__Main__"
export {Hide                              } from "./Hide/__Main__"
export {KeyBinding_Decorator as KeyBinding} from "./KeyBinding_Decorator/__Main__"


//##############//
//###  Init  ###//
//##############//

import {CardMover} from "./CardMover/__Main__"
CardMover.initialize(activeBoard)

KanbanTool.activeBoard = activeBoard

KanbanTool.onInit( ()=>{
	setTimeout(() => {
		_on_PageLoad_Callbacks.forEach( ({callback}) =>
			callback()
		)
	}, onPageLoad_Timeout_MS)
})
