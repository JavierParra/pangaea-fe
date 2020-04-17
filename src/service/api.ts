import { GraphResponse, isGraphError } from "./types"

const ENDPOINT = 'https://pangaea-interviews.now.sh/api/graphql'

export async function callAPI(query: string) {
	const response = await fetch(ENDPOINT, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ query }),
	})

	if (response.status < 200 || response.status > 299) {
		return Promise.reject({
			errors: [{
				status: response.status,
				statusText: response.statusText
			}]
		})
	}

	const ret = await response.json() as GraphResponse

	if (isGraphError(ret)) {
		return Promise.reject(ret)
	}

	return ret
}

