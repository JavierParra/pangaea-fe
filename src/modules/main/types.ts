export interface MainState {
	currency: string
	cartItems: { [key: number]: number }
	cartShowing: boolean
}

export interface MainContextValue {
	state: MainState
	dispatch: React.Dispatch<MainActions>
}

export interface MainCurrencyAction {
	type: 'setCurrency'
	payload: string
}

/**
 * Increments or decrements the quantity of this product in the cart.
 *
 * Might not have the same name.
 */
export interface MainSumCartAction {
	type: 'sumCart'
	payload: { id: number, quantity?: number }
}

export interface MainShowCartAction {
	type: 'showCart'
}

export interface MainHideCartAction {
	type: 'hideCart'
}

export interface MainCurrencyAction {
	type: 'setCurrency'
	payload: string
}

export type MainActions = (
	MainCurrencyAction |
	MainShowCartAction |
	MainHideCartAction |
	MainSumCartAction
)
