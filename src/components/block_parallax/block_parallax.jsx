'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { layers, layersFooter, layersHeader, section1, section2 } from '@/components/block_parallax/data'
import Title from '@/shares/svgs/title.svg'
import TitleMobile from '@/shares/svgs/title-mobile.svg'
import Image from 'next/image'
import { useWheel } from '@/shares/hooks/useWheel'
import { useDragEvents, useSwipe, useSwipeEvents } from 'beautiful-react-hooks'
import useTouch from 'beautiful-react-hooks/useTouch'

const slides = 8

export const BlockParallax = () => {
	const parallax = useRef(null)
	const [current, setCurrent] = useState(0)
	const wheel = useWheel()

	useEffect(() => {
		handleSetCurrent(current, wheel.direction)
	}, [wheel])


	const ref = useRef(null)
	const { onSwipeEnd, onSwipeMove } = useSwipeEvents(ref)
	const [lastSwipeInfo, setLastSwipeInfo] = useState()

	onSwipeMove(setLastSwipeInfo)

	onSwipeEnd(e => {
		handleSetCurrent(current, e.direction === 'up' ? 1 : -1)
	})


	const handleSetCurrent = (currentValue, direction) => {
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
				// onTouchStart={handleTouchStart}
				// onTouchMove={handleTouchMove}
				// onTouchEnd={handleTouchEnd}
			>
				{layersHeader.map((item, index) => (
					<ParallaxLayer offset={item.offset} speed={item.speed} key={'parallaxLayer' + index}>
						<div className={'animation_layer parallax ' + `${item.id}`} id={item.id} />
					</ParallaxLayer>
				))}

				<ParallaxLayer
					speed={1}
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<div
						// onClick={() => handleChangeSlide(1)}
					>
						<div className={'hidden sm:block'}><Title /></div>
						<div className={'sm:hidden block'}><TitleMobile /></div>
					</div>
				</ParallaxLayer>

				{layers.map((layer, layerIndex) =>
					<ParallaxLayer
						key={'layer_' + layerIndex}
						offset={layer.offset}
						speed={layer.speed}
						// onClick={() => handleChangeSlide(layer.offset + 1)}
						// onScroll={handleScroll}
						style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
					>
						{
							layer.data.map((item, dataIndex) => {
								switch (item.type) {
									case 'image':
										return <Image
											placeholder='blur'
											priority={true}
											key={'layer_' + layerIndex + '&dataIndex_' + dataIndex}
											src={item.src}
											width={item.width}
											alt={''}
											className={item.className}
											// Make the image display full width
										/>
									case 'text':
										return <div
											key={'layer_' + layerIndex + '&dataIndex_' + dataIndex}
											className={'drop-shadow-xl text-white p-8 text-2xl sm:text-5xl font-semibold backdrop-blur-md ' + item.className}>
											{item.text}
										</div>
									case 'list':
										return <div
											key={'layer_' + layerIndex + '&dataIndex_' + dataIndex}
											className={'flex flex-col drop-shadow-xl text-white p-8 text-2xl sm:text-5xl font-semibold  backdrop-blur-md  ' + item.className}>
											{item.list.map((li, listIndex) => <div
												key={'layer_' + layerIndex + '&dataIndex_' + dataIndex + '&listIndex_' + listIndex}>{li}</div>)}
										</div>
								}
							})
						}
					</ParallaxLayer>,
				)}


				{/* FOOTER ------------------------------------------- */}
				<div
					// onClick={() => handleClick(0)}
				>
					{layersFooter.map((item, index) => (
						<ParallaxLayer offset={item.offset} speed={item.speed} key={'parallaxLayerFooter' + index}>
							<div className={'animation_layer parallax ' + item.id} id={item.id} />
						</ParallaxLayer>
					))}
				</div>

				<ParallaxLayer offset={9}>
					<div className={'bg-[#012840] flex flex-col flex-1 h-full '} id={'footer'}>
						FOOTER
					</div>
				</ParallaxLayer>
			</Parallax>
		</div>
	)
}
