import fetch from 'node-fetch'

export const handler = async () => {
	let result = await fetch('https://api.github.com/users/octocat')

	return {
		statusCode: 200,
		body: JSON.stringify(result)
	}
}