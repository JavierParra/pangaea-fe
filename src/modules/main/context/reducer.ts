import { MainState, MainActions } from "../types"

export function reducer(state: MainState, action: MainActions) {

	switch(action.type) {
		case 'setCurrency':
			return { ...state, currency: action.payload }

		case 'showCart':
			return { ...state, cartShowing: true }

		case 'hideCart':
			return { ...state, cartShowing: false }

		case 'sumCart': {
			const payload = action.payload
			const newQty = (state.cartItems[payload.id] | 0 ) + (payload.quantity || 1)
			const cartItems = { ...state.cartItems }

			if (newQty <= 0) {
				delete cartItems[payload.id]
			} else {
				cartItems[payload.id] = newQty
			}

			return {
				...state,
				cartItems,
				cartShowing: true,
			}
		}
	}

	return { ...state }
}
