import React, {useContext} from 'react'
import cart from '../../../img/cart.png'
import {MainContext} from '../../main/context/Provider'

function CartIcon() {
	const {state: { cartItems }, dispatch} = useContext(MainContext)
	const count = Object.values(cartItems).reduce((sum, cur) => sum + cur, 0)

	return (
		<button className='cartIcon' onClick={() => dispatch({ type: 'showCart' })}>
			<img src={cart} alt='your cart' />
			<span className='badge'>{count}</span>
		</button>
	)
}

export default CartIcon
