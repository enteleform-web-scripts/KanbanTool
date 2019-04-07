
//#################//
//###  Exports  ###//
//#################//

export function load_ConfigSegments(modulePath:string, ...segment_RelativePaths:string[]){
	const configSegments = {}

	segment_RelativePaths.forEach(path => {
		const key = _get_BaseName(path)
		path = _update_RelativePath(modulePath, path)
		configSegments[key] = require(path).default
	})

	return configSegments
}


//###############//
//###  Utils  ###//
//###############//

function _get_BaseName(path:string){
	const tree = path.split("/")
	return tree[tree.length - 1]
}

function _update_RelativePath(modulePath:string, path:string){
	return path.replace(/^\.\//, `${modulePath}/`)
}
