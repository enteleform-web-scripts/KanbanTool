//###  Module  ###//
import {CSS_Splitter} from "./Utils/CSS_Splitter/__main__"


//###############//
//###  Setup  ###//
//###############//

const cacheGroups = {vendors: false}

CSS_Splitter.fileRegExes.forEach((pattern, i) => {
	cacheGroups[`Group${i}`] = {
		name:    CSS_Splitter.get_ChunkName,
		test:    /CSS\.styl$/,
		chunks:  "all",
		enforce: true,
	}
})


//#################//
//###  Exports  ###//
//#################//

export const optimization:any = {

	splitChunks: {cacheGroups},

}
