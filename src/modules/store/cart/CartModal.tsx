import React, {useContext} from 'react'
import {MainContext} from '../../main/context/Provider'
import Cart from './Cart'

function CartModal() {
	const {state, dispatch} = useContext(MainContext)
	const { cartShowing } = state

	return (
		<div className={`modal ${cartShowing ? 'open' : ''}`}>
			<div className='shoppingCart fg'>
				{ cartShowing &&  <Cart /> }
			</div>
			<div className='bg' onClick={() => dispatch({type: 'hideCart'})}></div>
		</div>
	)
}

export default CartModal
