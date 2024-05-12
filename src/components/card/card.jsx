import React, { useEffect, useRef } from 'react'
import { useSpring, animated, to } from '@react-spring/web'
import { useGesture } from 'react-use-gesture'
import styles from './styles.module.css'

export const Card = ({ children, className }) => {
	const domTarget = useRef(null)

	const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20
	const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20

	useEffect(() => {
		const preventDefault = e => e.preventDefault()
		document.addEventListener('gesturestart', preventDefault)
		document.addEventListener('gesturechange', preventDefault)

		return () => {
			document.removeEventListener('gesturestart', preventDefault)
			document.removeEventListener('gesturechange', preventDefault)
		}
	}, [])

	useGesture(
		{
			// onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
			onMove: ({ xy: [px, py], dragging }) =>
				!dragging &&
				api({
					rotateX: calcX(py, y.get()),
					rotateY: calcY(px, x.get()),
					scale: 1.1,
				}),
			onHover: ({ hovering }) => !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
			// onWheel: ({ event, offset: [, y] }) => {
			// 	event.preventDefault()
			// 	wheelApi.set({ wheelY: y })
			// },
		},
		{ domTarget, eventOptions: { passive: false } },
	)

	const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(() => ({
		rotateX: 0,
		rotateY: 0,
		rotateZ: 0,
		scale: 1,
		zoom: 0,
		x: 0,
		y: 0,
		config: { mass: 5, tension: 350, friction: 40 },
	}))

	// const [{ wheelY }, wheelApi] = useSpring(() => ({ wheelY: 0 }))
	return (
		<div className={styles.container}>
			<animated.div
				ref={domTarget}
				className={className}
				style={{
					transform: 'perspective(600px)',
					x,
					y,
					scale: to([scale, zoom], (s, z) => s + z),
					rotateX,
					rotateY,
					rotateZ,
				}}
			>
				{children}
			</animated.div>
		</div>
	)
}
