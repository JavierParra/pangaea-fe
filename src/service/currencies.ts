import { Currencies } from './types'
import { callAPI } from './api'
import { generateError } from './errors'

/**
 * Returns an array of all the availablel currencies.
 */
let currencyCache: Currencies = []

export async function getCurrencies(): Promise<Currencies> {
	if (currencyCache.length) {
		return [ ...currencyCache ]
	}

	const response = await callAPI(`{
		__type(name: "Currency") {
			enumValues {
				name
			}
		}
	}`)

	const currencies = response.data.__type?.enumValues as {name: string}[]

	if (!currencies) {
		return Promise.reject(generateError(['Unable to retrieve currencies']))
	}

	currencyCache = currencies.reduce((acc, val) => [...acc, val.name], [] as Currencies)

	return [...currencyCache]
}
