
//#################//
//###  Exports  ###//
//#################//

export const ModifierKeys = [
	"ctrl", "shift", "alt"
]
export type ModifierKey = (
	"ctrl" | "shift" | "alt"
)

export const AlphanumericKeys = [
	"1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
	"q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
	"a", "s", "d", "f", "g", "h", "j", "k", "l",
	"z", "x", "c", "v", "b", "n", "m"
]
export type AlphanumericKey = (
	"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0" |
	"q" | "w" | "e" | "r" | "t" | "y" | "u" | "i" | "o" | "p" |
	"a" | "s" | "d" | "f" | "g" | "h" | "j" | "k" | "l" |
	"z" | "x" | "c" | "v" | "b" | "n" | "m"
)

export const CharacterKeys = [
	"~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=" ,
	"q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
	"a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'",
	"z", "x", "c", "v", "b", "n", "m", ",", ".", "/"
]
export type CharacterKey = (
	"~" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0" | "-" | "="  |
	"q" | "w" | "e" | "r" | "t" | "y" | "u" | "i" | "o" | "p" | "[" | "]" | "\\" |
	"a" | "s" | "d" | "f" | "g" | "h" | "j" | "k" | "l" | ";" | "'" |
	"z" | "x" | "c" | "v" | "b" | "n" | "m" | "," | "." | "/"
)

export const Keys = [
	"ctrl", "shift", "alt",
	"~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=" ,
	"q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
	"a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'",
	"z", "x", "c", "v", "b", "n", "m", ",", ".", "/",

	//###  https://github.com/jaywcjlove/hotkeys#supported-keys  ###//
	"backspace",  "tab",  "clear",  "enter",  "return",  "esc",  "escape",  "space",
	"up",  "down",  "left",  "right",  "home",  "end",  "pageup",  "pagedown",
	"del",  "delete",
	"f1",  "f2",  "f3",  "f4",  "f5",  "f6",  "f7",  "f8",  "f9", "f10",
	"f11", "f12", "f13", "f14", "f15", "f16", "f17", "f18", "f19"
]
export type Key = (
	"ctrl" | "shift" | "alt" |
	"~" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0" | "-" | "="  |
	"q" | "w" | "e" | "r" | "t" | "y" | "u" | "i" | "o" | "p" | "[" | "]" | "\\" |
	"a" | "s" | "d" | "f" | "g" | "h" | "j" | "k" | "l" | ";" | "'" |
	"z" | "x" | "c" | "v" | "b" | "n" | "m" | "," | "." | "/" |

	//###  https://github.com/jaywcjlove/hotkeys#supported-keys  ###//
	"backspace" |  "tab" |  "clear" |  "enter" |  "return" |  "esc" |  "escape" |  "space" |
	"up" |  "down" |  "left" |  "right" |  "home" |  "end" |  "pageup" |  "pagedown" |
	"del" |  "delete" |
	"f1"  | "f2"  | "f3"  | "f4"  | "f5"  | "f6"  | "f7"  | "f8"  | "f9"  | "f10" |
	"f11" | "f12" | "f13" | "f14" | "f15" | "f16" | "f17" | "f18" | "f19"
)

export const alphanumericKey_Rows: AlphanumericKey[][]= [
	["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
	["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
	["a", "s", "d", "f", "g", "h", "j", "k", "l"     ],
	["z", "x", "c", "v", "b", "n", "m"               ],
]

export const characterKey_Rows: CharacterKey[][] = [
	["~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=" ],
	["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
	["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"           ],
	["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"                ],
]
