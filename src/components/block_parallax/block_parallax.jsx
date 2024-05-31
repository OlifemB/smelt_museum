'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { layersData } from '@/components/block_parallax/data'
import Title from '@/shares/svgs/title.svg'
import TitleMobile from '@/shares/svgs/title-mobile.svg'
import { useGesture } from '@use-gesture/react'
import { useSpring } from '@react-spring/web'
import { ParallaxCustomLayer } from '@/components/custom_layer/custom_layer'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const pages = layersData
const length = 10

export const BlockParallax = () => {
	const isMobile = false
	const parallaxRef = useRef(null)
	const [current, setCurrent] = useState(0)

	const bind = useGesture({
		onWheelEnd: ({ direction }) => {
			handleSetCurrent(current, direction[1])
		},
		onDragEnd: e => {
			if (e.last) handleSetCurrent(current, e.direction[1] * -1)
		},
	})

	const handleSetCurrent = (currentValue, direction) => {
		const newVal =
			(currentValue > 0 && currentValue < length - 1) ||
			(currentValue === 0 && direction > 0) ||
			(currentValue === length - 1 && direction < 0)
				? currentValue + direction
				: currentValue
		setCurrent(newVal)
	}

	const [spring, setSpring] = useSpring(() => ({
		xy: [0, 0],
		config: { mass: 10, tension: 550, friction: 140 },
	}))

	useEffect(() => {
		parallaxRef.current.scrollTo(current)
	}, [current])

	useEffect(() => {
		const preventDefault = e => e.preventDefault()
		document.addEventListener('gesturestart', preventDefault)
		document.addEventListener('gesturechange', preventDefault)

		return () => {
			document.removeEventListener('gesturestart', preventDefault)
			document.removeEventListener('gesturechange', preventDefault)
		}
	}, [])

	const handleMouseMove = ({ clientX: x, clientY: y }) => {
		setSpring({ xy: calc(x, y) })
	}

	return (
		<div {...bind()} className={'select-none'}>
			<Parallax
				onMouseMove={handleMouseMove}
				pages={length}
				ref={parallaxRef}
				config={{ mass: 1, tension: 280, friction: 60 }}
				className='relative  h-screen'
				style={{
					overflowX: 'hidden',
					overflowY: isMobile ? 'scroll' : 'hidden',
				}}
			>
				<div className={'h-full bg'}>
				{/* BODY ------------------------------------------- */}
				{pages.map((layer, index) => (
						<ParallaxCustomLayer
							key={'parallaxLayer' + index}
							layer={layer}
							index={index}
							spring={spring}
						/>
					),
				)}

				{/* TITLE ------------------------------------------- */}
				<ParallaxLayer
					speed={1}
					className={'flex flex-col items-center justify-center text-center'}
				>
					<Title className={'hidden lg:block'} />
					<TitleMobile className={'w-[90%] lg:hidden block'} />
				</ParallaxLayer>

				{/* FOOTER  ------------------------------------------- */}
				<ParallaxLayer offset={9}>
					<div className={'bg-[#012840] flex flex-col flex-1 h-full '} id={'footer'}>
						FOOTER
					</div>
				</ParallaxLayer>
				</div>
			</Parallax>
		</div>
	)
}



