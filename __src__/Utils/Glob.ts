
export class Glob{

	_globPattern:  string
	_regex:        RegExp
	_regexPattern: string

	constructor(pattern:string){
		this._globPattern = pattern
		this._build_RegEx()
	}

	get pattern()
		{return this._globPattern}

	get regex()
		{return this._regexPattern}

	match(path:string){
		return (
			path.match(this._regex)
			? true
			: false
		)
	}

	_build_RegEx(){
		let pattern =
			_GLOB_TO_REGEX_MAP
				.reduce( (pattern, {regEx, replacement}) => (
					pattern.replace(regEx, _escape(replacement))
				), this._globPattern)

		pattern = ("^" + pattern + "$")

		this._regexPattern = pattern
		this._regex        = new RegExp(pattern)
	}

}

function _escape(text:string){
	return text.replace(/\\/g, "\\\\")
}

const _GLOB_TO_REGEX_MAP = [
	{regEx:/\\\\/g,                  replacement:"\\\\"         },  //  backslashes
	{regEx:/([^\\\\]+)\\\\\*\*\*$/g, replacement:"\\1(\\\\.*$)?"},  //  `\***`         #  match nested children + include parent
	{regEx:/^\*\*\\\\\*$/g,          replacement:".*"           },  //  `**\*`         #  match all             + include nested children
	{regEx:/(?<!^)\*\*\\\\\*$/g,     replacement:".*"           },  //  `\**\*`        #  match nested children @ parent
	{regEx:/^\*\*$/g,                replacement:"[^\\\\]+"     },  //  only     `**`  #  match children        @ root (without suffix)
	{regEx:/^\*\*/g,                 replacement:".*?"          },  //  leading  `**`  #  match children        @ root (with suffix)
	{regEx:/\\\*\*(?=\\)?/g,         replacement:"\\.*?"        },  //  middle   `**`  #  match children        @ parent
	{regEx:/^\*/g,                   replacement:"[^\\\\]+"     },  //  leading  `*`   #  match all             @ root
	{regEx:/\\\*$/g,                 replacement:"\\[^\\\\]+"   },  //  trailing `*`   #  match children        @ parent
]
