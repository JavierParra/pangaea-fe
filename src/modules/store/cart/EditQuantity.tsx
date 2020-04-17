import React from 'react'

interface EditQuantityProps {
	quantity: number
	onIncrement: () => void
	onDecrement: () => void
}

function EditQuantity({ quantity, onIncrement, onDecrement }: EditQuantityProps) {
	return (
		<div className='quantityEditor'>
			<button onClick={onDecrement} className='decrement'>-</button>
			<span>{quantity}</span>
			<button onClick={onIncrement} className='increment'>+</button>
		</div>
	)
}

export default EditQuantity
