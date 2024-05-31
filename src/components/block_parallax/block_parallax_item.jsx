import React from 'react'
import header from '@/components/block_parallax/styles.module.css'
import Image from 'next/image'

export const BlockParallaxItem = ({ item }) => {
	const ItemBlock = ({ item }) =>
		<div className={header.animation + ' ' + header.animation_layer + ' ' + item.className} />

	const ItemImage = ({ item }) =>
		<img
			// placeholder='blur'
			// priority={true}
			src={item.src}
			width={item.width}
			alt={''}
			className={item.className}
		/>

	const ItemText = ({ item }) =>
		<div
			className={'drop-shadow-xl text-white p-8 text-2xl sm:text-5xl font-semibold backdrop-blur-md ' + item.className}>
			{item.text}
		</div>

	const ItemList = ({ item }) =>
		<div
			className={'flex flex-col drop-shadow-xl text-white p-8 text-2xl sm:text-5xl font-semibold  backdrop-blur-md  ' + item.className}>
			{item.list.map((li, listIndex) => <div key={'listItem' + listIndex}>{li}</div>)}
		</div>


	switch (item.type) {
		case 'block':
			return <div
				className={header.animation + ' ' + header.animation_layer + ' ' + item.className} />
		case 'image':
			return <img
				// placeholder='blur'
				// priority={true}
				src={item.src.src}
				width={item.width}
				alt={''}
				className={item.className}
				// Make the image display full width
			/>
		case 'text':
			return <div
				className={'drop-shadow-xl text-white p-8 text-2xl sm:text-5xl font-semibold backdrop-blur-md ' + item.className}>
				{item.text}
			</div>
		case 'list':
			return <div
				className={'flex flex-col drop-shadow-xl text-white p-8 text-2xl sm:text-5xl font-semibold  backdrop-blur-md  ' + item.className}>
				{item.list.map((li, listIndex) => <div
					key={'listIndex_' + listIndex}>{li}</div>)}
			</div>
		default: return  null
	}
}