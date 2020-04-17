export type AnyDict = {[k: string]: any}

export type GraphResponse = (
	GraphSuccess |
	GraphError
)

export interface GraphError {
	data?: AnyDict
	errors: any[]
}

export interface GraphSuccess {
	data: AnyDict
}

export type Currencies = string[]

export interface Product {
	id: number,
	title: string,
	image_url: string,
	price: number,
	currency: string,
}

export interface ProductIndex {
	[k: number]: Product
}

export function isGraphError(val: GraphResponse): val is GraphError  {
	return !!(val as GraphError).errors
}
