import React, { useContext, useState, useEffect, useCallback } from 'react'
import { MainContext } from '../../main/context/Provider'
import {Product} from '../../../service/types'
import {findProducts} from '../../../service'
import CartItem from './CartItem'
import {moneyFormat} from '../utils'
import CurrencySelector from '../currency/Selector'

function CartContent() {
	const { state, dispatch } = useContext(MainContext)
	const { cartItems, currency } = state
	const [products, setProducts] = useState<Product[]>([])
	const [subtotal, setSubtotal] = useState<number|undefined>(0)
	const count = Object.values(cartItems).reduce((sum, cur) => sum + cur, 0)
	const ids = Object.keys(cartItems)
	const deterministicIds = ids.sort().join(',')

	const sumItems = useCallback((id: number) => {
		return (quantity: number) => {
			dispatch({ type: 'sumCart', payload: {id, quantity} })
		}
	}, [dispatch])

	useEffect(() => {
		findProducts(ids.map(v => parseInt(v, 10)), currency).then(setProducts)
	}, [deterministicIds, currency])

	useEffect(() => {
		// Products have not updated
		if (!products.length || products[0].currency !== currency) {
			setSubtotal(undefined)
			return
		}

		const sum = products.reduce((sum, prod) => {
			return sum + prod.price * cartItems[prod.id]
		}, 0)

		setSubtotal(sum)
	}, [products, cartItems, deterministicIds, currency, count])

	if (!products.length && ids.length) {
		return <p>Loading...</p>
	}

	if (ids.length <= 0)  {
		return <p>Your cart is empty</p>
	}

	return <>
		<ul className='cartList'>
			{products.map(prod => (
				<CartItem
					key={prod.id}
					product={prod}
					quantity={cartItems[prod.id]}
					sumItems={sumItems(prod.id)}
				/>
			))}
		</ul>
		<div className='subtotal'>
			<span>Subtotal</span>
			<span className='amount'>
				{subtotal === undefined ? '...' : moneyFormat(subtotal, currency)}
			</span>
		</div>
		<button>Proceed to Checkout</button>
	</>
}

function Cart () {
	return (
		<div>
			<h2>Your Cart</h2>
			<div className='actions'>
				<CurrencySelector />
			</div>
			<CartContent />
		</div>
	)
}

export default Cart
