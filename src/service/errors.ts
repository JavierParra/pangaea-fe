import { GraphError } from "./types"

export function generateError(errors: any[]): GraphError {
	return { errors: errors.map(e => {
		switch(true) {
			case typeof e === 'string':
				return { message: e }
		}
		return e
	})}
}
