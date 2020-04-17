import React from 'react'
import './scss/app.scss'
import MainProvider from './modules/main/context/Provider'
import PageList from './modules/store/pages/PageList'
import ErrorHandler from './modules/main/errorHandler'

function App() {
	return (
		<MainProvider>
			<ErrorHandler>
				{/* Imaginary routing */}
				<PageList />
			</ErrorHandler>
		</MainProvider>
	);
}

export default App
