import S1P1 from '@/shares/images/parallax/photo_2024-05-12_13-15-12.jpg'
import S1P2 from '@/shares/images/parallax/photo_2024-05-12_13-15-13.jpg'
import S1P3 from '@/shares/images/parallax/photo_2024-05-12_13-15-14.jpg'
import S2P1 from '@/shares/images/parallax/photo_2024-05-12_13-48-52.jpg'
import S2P2 from '@/shares/images/parallax/photo_2024-05-12_13-15-15.jpg'
import S2P3 from '@/shares/images/parallax/photo_2024-05-12_13-59-15.jpg'
import S2P4 from '@/shares/images/parallax/photo_2024-05-12_13-15-19.jpg'
import React from 'react'

export const layersHeader = [
	{
		id: 'lh-1',
		offset: 0,
		speed: 0.1,
	},
	{
		id: 'lh-2',
		offset: 0,
		speed: 0.0,
	},
	{
		id: 'lh-3',
		offset: 0,
		speed: -0.1,
	},
	{
		id: 'lh-4',
		offset: 0,
		speed: -0.15,
	},
	{
		id: 'lh-5',
		offset: 0,
		speed: -0.2,
	},
	{
		id: 'lh-sky',
		offset: 0,
		speed: -0.5,
	},
].reverse()

export const layersFooter = [
	{
		id: 'lf-1',
		offset: 8,
		speed: 0,
	},
	{
		id: 'lf-2',
		offset: 8.05,
		speed: 0.02,
	},
	{
		id: 'lf-3',
		offset: 8.05,
		speed: 0.03,
	},
	{
		id: 'lf-4',
		offset: 8,
		speed: 0.04,
	},
	{
		id: 'lf-5',
		offset: 8,
		speed: 0.08,
	},
].reverse()

export const section1 = [
	{
		src: S1P1,
		id: 'S1P1',
		offset: 6,
		speed: 0,
		sticky: { start: 1, end: 1.5 },
	},
	{
		src: S1P2,
		id: 'S1P2',
		offset: 6,
		speed: 0,
		sticky: { start: 2, end: 2.5 },
	},
	{
		src: S1P3,
		id: 'S1P3',
		offset: 6,
		speed: 0,
		sticky: { start: 3, end: 3.5 },
	},
]

export const section2 = [
	{
		src: S2P1,
		id: 'S2P1',
		offset: 6,
		speed: 0,
		sticky: { start: 4.4, end: 5 },
	},
	{
		src: S2P2,
		id: 'S2P2',
		offset: 6,
		speed: 0,
		sticky: { start: 5.5, end: 6 },
	},
	{
		src: S2P3,
		id: 'S2P3',
		offset: 6,
		speed: 0,
		sticky: { start: 6.5, end: 7 },
	},
	{
		src: S2P4,
		id: 'S2P4,',
		offset: 6,
		speed: 0,
		sticky: { start: 7.5, end: 8 },
	},
]

export const layers = [
	{
		offset: 1,
		speed: 0.7,
		data: [{
			type: 'image',
			src: S1P1,
			width: 800,
			className: 'w-[90%] -translate-y-[40px] sm:w-[80%] sm:translate-x-[40px]',
		}],
	},
	{
		offset: 1,
		speed: 1.5,
		data: [{
			type: 'text',
			text: 'Добро пожаловать в единственный в мире интерактивный МУЗЕЙ КОРЮШКИ!',
			className: 'w-[90%] translate-y-[180px] sm:w-[700px] sm:translate-y-[220px] sm:-translate-x-[200px]',
		}],
	},
	// -----------------------------------------------------------------------
	{
		offset: 2,
		speed: 0.7,
		data: [
			{
				type: 'image',
				src: S1P2,
				className: 'w-[95%] sm:w-[70%] sm:-translate-x-[40px] ',
				width: 800,
			},
		],
	},
	{
		offset: 2,
		speed: 1.5,
		data: [{
			type: 'list',
			list: ['В Музее вы узнаете:', '* о родственниках корюшки', '* О её друзьях и недругах', '* О том, что она любит и чему радуется.'],
			className: 'w-[300px] w-[95%] translate-y-[200px] sm:translate-y-[280px] sm:translate-x-[220px] sm:w-[700px] ',
		}],
	},

	// -----------------------------------------------------------------------
	{
		offset: 3,
		speed: 0.5,
		data: [{
			type: 'image',
			src: S1P3,
			width: 800,
			className: 'w-[90%] -translate-x-[5px] sm:w-[70%] sm:-translate-y-[40px] sm:translate-x-[100px]',
		}],
	},
	{
		offset: 3,
		speed: 2,
		data: [{
			type: 'text',
			text: 'В пространстве музея вас встретят уникальные экспонаты, с которыми вы можете взаимодействовать. В этом вам помогут аудиогид и видео подсказки.',
			className: 'w-[90%] translate-y-[200px] translate-x-[10px] sm:w-[800px] sm:translate-y-[240px] sm:-translate-x-[200px]',
		}],
	},

	// -----------------------------------------------------------------------
	{
		offset: 4,
		speed: 0.7,
		data: [{
			type: 'image',
			src: S2P1,
			width: 800,
			className: 'w-[90%] translate-x-[120px] translate-y-[40px] sm:w-[520px] sm:translate-x-[200px]',
		}],
	},
	{
		offset: 4,
		speed: 2,
		data: [{
			type: 'text',
			text: 'Вы также сможете попасть в стаю корюшек и попытаться вместе с ними ускользнуть из рыбацких сетей и перехитрить рыбаков.',
			className: 'w-[70%] -translate-x-[50px] translate-y-[200px] sm:w-[500px] sm:-translate-x-[200px] sm:translate-y-[200px] ',
		}],
	},
	// -----------------------------------------------------------------------
	{
		offset: 5,
		speed: 0.7,
		data: [
			{
				type: 'image',
				src: S2P2,
				className: 'w-[100%] -translate-y-[100px] translate-x-[-50px] sm:w-[70%] sm:-translate-x-[100px] sm:translate-y-[0rem]',
				width: 800,
			},
		],
	},
	{
		offset: 5,
		speed: 1.5,
		data: [{
			type: 'text',
			text: 'Потом вы посмотрите видео об одежде рыбаков с древних времён и до настоящего времени. Сможете сами составить из разных элементов новый костюм рыбака и примерить на себя рыбацкий комбинезон и огромные сапоги.',
			className: 'w-[95%] translate-x-[5px] translate-y-[200px] sm:w-[800px] sm:translate-y-[300px] sm:translate-x-[200px]  ',
		}],
	},

	// -----------------------------------------------------------------------
	{
		offset: 6,
		speed: 0.5,
		data: [{
			type: 'image',
			src: S2P3,
			width: 800,
			className: 'w-[120%] translate-y-[-50px] translate-x-[140px] sm:w-[50%] sm:translate-y-[40px] sm:translate-x-[200px]',
		}],
	},
	{
		offset: 6,
		speed: 2,
		data: [{
			type: 'text',
			text: 'В музее также представлена аутентичная лодка с парусом. С помощью видео инструкции вы самостоятельно можете установить парус и отправиться на лодке в виртуальное путешествие.',
			className: 'w-[60%] translate-y-[180px] translate-x-[-50px] sm:w-[400px] sm:translate-y-[120px] sm:translate-x-[-280px]',
		}],
	},
	// -----------------------------------------------------------------------
	{
		offset: 7,
		speed: 0.7,
		data: [
			{
				type: 'image',
				src: S2P4,
				className: 'w-[90%] translate-y-[-160px] sm:w-[70%] sm:-translate-x-[100px] sm:translate-y-[0rem]',
				width: 800,
			},
		],
	},
	{
		offset: 7,
		speed: 1.5,
		data: [{
			type: 'text',
			text: 'Вы узнаете о подводной жизни в реке Волхов, заглянув в Волшебную бочку. И, напоследок почувствуете себя художником - машинистом и создадите своё уникальное творческое произведение.',
			className: 'w-[95%] translate-y-[160px] sm:translate-y-[360px] sm:translate-x-[200px] sm:w-[800px] ',
		}],
	},
]
