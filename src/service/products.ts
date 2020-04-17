import { Product, ProductIndex } from './types'
import { callAPI } from './api'
import {generateError} from './errors'

const MAX_CURRENCIES = 5

let identityMap: {[k: string]: ProductIndex} = {}

async function getProductsIndex(currency: string): Promise<ProductIndex> {
	if(identityMap[currency]) {
		return identityMap[currency]
	}

	const response = await callAPI(`{
		products {
			id
			title
			price(currency: ${currency})
			image_url
		}
	}`)

	if (!response.data.products) {
		return Promise.reject(['Unable to retrieve products'])
	}

	const index = response.data.products?.reduce((acc, prod) => ({
		...acc,
		[prod.id]: Object.freeze({ ...prod, currency })
	}), {} as ProductIndex)

	// TODO: Implement a proper clearing strategy instead of clearing everything.
	if (Object.keys(identityMap).length > MAX_CURRENCIES) {
		identityMap = {}
	}

	identityMap[currency] = index

	return index
}
/**
 * Returns an array of all the available products.
 * The returned objects are read only.
 */
export async function getProducts(currency='USD'): Promise<Product[]> {
	const index = await getProductsIndex(currency)

	return Object.values(index)
}

/**
 * Returns the products with the specified ids.
 */
export async function findProducts(ids: number[], currency='USD'): Promise<Product[]> {
	// TODO: If not present in the identityMap get them from the api instead of
	// fetching everything.
	const index = await getProductsIndex(currency)
	const ret: Product[] = []

	while (ids.length) {
		const id = ids.pop()
		// The condition of the while loop guarantees we'll have items.
		const product = index[id!]

		if (!product) {
			return Promise.reject(generateError([{
				status: 404,
				message: `Product with id ${id} was not found`
			}]))
		}
		ret.push(product)
	}

	return ret
}
