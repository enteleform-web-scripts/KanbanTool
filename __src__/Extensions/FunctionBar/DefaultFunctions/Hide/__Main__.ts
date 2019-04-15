//###  Module  ###//
import {get_EmptyContainers} from "./get_EmptyContainers"
import {TaskContainer      } from "../Show/TaskContainer"
import {get_Rows           } from "../Show/get_Rows"
import {get_Columns        } from "../Show/get_Columns"
import {Glob               } from "~/Utils/Glob"
import {Show               } from "../Show/__Main__";

//###  NPM  ###//
const $:any = require("jquery")


//#################//
//###  Exports  ###//
//#################//

export namespace Hide{

	export function allRows   (){Show.rows   ({exclude:["**\\*"]})}
	export function allColumns(){Show.columns({exclude:["**\\*"]})}

	export function emptyColumns(){
		const columns = get_Columns()
		const rows    = get_Rows()
		const {emptyColumns, emptyRows} = get_EmptyContainers()
	}


}


//###############//
//###  Utils  ###//
//###############//
