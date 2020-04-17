import React from 'react'
import { Product } from '../../../service/types'
import EditQuantity from './EditQuantity'
import {moneyFormat} from '../utils'

interface CartItemProps {
	product: Product
	quantity: number
	sumItems: (val: number) => void
}

function CartItem({ product, quantity, sumItems }: CartItemProps) {
	return (
		<li className='cartItem'>
			<p>{product.title}</p>
			<EditQuantity
				quantity={quantity}
				onIncrement={() => sumItems(1)}
				onDecrement={() => sumItems(-1)}
			/>
			<div className='thumbnail'>
				<img src={product.image_url} alt='' />
			</div>
			<span className='total'>
				{moneyFormat(product.price * quantity, product.currency)}
			</span>
		</li>
	)
}

export default CartItem
