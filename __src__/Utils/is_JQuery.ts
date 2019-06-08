
export function is_JQuery(obj:any){
	// https://stackoverflow.com/a/25004941/4955183
	return (obj && (obj instanceof jQuery || obj.constructor.prototype.jquery))
}
