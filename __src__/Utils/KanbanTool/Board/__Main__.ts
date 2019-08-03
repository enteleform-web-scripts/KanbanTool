// const cards = $.find("kt-task").map(element => ({element, model:element.props.task}))

// KT.activeBoard.swimlanes().models

// KT.activeBoard.workflowStages().models
// KT.activeBoard.workflowStages().leafs()
// KT.activeBoard.workflowStages().root()
// KT.activeBoard.workflowStages().levels()

function _build_ModelMap(modelContainer){
	const modelMap = {}
	modelContainer.forEach( (model, index) => {
		modelMap[model.id] = {model, index}
	})
	return modelMap
}

function _build_ElementModelMap(selector, dataProperty, modelMap){
	const elementModelMap = {}
	$.find(selector).forEach(element => {
		const id = element.dataset[dataProperty]
		const {model, index}  = modelMap[id]
		elementModelMap[id] = {element, model, index}
	})
	return elementModelMap
}

class Board{

	static __rowMap              = _build_ModelMap(KT.activeBoard.swimlanes()             )
	static __allColumn_Map       = _build_ModelMap(KT.activeBoard.workflowStages()        )
	static __containerColumn_Map = _build_ModelMap(KT.activeBoard.workflowStages().leafs())

	static _rows    = _build_ElementModelMap("kt-board > tbody > tr",                    "swimlaneId", Board.__rowMap       )
	static _columns = _build_ElementModelMap("kt-board > thead > tr > th:not(.kt-void)", "stageId",    Board.__allColumn_Map)

	static get _taskMap()
		{return _build_ModelMap(KT.activeBoard.tasks())}
	static get tasks()
		{return _build_ElementModelMap("kt-task", "taskId", Board._taskMap)}

	static get _rowMap             (){return Board.__rowMap             }
	static get _allColumn_Map      (){return Board.__allColumn_Map      }
	static get _containerColumn_Map(){return Board.__containerColumn_Map}
	static get rows                (){return Board._rows                }
	static get columns             (){return Board._columns             }

}









