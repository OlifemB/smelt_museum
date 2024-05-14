import React, { useEffect, useState } from 'react'

export const useWheel = () => {
	const [state, setState] = useState({ direction: 0 })

	useEffect(() => {
		const handler = (e) => {
			setState(prevState => ({
				direction: e.deltaY > prevState.direction ? 1 : -1,
				}),
			)
		}

		document.addEventListener('wheel', handler, { passive: false })

	}, [])

	return state
}