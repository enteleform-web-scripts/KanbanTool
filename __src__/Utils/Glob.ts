
//#################//
//###  Exports  ###//
//#################//

export class Glob{

	_globPattern:  string
	_regEx:        RegExp
	_regexPattern: string

	constructor(pattern:string){
		this._globPattern = pattern
		this._build_RegEx()
	}

	get pattern()
		{return this._globPattern}

	get regEx()
		{return this._regexPattern}

	match(path:string){
		return (
			path.match(this._regEx)
			? true
			: false
		)
	}

	_build_RegEx(){
		let pattern =
			_GLOB_TO_REGEX_MAP
				.reduce( (pattern, {regEx, replacement}) => (
					pattern.replace(regEx, replacement)
				), this._globPattern)

		pattern = ("^" + pattern + "$")

		this._regexPattern = pattern
		this._regEx        = new RegExp(pattern)
	}

}


//###############//
//###  Utils  ###//
//###############//

const _GLOB_TO_REGEX_MAP = [
	{regEx:/\\/g,                    replacement:"\\\\"            },  //  backslashes
	{regEx:/([^\\]+)\\\\\*\*\*$/g,   replacement:"$1(\\\\.*$)?"    },  //  trailing `\***`  #  match nested children + include parent
	{regEx:/^\*\*\\\\\*$/g,          replacement:".*"              },  //  exact    `**\*`  #  match all             + include nested children
	{regEx:/(?<!^)\\\\\*\*\\\\\*$/g, replacement:"\\\\.*"          },  //  trailing `\**\*` #  match nested children @ parent
	{regEx:/^\*\*$/g,                replacement:"[^\\\\\\\\]+"    },  //  exact    `**`    #  match children        @ root (without suffix)
	{regEx:/^\*\*\\\\/g,             replacement:".*?\\\\"         },  //  leading  `**\`   #  match children        @ root (with suffix)
	{regEx:/\\\\\*\*/g,              replacement:"\\\\[^\\\\\\\\]+"},  //  middle   `\**`   #  match children        @ parent
	{regEx:/^\*$/g,                  replacement:"[^\\\\]+"        },  //  exact    `*`     #  match all             @ root
	{regEx:/\\\\\*$/g,               replacement:"\\\\[^\\\\]+"    },  //  trailing `\*`    #  match children        @ parent
]


//###############//
//###  Tests  ###//
//###############//

// //###  Node  ###//
// import assert from "assert"

// function test(path:string, glob:string, result:boolean){
// 	if(
// 	// assert(
// 		(new Glob(glob).match(path) == result)
// 	)
// 	{
// 		// console.log(`PASS   @ "${glob}".match("${path}"), ${new Glob(glob).regEx}`)
// 	}
// 	else{
// 		console.log(`FAILED @ "${glob}".match("${path}"), ${new Glob(glob).regEx}`)
// 	}
// }

// test("A", "A",     true)
// test("A", "*",     true)
// test("A", "**",    true)
// test("A", "**\\*", true)

// test("A\\B", "A\\B",     true)
// test("A\\B", "*",        false)
// test("A\\B", "**",       false)
// test("A\\B", "**\\*",    true )
// test("A\\B", "A\\*",     true )
// test("A\\B", "A\\**",    true )
// test("A\\B", "A\\**\\*", true )
// test("A\\B", "B\\*",     false)
// test("A\\B", "B\\**",    false)
// test("A\\B", "B\\**\\*", false)
// test("A\\B", "**\\B",    true )

// test("A\\B\\C", "A\\B\\C",      true )
// test("A\\B\\C", "*",            false)
// test("A\\B\\C", "**",           false)
// test("A\\B\\C", "**\\*",        true )
// test("A\\B\\C", "A\\*",         false)
// test("A\\B\\C", "A\\**",        false)
// test("A\\B\\C", "A\\**\\*",     true )
// test("A\\B\\C", "B\\*",         false)
// test("A\\B\\C", "B\\**",        false)
// test("A\\B\\C", "B\\**\\*",     false)
// test("A\\B\\C", "**\\B\\*",     true )
// test("A\\B\\C", "**\\B\\**",    true )
// test("A\\B\\C", "**\\B\\**\\*", true )
// test("A\\B\\C", "**\\C",        true )

// test("A",       "A\\B\\***", false)
// test("A\\B",    "A\\B\\***", true )
// test("A\\B\\C", "A\\B\\***", true )
