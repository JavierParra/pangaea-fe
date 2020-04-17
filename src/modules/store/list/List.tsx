import React, { useEffect, useState }  from 'react'
import { getProducts } from '../../../service'
import { Product } from '../../../service/types'
import Item from '../product/Item'

interface ListProps {
	currency: string
}

function List({ currency }: ListProps) {
	const [ products, setProducts ] = useState<Product[]>([])

	useEffect(() => {
		getProducts(currency).then(setProducts)
		.catch(err => setProducts(() => { throw err }))
	}, [currency])

	return (
		<section className='productList'>
			{ products.map(prod => (
				<Item key={prod.id} product={prod} />
			))}
		</section>
	)
}

export default List
