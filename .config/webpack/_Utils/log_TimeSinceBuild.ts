
export function get_log_TimeSinceBuild_Callback(){
	const buildTime = new Date()

	return () => {
		return `console.log("!!!  BUILT @ ${buildTime}  !!!")`
	}
}
