'use client'

import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { layersFooter, layersHeader, section1, section2 } from '@/components/block_parallax/data'
import Title from '@/shares/svgs/title.svg'
import { Card } from '@/components/card/card'
import Image from 'next/image'

const classes = 'container grid grid-cols-2 mx-auto flex flex-row gap-8 items-center justify-center h-full'

export const BlockParallax = () => {
	const parallax = useRef(null)

	return (
		<Parallax ref={parallax} pages={10} style={{ top: '200', left: '0' }} className="animation">
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
				<Title onClick={() => parallax.current.scrollTo(1)} />
			</ParallaxLayer>

			{/* SECTION 1 ------------------------------------------- */}
			<ParallaxLayer
				sticky={{ start: 1, end: 3.5 }}
				style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
				onClick={() => parallax.current.scrollTo(3)}
			>
				<div className={classes}>
					<Card className={'px-6 py-4 rounded-lg text-white text-2xl font-bold drop-shadow-md'}>
						<div>Добро пожаловать в единственный в мире интерактивный МУЗЕЙ КОРЮШКИ!</div>
						<br />
						<div>
							<span>В Музее вы узнаете:</span>
							<ul className={''}>
								<li> - О родственниках корюшки</li>
								<li> - О её друзьях и недругах</li>
								<li> - О том, что она любит и чему радуется</li>
							</ul>
						</div>
						<br />
						<div>
							В пространстве музея вас встретят уникальные экспонаты, с которыми вы можете
							взаимодействовать. В этом вам помогут аудио сопровождение и видео подсказки.
						</div>
					</Card>
				</div>
			</ParallaxLayer>

			{section1.map(item => (
				<ParallaxLayer speed={item.speed} offset={item.offset} sticky={item.sticky} key={item.id}>
					<div className={classes}>
						<div />
						<Card className={'flex items-center justify-center'}>
							<Image src={item.src} alt={''} width={600} />
						</Card>
					</div>
				</ParallaxLayer>
			))}

			{/* SECTION 2 ------------------------------------------- */}
			<ParallaxLayer
				sticky={{ start: 4.5, end: 8 }}
				style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
			>
				<div className={classes}>
					<Card className={'px-6 py-4 rounded-lg text-white text-2xl font-bold drop-shadow-md'}>
						<div>
							Вы также сможете попасть в стаю корюшек и попытаться вместе с ними ускользнуть из рыбацких
							сетей и перехитрить рыбаков.
						</div>
						<br />
						<div>
							Потом вы посмотрите видео об одежде рыбаков с древних времён и до настоящего времени.
							Сможете сами составить из разных элементов новый костюм рыбака и примерить на себя рыбацкий
							комбинезон и огромные сапоги.
						</div>
						<br />
						<div>
							В музее также представлена аутентичная лодка с парусом. С помощью видео инструкции вы
							самостоятельно можете установить парус и отправиться на лодке в виртуальное путешествие.
						</div>
						<br />
						<div>
							Вы узнаете о подводной жизни в реке Волхов, заглянув в Волшебную бочку. И, напоследок
							почувствуете себя художником - машинистом и создадите своё уникальное творческое
							произведение.
						</div>
					</Card>

					<div />
				</div>
			</ParallaxLayer>

			{section2.map(item => (
				<ParallaxLayer speed={item.speed} offset={item.offset} sticky={item.sticky} key={item.id}>
					<div className={classes}>
						<div />
						<Card className={'flex items-center justify-center'}>
							<Image src={item.src} alt={''} width={400} />
						</Card>
					</div>
				</ParallaxLayer>
			))}

			{/*/!* SECTION 3 ------------------------------------------- *!/*/}
			{/*<ParallaxLayer offset={5.5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>*/}
			{/*	<div className={classes}>*/}
			{/*		<Card className={'px-6 py-4 rounded-lg text-white text-2xl font-bold drop-shadow-md'}></Card>*/}

			{/*		<Card className={'flex items-center justify-center'}>*/}
			{/*			<Image src={S2P2} alt={''} width={400} />*/}
			{/*		</Card>*/}
			{/*	</div>*/}
			{/*</ParallaxLayer>*/}

			{/*/!* SECTION 4 ------------------------------------------- *!/*/}
			{/*<ParallaxLayer offset={6.5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>*/}
			{/*	<div className={classes}>*/}
			{/*		<Card className={'px-6 py-4 rounded-lg text-white text-2xl font-bold drop-shadow-md'}>*/}
			{/*			В музее также представлена аутентичная лодка с парусом. С помощью видео инструкции вы*/}
			{/*			самостоятельно можете установить парус и отправиться на лодке в виртуальное путешествие.*/}
			{/*		</Card>*/}

			{/*		<Card className={'flex items-center justify-center'}>*/}
			{/*			<Image src={S2P3} alt={''} width={400} />*/}
			{/*		</Card>*/}
			{/*	</div>*/}
			{/*</ParallaxLayer>*/}

			{/*/!* SECTION 5 ------------------------------------------- *!/*/}
			{/*<ParallaxLayer offset={7.5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>*/}
			{/*	<div className={classes}>*/}
			{/*		<Card className={'px-6 py-4 rounded-lg text-white text-2xl font-bold drop-shadow-md'}>*/}
			{/*			Вы узнаете о подводной жизни в реке Волхов, заглянув в Волшебную бочку. И, напоследок*/}
			{/*			почувствуете себя художником - машинистом и создадите своё уникальное творческое произведение.*/}
			{/*		</Card>*/}

			{/*		<Card className={'flex items-center justify-center'}>*/}
			{/*			<Image src={S2P4} alt={''} width={400} />*/}
			{/*		</Card>*/}
			{/*	</div>*/}
			{/*</ParallaxLayer>*/}

			{/* FOOTER ------------------------------------------- */}
			{layersFooter.map((item, index) => (
				<ParallaxLayer offset={item.offset} speed={item.speed} key={'parallaxLayerFooter' + index}>
					<div className={'animation_layer parallax ' + item.id} id={item.id} />
				</ParallaxLayer>
			))}

			<ParallaxLayer offset={9}>
				<div className={'bg-[#012840] flex flex-col flex-1 h-full'} id={'footer'}>
					FOOTER
				</div>
			</ParallaxLayer>
		</Parallax>
	)
}
