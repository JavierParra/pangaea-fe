import React, {createContext, useReducer} from "react"
import {MainState, MainContextValue} from "../types"
import {reducer} from "./reducer"

const initialState: MainState = {
	currency: 'USD',
	cartItems: {},
	cartShowing: false,
}

export const MainContext = createContext<MainContextValue>({
	state: initialState,
	dispatch: () => { throw new Error('MainContext not initialized') },
})


interface MainProviderProps {
	children: React.ReactElement
}

export default function MainProvider ({ children }: MainProviderProps) {
	const [state, dispatch] = useReducer(reducer, initialState)
	const value = { state, dispatch }

	return (
		<MainContext.Provider value={value}>
		{children}
		</MainContext.Provider>
	)
}
