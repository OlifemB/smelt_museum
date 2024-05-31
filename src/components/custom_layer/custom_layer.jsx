import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'
import { animated } from '@react-spring/web'
import { BlockParallaxItem } from '@/components/block_parallax/block_parallax_item'

export const ParallaxCustomLayer = ({ layer, index, spring }) => {
	return (
		<ParallaxLayer
			offset={layer.offset}
			speed={layer.speed}
			key={'parallaxLayer' + index}
		>
			{
				layer.data.map((item, dataIndex) =>
					<div
						className={`w-screen h-screen flex flex-col  items-center justify-center ${item.type !== 'block' && 'container mx-auto'}`}>
						<BlockParallaxItem
							spring={spring}
							item={item}
							key={'parallaxLayer_' + index + '&dataIndex_' + dataIndex}
						/>
					</div>,
				)
			}
		</ParallaxLayer>
	)
}