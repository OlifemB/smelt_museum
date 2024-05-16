'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { layers } from '@/components/block_parallax/data'
import Title from '@/shares/svgs/title.svg'
import TitleMobile from '@/shares/svgs/title-mobile.svg'
import Image from 'next/image'
import {
	useDebouncedCallback,
	useEvent,
	useGlobalEvent,
	useSwipeEvents,
	useThrottledCallback,
} from 'beautiful-react-hooks'
import { BlockParallaxItem } from '@/components/block_parallax/block_parallax_item'
import { wheelEventInitialState } from '@/shares/configs/eventInitialStates'
import { useWheel } from '@/shares/hooks/useWheel'

const slides = 8

export const BlockParallax = () => {
	const parallax = useRef(null)
	const [current, setCurrent] = useState(0)
	const ref = useRef(null)

	const onWheel = useGlobalEvent('wheel')
	const [lastWheelInfo, setLastWheelInfo] = useState(wheelEventInitialState)
	const [allowWheel, setAllowWheel] = useState(true)


	const { onSwipeEnd, onSwipeMove } = useSwipeEvents(ref)
	const [lastSwipeInfo, setLastSwipeInfo] = useState()

	onSwipeMove(setLastSwipeInfo)

	onSwipeEnd(e => {
		handleSetCurrent(current, e.direction === 'up' ? 1 : -1)
	})

	const onWheelHandler = e => {
		setLastWheelInfo({ ...lastWheelInfo, deltaY: e.deltaY })
		handleSetCurrent(current, e.deltaY > 0 ? 1 : -1)
		setAllowWheel(false)
		useDebouncedCallback(() => setAllowWheel(true))


	}

	// onWheel((e) =>
	// 	allowWheel && onWheelHandler(e),
	// )

	const wheel = useWheel()

	console.log('wheel')

	useEffect(() => {
		handleSetCurrent(current, wheel.direction)
	}, [wheel])


	const handleSetCurrent = (currentValue, direction) => {
		console.log(currentValue, direction)
		const newVal = (currentValue > 0 && currentValue < slides)
		|| (currentValue === 0 && direction > 0)
		|| (currentValue === 8 && direction < 0)
			? currentValue + direction
			: currentValue
		setCurrent(newVal)
		parallax.current.scrollTo(newVal)
	}

	return (
		<div ref={ref}>
			<Parallax
				pages={10}
				ref={parallax}
				className='animation bg h-screen !overflow-hidden'
			>
				{/* BODY ------------------------------------------- */}
				{layers.map((layer, layerIndex) =>
					<ParallaxLayer
						offset={layer.offset}
						speed={layer.speed}
						key={'parallaxLayer' + layerIndex}
						// onClick={() => handleChangeSlide(layer.offset + 1)}
						// onScroll={handleScroll}
						style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
					>
						{
							layer.data.map((item, dataIndex) =>
								<BlockParallaxItem
									item={item}
									key={'layer_' + layerIndex + '&dataIndex_' + dataIndex}
								/>,
							)
						}
					</ParallaxLayer>,
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
			</Parallax>
		</div>
	)
}



