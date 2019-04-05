
export abstract class Module{
	static load(features:{})
		{throw new Error("Module not implemented.")}
}

export abstract class Feature{
	static load()
		{throw new Error("Feature not implemented.")}
}
