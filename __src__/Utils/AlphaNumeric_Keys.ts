
//###############//
//###  Setup  ###//
//###############//

const _alphaNumericKeys = [
	["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
	["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
	["a", "s", "d", "f", "g", "h", "j", "k", "l"     ],
	["z", "x", "c", "v", "b", "n", "m"               ],
]


//#################//
//###  Exports  ###//
//#################//

export const alphanumericKeys =
	_alphaNumericKeys
		.flatMap((row, rowIndex) =>
			row.map(key => new _KeyData({key, rowIndex}))
		)


//###############//
//###  Utils  ###//
//###############//

class _KeyData{
	key:      string
	rowIndex: number

	constructor(
		{key,        rowIndex       }:
		{key:string, rowIndex:number}
	){
		this.key      = key
		this.rowIndex = rowIndex
	}
}
