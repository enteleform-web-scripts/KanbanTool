
let _activeBoard

export function get_ActiveBoard(){
	if(! _activeBoard)
		{_activeBoard = (window as any).KT.boards.models[0]}
	return _activeBoard
}
