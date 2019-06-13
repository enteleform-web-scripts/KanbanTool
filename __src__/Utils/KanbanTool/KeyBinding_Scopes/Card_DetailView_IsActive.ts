//###  Module  ###//
import {KeyBinding_Scopes} from "./__Main__"
import {KeyBinding       } from "~/Utils/KeyBinding/__Main__"

//###  NPM  ###//
import jquery from "jquery"
const $:any = (jquery as any)


export namespace Card_DetailView_IsActive{

	const _taskView_Selector = "kt-taskview"

	export function initialize(){
		const taskView = document.querySelector(_taskView_Selector)
		if(taskView)
			{_on_TaskView_Visible(taskView)}
		else
			{_start_Observer_On_TaskView_Creation(_on_TaskView_Visible)}
	}

	function _set_TaskView_KeyBinding_Context(enable:boolean){
		// setTimeout ensures firing after mouseout events of other scopes
		setTimeout(() => {
			if(enable)
				{KeyBinding.set_Scope(KeyBinding_Scopes.Card_DetailView_IsActive)}
			else
				{KeyBinding.set_Scope()}
		}, 100)
	}

	function _on_TaskView_Visible(taskView:Element){
		const $taskView = $(taskView)
		const callback = (mutationsList, observer) => {
			for(const mutation of mutationsList){
				if(
					(mutation.type == "attributes")
					&& (mutation.attributeName == "style")
				){
					_set_TaskView_KeyBinding_Context(
						($taskView.css("display") == "none")
						? false
						: true
					)
				}
			}
		}

		const observer = new MutationObserver(callback)
		observer.observe(taskView, {attributes:true})
	}

	function _start_Observer_On_TaskView_Creation(start_Observer){
		const parentElement = document.querySelector("#show")
		let observer

		const callback = function(mutationsList, observer){
			for(const mutation of mutationsList){
				if(mutation.type == "childList"){
					const elements = Array.from(mutation.addedNodes)
					if(elements.some(node => (node as any).localName == _taskView_Selector)){
						const taskView = elements.filter(element => (element as any).localName == _taskView_Selector)[0]
						KeyBinding.set_Scope(KeyBinding_Scopes.Card_DetailView_IsActive)
						start_Observer(taskView)
						observer.disconnect()
						break
					}
				}
			}
		}

		observer = new MutationObserver(callback)
		observer.observe(parentElement, {childList:true, subtree:true})
	}

}
