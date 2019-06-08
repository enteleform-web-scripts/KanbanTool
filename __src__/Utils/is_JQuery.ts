
export function is_JQuery(obj:any){
	return (obj && (obj instanceof jQuery || obj.constructor.prototype.jquery))
}
