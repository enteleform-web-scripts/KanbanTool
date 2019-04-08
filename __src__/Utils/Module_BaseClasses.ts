
export abstract class Module{
	static load(...args:any)
		{throw new Error("Module not implemented.")}
}

export abstract class Feature{
	static load()
		{throw new Error("Feature not implemented.")}
}
