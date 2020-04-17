import React from 'react'
import { Product } from '../../../service/types'
import {moneyFormat} from '../utils'
import AddToCartButton from '../cart/AddButton'

interface ItemProps {
	product: Product
}

function Item({ product }: ItemProps) {
	return (
		<article className='productItem'>
			<div className='thumbnail'>
				<img src={product.image_url} alt='' />
			</div>
			<p className='name'>{product.title}</p>
			<p>
				From: <span className='price'>{moneyFormat(product.price, product.currency)}</span>
			</p>
			<AddToCartButton product={product} />
		</article>
	)
}

export default Item

