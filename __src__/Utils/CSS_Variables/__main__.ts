
//#################//
//###  Exports  ###//
//#################//

export function set_CSS_Variable(key:string,                  value:(string|number))
export function set_CSS_Variable(element:JQuery,  key:string, value:(string|number))
export function set_CSS_Variable(arg_1?, arg_2?, arg_3?                            ){
	console.log(`-----------------------------`)
	console.log(`{arg_1:'${arg_1}', arg_2:'${arg_2}', arg_3:'${arg_3}'}`)
	const {element, key, value} = _get_Arguments(arg_1, arg_2, arg_3)
	console.log(`{element:'${element}', key:'${key}', value:'${value}'}`)

	if(element)
		{element.get(0).style.setProperty(key, value)}
	else
		{document.documentElement.style.setProperty(key, value)}
}

export function get_CSS_Variable(key:string,                )
export function get_CSS_Variable(element:JQuery,  key:string)
export function get_CSS_Variable(arg_1?, arg_2?             ){
	const {element, key} = _get_Arguments(arg_1, arg_2, undefined)

	if(element)
		{return element.get(0).style.getPropertyValue(key)}
	else
		{return _get_CSS_Variable_Value(key)}
}

export function get_CSS_Variables(){
	const variables = {}

	const styleSheets =
		[...document.styleSheets]
			.flatMap(sheet => _get_CSS_Variable_Keys(sheet))

	styleSheets.forEach(key => {
		variables[key] = _get_CSS_Variable_Value(key)
	})

	return variables
}


//###############//
//###  Utils  ###//
//###############//

function _get_Arguments(arg_1, arg_2, arg_3){
	let [element, key, value] =
		(arg_1.constructor === jQuery)
		? [arg_1 as JQuery, arg_2, arg_3]
		: [undefined,       arg_1, arg_2]

	return {
		element,
		value,
		key: `--${key}`
	}
}

function _get_CSS_Variable_Keys(styleSheet:StyleSheet){
	const cssRules = [...(styleSheet as CSSStyleSheet).cssRules]

	const rootRules = cssRules.filter(rule =>
		((rule as CSSStyleRule).selectorText == ":root")
	)

	const keys =
		rootRules.flatMap( rule =>
			[...(rule as CSSStyleRule).style]
		)

	return keys
}

function _get_CSS_Variable_Value(key:string)
	{return getComputedStyle(document.documentElement).getPropertyValue(key)}
