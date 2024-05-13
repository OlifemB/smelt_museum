'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { layers, layersFooter, layersHeader, section1, section2 } from '@/components/block_parallax/data'
import Title from '@/shares/svgs/title.svg'
import TitleMobile from '@/shares/svgs/title-mobile.svg'
import Image from 'next/image'

const classes = {
	layer: 'container grid grid-cols-2 mx-auto flex flex-row gap-8 items-center justify-center h-full relative',
	text: 'px-6 py-4 rounded-lg text-white text-2xl font-bold drop-shadow-md',
}

export const BlockParallax = () => {
	const parallax = useRef(null)
	const [current, setCurrent] = useState(0)

	useEffect(() => {
		console.log(parallax.current.offset)
	}, [current])

	const onScroll = (i) => {
		setCurrent(i)
		parallax.current.scrollTo(i)
	}

	return (
		<Parallax
			ref={parallax}
			pages={10}
			className='animation bg h-screen !overflow-hidden'
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
				<div onClick={() => onScroll(1)}>
					<div className={'hidden sm:block'}><Title /></div>
					<div className={'sm:hidden block'}><TitleMobile /></div>
				</div>
			</ParallaxLayer>

			{layers.map((layer, layerIndex) =>
				<ParallaxLayer
					key={'layer_' + layerIndex}
					offset={layer.offset}
					speed={layer.speed}
					onClick={() => onScroll(layer.offset + 1)}
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
										className={'drop-shadow-xl text-white p-8 text-xl sm:text-5xl font-semibold backdrop-blur-md ' + item.className}>
										{item.text}
									</div>
								case 'list':
									return <div
										key={'layer_' + layerIndex + '&dataIndex_' + dataIndex}
										className={'flex flex-col drop-shadow-xl text-white p-8 text-xl sm:text-5xl font-semibold  backdrop-blur-md  ' + item.className}>
										{item.list.map((li, listIndex) => <div
											key={'layer_' + layerIndex + '&dataIndex_' + dataIndex + '&listIndex_' + listIndex}>{li}</div>)}
									</div>
							}
						})
					}
				</ParallaxLayer>,
			)}


			{/* FOOTER ------------------------------------------- */}
			<div onClick={() => onScroll(0)}>
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
	)
}
