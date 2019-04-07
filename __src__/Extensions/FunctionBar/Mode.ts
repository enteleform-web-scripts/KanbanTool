
export class Mode{
	name:    string
	rows:    string[]
	columns: string[]

	constructor(
		{name,        rows,          columns         }:
		{name:string, rows:string[], columns:string[]}
	){
		this.name    = name
		this.rows    = rows
		this.columns = columns
	}
}


