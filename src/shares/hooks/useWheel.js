import React, { useEffect, useState } from 'react'
import { useTimeout } from 'beautiful-react-hooks'

export const useWheel = () => {
	const [state, setState] = useState({ direction: 0 })
	const timeout = useTimeout()

	useEffect(() => {
		const handler = (e) => {
			console.log(e)
			setState(prevState => ({
				direction: e.deltaY > prevState.direction ? 1 : -1,
				}),
			)
		}

		document.addEventListener('wheel', handler, { passive: false })
		return setState({direction: 0})

	}, [])

	return state
}