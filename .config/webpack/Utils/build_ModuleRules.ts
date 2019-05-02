//###  NPM  ###//
import webpack         from "webpack"
import MultiLoader     from "multi-loader"
// import combine_Loaders from "webpack-combine-loaders"


export function build_ModuleRules(
	...loaders:(string | webpack.RuleSetRule | webpack.RuleSetRule[])[]
): webpack.RuleSetRule[]{
	// loaders = loaders.map(loader => {
	// 	if     (typeof loader === "string"){return loader                   }  //  string
	// 	else if(loader instanceof Array   ){return combine_Loaders(loader  )}  //  webpack.RuleSetRule[]
	// 	else                               {return combine_Loaders([loader])}  //  webpack.RuleSetRule
	// })

	return MultiLoader(...loaders)
}


