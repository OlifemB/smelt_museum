import React from 'react'
import { animated } from '@react-spring/web'
import header from '@/components/block_parallax/styles.module.css'
import Image from 'next/image'

const AnimatedBlock = ({ children }) =>
	<animated.div
		className={'flex flex-col w-[90%]  left-0 absolute gap-4'}
		style={{
			duration: 1000,
			transform: spring.xy.to((x, y) => `translate3d(${x / 15}px,${y / 15}px,0)`),
		}}
	>
		{children}
	</animated.div>


export const BlockParallaxItem = ({ item, spring }) => {
	const ItemBlock = () =>
		<div className={header.animation + ' ' + header.animation_layer + ' ' + item.className} />

	const ItemImage = () =>
		<img
			// placeholder='blur'
			// priority={true}
			src={item.src.src}
			alt={''}
			className={item.className}
			// Make the image display full width
		/>

	const ItemText = () =>
		<div
			className={'drop-shadow-xl text-white p-8 text-2xl sm:text-5xl font-semibold backdrop-blur-md ' + item.className}>
			{item.text}
		</div>

	const ItemList = () =>
		<div
			className={'flex flex-col drop-shadow-xl text-white p-8 text-2xl sm:text-5xl font-semibold  backdrop-blur-md  ' + item.className}>
			{item.list.map((li, listIndex) => <div
				key={'listIndex_' + listIndex}>{li}</div>)}
		</div>

	switch (item.type) {
		case 'block':
			return <ItemBlock />
		case 'image':
			return <ItemImage />

		case 'text':
			return <ItemText />
		case 'list':
			return <ItemList />
		default:
			return null
	}
}