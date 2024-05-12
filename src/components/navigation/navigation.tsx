'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoMain from '@/shares/svgs/logo-main.svg'
import LogoTour from '@/shares/svgs/logo-tour.svg'
import { useRecoilState } from 'recoil'
import { data } from '@/components/navigation/navigation.data'
import { navigationState } from '@/components/navigation/navigation.store'

export const Navigation = () => {
	// const [state, setState] = useRecoilState(navigationState)
	const [state, setState] = useState({ isScrolled: false })

	return (
		<header
			className={
				'flex flex-row w-full items-center justify-center fixed z-50 duration-300 ' +
				`h-[${state.isScrolled ? '80px' : '160px'}]`
			}
		>
			<nav className={'container mx-auto flex flex-row items-center justify-between gap-8 px-8 py-4 h-full'}>
				<LogoMain className={state.isScrolled ? 'h-12' : 'h-24'} />

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
				{/*			{item.label}*/}
				{/*		</Link>*/}
				{/*	))}*/}
				{/*</div>*/}

				<LogoTour className={state.isScrolled ? 'h-12' : 'h-24'} />
			</nav>
		</header>
	)
}
