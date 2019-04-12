
//#################//
//###  Exports  ###//
//#################//

export function get_log_TimeSinceBuild_Callback(){
	const buildTime = new Date().getTime()

	return () => (`
		${_get_ElapsedTime       .toString()}
		${_get_TimeString_Segment.toString()}

		const elapsedTime  = _get_ElapsedTime(${buildTime})
		const buildMessage = \`<<<  Built  {  \${elapsedTime}  }  Ago >>>\`
		const divider      = "".padStart((buildMessage.length - 6), "-")
		console.log(""
			+ \`<<<\${divider}>>>\`
			+ buildMessage
			+ \`<<<\${divider}>>>\`
		)
	`)
}


//###############//
//###  Utils  ###//
//###############//

function _get_ElapsedTime(startTime:number){
	const elapsed_MS = (new Date().getTime() - startTime)

	const days         = Math.floor(((elapsed_MS / 1000) / 86400)     )
	const hours        = Math.floor(((elapsed_MS / 1000) / 3600 ) % 24)
	const minutes      = Math.floor(((elapsed_MS / 1000) / 60   ) % 60)
	const seconds      = Math.floor((elapsed_MS / 1000) % 60          )
	const milliseconds = Math.floor(elapsed_MS % 1000                 )

	const elapsedTime = (""
		+ _get_TimeString_Segment("day",    days,    [                    ], false)
		+ _get_TimeString_Segment("hour",   hours,   [days                ], false)
		+ _get_TimeString_Segment("minute", minutes, [days, hours         ], false)
		+ _get_TimeString_Segment("second", seconds, [days, hours, minutes], true )
	)
	return elapsedTime
}

function _get_TimeString_Segment(title:string, value:number, parents:number[], mandatory:boolean){
	const parentValues_Exist = (
		(parents.length > 0)
		&& (Math.max(...parents) > 0)
	)

	if(mandatory || value || parentValues_Exist){
		const prefix =
			(parentValues_Exist)
			? ",  "
			: ""

		title =
			(value == 1)
			? title
			: `${title}s`

		return `${prefix}${value}:${title}`
	}
	else
		{return ""}
}
