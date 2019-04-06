//###  Module  ###//
import {CSS_Splitter} from "./Utils/CSS_Splitter/__main__"


//#################//
//###  Exports  ###//
//#################//

export const optimization:any = {

	splitChunks: {
		cacheGroups: _build_CacheGroups_From_RegExes(),
	},

}


//###############//
//###  Utils  ###//
//###############//

function _build_CacheGroups_From_RegExes(){
	const cacheGroups = {}

	CSS_Splitter.fileRegExes.forEach((pattern, i) => {
		cacheGroups[`Group${i}`] = {
			name:    CSS_Splitter.get_ChunkName,
			test:    /CSS\.styl$/,
			chunks:  "all",
			enforce: true,
		}
	})

	return cacheGroups
}
