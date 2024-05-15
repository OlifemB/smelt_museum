'use client'

import React, { useState, Suspense } from 'react'
import LogoMain from '@/shares/svgs/logo-main.svg'
import LogoTour from '@/shares/svgs/logo-tour.svg'
import { useWindowScroll } from 'beautiful-react-hooks'


export const Navigation = () => {
	const [scrollY, setScrollY] = useState(0);
	const onWindowScroll = useWindowScroll();
	
	onWindowScroll((event) => {
		setScrollY(window.scrollY);
	});
	
	return (
		<header
			className={
				'flex flex-row w-full items-center justify-center fixed z-50 duration-300'
			}
		>
			<nav className={'container mx-auto flex flex-row items-center justify-between gap-8 px-8 py-4 h-full'}>
				<LogoMain className={scrollY ? 'h-16' : 'h-16 md-24'} />
				
				<LogoTour className={scrollY  ? 'h-16' : 'h-16 md-24'} />
				{/*<div className={'flex flex-row'}>*/}
				{/*	{data.map(item => (*/}
				{/*		<Link*/}
				{/*			key={'menuItem' + item.link}*/}
				{/*			// onClick={() => setState({ ...state, current: item.link })}*/}
				{/*			className={*/}
				{/*				'px-4 py-2 text-light hover:text-primary duration-300 uppercase font-bold drop-shadow-md'*/}
				{/*			}*/}
				{/*			href={item.link}*/}
				{/*		>*/}
				{/*	))}*/}
				{/*</div>*/}
			</nav>
		</header>
	)
}
