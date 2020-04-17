import React, { useState, useEffect, useContext }  from 'react'
import { getCurrencies } from '../../../service'
import { MainContext } from '../../main/context/Provider'
import {Currencies} from '../../../service/types'

function CurrencySelector() {
	const [currencies, setCurrencies] = useState<Currencies>([])
	const { state: { currency }, dispatch } = useContext(MainContext)

	useEffect(() => {
		getCurrencies().then(val => setCurrencies(val))
			.catch(err => setCurrencies(() => { throw err }))
	}, [])

	function handleChange(ev) {
		dispatch({ type: "setCurrency", payload: ev.target.value })
	}

	return (
		<select onChange={handleChange} value={currency}>
			{currencies.map(cur => (
				<option key={cur} value={cur}>
					{cur}
				</option>
			))}
		</select>
	)
}

export default CurrencySelector
