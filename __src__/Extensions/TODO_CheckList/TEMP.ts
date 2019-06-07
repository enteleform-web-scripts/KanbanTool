//###  NPM  ###//
const $:any = require("jquery")

export const lol = "wut"

const DELETE_KEYCODE = 46

const selector__CheckList_Item                = "kt-taskview > form > div.kt-taskview-content > kt-checklist > li > .kt-checklist_item_content"
const selector__CheckList_Item_SiblingsPrefix = "#show > kt-cover > kt-taskview > form > div.kt-taskview-content > kt-checklist"

let checkList_Item:(HTMLElement|null) = null


//############################//
//###  Delete on Keypress  ###//
//############################//

$(document).on("mouseover", selector__CheckList_Item, (event:any) => {
	checkList_Item = event.currentTarget
})
$(document).on("mouseout", selector__CheckList_Item, (event:any) => {
	checkList_Item = null
})

$(document).on("keydown", (event:any) => {
	if(checkList_Item && (event.keyCode == DELETE_KEYCODE)){
		const divIndex = get_DivIndex(checkList_Item)

		const button__Delete:HTMLElement = document.querySelector(`${selector__CheckList_Item_SiblingsPrefix} > li:nth-child(${divIndex}) > a.kt-remove > i.kt-icon-trash`) as HTMLElement
		button__Delete.click()
	}
})


//#######################//
//###  Edit On Click  ###//
//#######################//

$(document).on("click", selector__CheckList_Item, (event:any) => {
	if(event.ctrlKey)
		{return}

	event.preventDefault()

	const div__CheckList_Item = event.currentTarget
	const divIndex            = get_DivIndex(div__CheckList_Item)

	setTimeout(() => {
		const checkBox:HTMLElement = document.querySelector(`${selector__CheckList_Item_SiblingsPrefix} > li:nth-child(${divIndex}) > input[type='checkbox']`) as HTMLElement
		checkBox.click()
	}, 200)

	setTimeout(() => {
		const button__Edit:HTMLElement = document.querySelector(`${selector__CheckList_Item_SiblingsPrefix} > li:nth-child(${divIndex}) > a.kt-edit > i.kt-icon-pencil-1`) as HTMLElement
		button__Edit.click()
	}, 700)
})


//###############//
//###  Utils  ###//
//###############//

function get_DivIndex(checkList_Item:(HTMLElement)){
	return ($(checkList_Item).parent().index() + 1)
}
