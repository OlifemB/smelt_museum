import S1P1 from '@/shares/images/photos/p1.jpg'
import S1P2 from '@/shares/images/photos/p2.jpg'
import S1P3 from '@/shares/images/photos/p3.jpg'
import S2P1 from '@/shares/images/photos/p4.jpg'
import S2P2 from '@/shares/images/photos/p5.jpg'
import S2P3 from '@/shares/images/photos/p6.jpg'
import S2P4 from '@/shares/images/photos/p7.jpg'
import Map from '@/shares/images/map.png'
import styles from './styles.module.css'

export const layersHeader = [
	{
		offset: 0,
		speed: 0.1,
		data: [{
			type: 'block',
			className: styles.lh_1 + ' translate-y-[100px] lg:translate-y-[300px]',
		}],
	}, {
		offset: 0,
		speed: 0.0,
		data: [{
			type: 'block',
			className: styles.lh_2 + ' lg:translate-y-[200px]',
		}],
	}, {
		offset: 0,
		speed: -0.1,
		data: [{
			type: 'block',
			className: styles.lh_3 + ' translate-y-[30px] lg:translate-y-[60px]',
		}],
	}, {
		offset: 0,
		speed: -0.15,
		data: [{
			type: 'block',
			className: styles.lh_4 + ' translate-y-[-100px] lg:translate-y-[-100px]',
		}],
	}, {
		offset: 0,
		speed: -0.2,
		data: [{
			type: 'block',
			className: styles.lh_5 + ' translate-y-[-140px] lg:translate-y-[-180px]',
		}],
	}, {
		offset: 0,
		speed: -0.5,
		data: [{
			type: 'block',
			className: styles.lh_sky + ' ',
		}],
	}].reverse()

export const layersBody = [
	{
		offset: 1,
		speed: 0.7,
		data: [{
			type: 'image',
			src: S1P1,
			width: 800,
			className: 'w-[1200px] -translate-y-[40px] lg:w-[80%] lg:translate-x-[40px]',
		}],
	},
	{
		offset: 1,
		speed: 1.5,
		data: [{
			type: 'text',
			text: 'Добро пожаловать в единственный в мире интерактивный МУЗЕЙ КОРЮШКИ!',
			className: 'lg:w-[700px] translate-y-[180px] lg:translate-y-[220px]  lg:translate-y-[220px] lg:translate-x-[220px] ',
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
				className: 'w-[95%] translate-y-[-100px] lg:w-[70%] lg:-translate-x-[40px] ',
				width: 800,
			},
		],
	},
	{
		offset: 2,
		speed: 1.5,
		data: [{
			type: 'list',
			list: ['В Музее вы узнаете:', '- О родственниках корюшки', '- О её друзьях и недругах', '- О том, что она любит и чему радуется.'],
			className: 'w-[300px] w-[95%] translate-y-[200px] lg:translate-y-[280px] lg:translate-x-[220px] lg:w-[700px] ',
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
			className: 'w-[90%] -translate-x-[5px] lg:w-[70%] lg:-translate-y-[40px] lg:translate-x-[100px]',
		}],
	},
	{
		offset: 3,
		speed: 2,
		data: [{
			type: 'text',
			text: 'В пространстве музея вас встретят уникальные экспонаты, с которыми вы можете взаимодействовать. В этом вам помогут аудиогид и видео подсказки.',
			className: 'w-[90%] translate-y-[200px] translate-x-[10px] lg:w-[800px] lg:translate-y-[240px] lg:-translate-x-[100px]',
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
			className: 'w-[90%] translate-x-[120px] translate-y-[40px] lg:w-[520px] lg:translate-x-[200px]',
		}],
	},
	{
		offset: 4,
		speed: 2,
		data: [{
			type: 'text',
			text: 'Вы также сможете попасть в стаю корюшек и попытаться вместе с ними ускользнуть из рыбацких сетей и перехитрить рыбаков.',
			className: 'w-[70%] translate-x-[-50px] translate-y-[180px] lg:w-[500px] lg:-translate-x-[200px] lg:translate-y-[200px] ',
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
				className: 'w-[100%] -translate-y-[100px] translate-x-[-50px] lg:w-[70%] lg:-translate-x-[300px] lg:translate-y-[0rem]',
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
			className: 'w-[95%] translate-x-[5px] translate-y-[200px] lg:w-[600px] lg:translate-y-[200px] lg:translate-x-[200px]  ',
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
			className: 'w-[80%] translate-y-[-50px] translate-x-[140px] lg:w-[50%] lg:translate-y-[40px] lg:translate-x-[200px]',
		}],
	},
	{
		offset: 6,
		speed: 2,
		data: [{
			type: 'text',
			text: 'В музее также представлена аутентичная лодка с парусом. С помощью видео инструкции вы самостоятельно можете установить парус и отправиться на лодке в виртуальное путешествие.',
			className: 'w-[65%] translate-y-[100px] translate-x-[-80px] lg:w-[560px] lg:translate-y-[120px] lg:translate-x-[-200px]',
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
				className: 'w-[90%] translate-y-[-160px] lg:w-[70%] lg:-translate-x-[100px] lg:translate-y-[-160px]',
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
			className: 'w-[95%] translate-y-[160px] lg:translate-y-[200px] lg:translate-x-[240px] lg:w-[640px] ',
		}],
	},
]
export const layersFooter = [
	{
		offset: 8,
		speed: 0,
		data: [{
			type: 'block',
			className: styles.lf_1 + ' translate-y-[35px] lg:translate-y-[170px]',
		}],
	}, {
		offset: 8,
		speed: -0.02,
		data: [{
			type: 'block',
			className: styles.lf_2 + ' translate-y-[40px] lg:translate-y-[180px]',
		}],
	},
	{
		offset: 8,
		speed: 0.5,
		data: [{
			type: 'list',
			list: ['Контакты:', '+7 963 325-23-55', 'vk.com/museumkorushki'],
			className: 'w-[95%] translate-y-[-220px] lg:translate-y-[-380px] lg:w-[600px]  ',
		}],
	}, {
		offset: 8,
		speed: -0.1,
		data: [{
			type: 'block',
			className: styles.lf_3 + ' translate-y-[0px] lg:translate-y-[180px]',
		}],
	}, {
		offset: 8,
		speed: 2,
		data: [{
			type: 'image',
			src: Map,
			className: ' w-[90%] translate-y-[40px] lg:w-[600px] lg:translate-y-[40px] rounded-md',
		}],
	}, {
		offset: 8,
		speed: -0.2,
		data: [{
			type: 'block',
			className: styles.lf_4 + '  translate-y-[10px] lg:translate-y-[100px]',
		}],
	}, {
		offset: 8,
		speed: -0.3,
		data: [{
			type: 'block',
			className: styles.lf_5 + '  translate-y-[-50px] lg:translate-y-[120px]',
		}],
	},
].reverse()

export const layersData = [
	...layersHeader,
	...layersBody,
	...layersFooter,
]
