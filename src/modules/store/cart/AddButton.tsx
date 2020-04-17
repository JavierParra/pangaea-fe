import React, {useContext} from 'react'
import { Product } from '../../../service/types'
import {MainContext} from '../../main/context/Provider'

export interface AddToCartButtonProps {
	product: Product
}

function AddToCartButton({ product }: AddToCartButtonProps) {
	const { dispatch } = useContext(MainContext)
	function addToCart() {
		dispatch({ type: "sumCart", payload: {id: product.id, quantity: 1} })
	}

	return (
		<button className='cartAdd' onClick={addToCart}>add to cart</button>
	)
}


export default AddToCartButton
