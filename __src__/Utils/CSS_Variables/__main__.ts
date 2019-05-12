
//#################//
//###  Exports  ###//
//#################//

export function set_CSS_Variable(key:string, value:any)
	{document.documentElement.style.setProperty(`--${key}`, value)}

export function get_CSS_Variable(key:string)
	{return _get_CSS_Variable_Value(`--${key}`)}

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
