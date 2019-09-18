
export function is_Browser()
	{return Boolean((<any> process).browser)}

export function is_Node()
	{return !is_Browser()}
