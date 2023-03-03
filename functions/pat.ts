export const handler = async () => {

	let pat = process.env.GH_PAT

	if(pat === undefined) {{
		return {
			statusCode: 500,
			body: JSON.stringify({
				message: 'No PAT found. Please set them us',
			})
		}
	}}
	else{
		return {
			statusCode: 200,
			body: JSON.stringify({
				message: 'Your PAT is: ' + pat,
			})
		}
	}

	
}