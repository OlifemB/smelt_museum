import Man1 from '@/shares/images/mans/man-1.png'
import Man2 from '@/shares/images/mans/man-2.png'
import Man3 from '@/shares/images/mans/man-3.png'
import S1P1 from '@/shares/images/parallax/photo_2024-05-12_13-15-12.jpg'
import S1P2 from '@/shares/images/parallax/photo_2024-05-12_13-15-13.jpg'
import S1P3 from '@/shares/images/parallax/photo_2024-05-12_13-15-14.jpg'
import S2P1 from '@/shares/images/parallax/photo_2024-05-12_13-48-52.jpg'
import S2P2 from '@/shares/images/parallax/photo_2024-05-12_13-15-15.jpg'
import S2P3 from '@/shares/images/parallax/photo_2024-05-12_13-59-15.jpg'
import S2P4 from '@/shares/images/parallax/photo_2024-05-12_13-15-19.jpg'

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

export const layersFisherman = [
	{
		src: Man1,
		id: 'fisherman-1',
		offset: 6,
		speed: 0,
		sticky: { start: 1, end: 1.5 },
	},
	{
		src: Man2,
		id: 'fisherman-2',
		offset: 6,
		speed: 0,
		sticky: { start: 2.5, end: 3 },
	},
	{
		src: Man3,
		id: 'fisherman-3',
		offset: 6,
		speed: 0,
		sticky: { start: 4, end: 4.5 },
	},
]
