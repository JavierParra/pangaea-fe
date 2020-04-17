import React from 'react'

class ErrorHandler extends React.Component {
	state: { hasError: boolean }

	constructor(props) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: any) {
		// Update state so the next render will show the fallback UI.
		console.error(error)
		return { hasError: true }
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className='error'>
					<h1>Something went terribly wrong</h1>
					<strong>:(</strong>
				</div>
			)
		}

		return this.props.children
	}
}

export default ErrorHandler
