import Image from 'next/image'
import L1R from '../../shares/images/layers/l1-r.png'
import L1L from '../../shares/images/layers/l1-l.png'
import L2R from '../../shares/images/layers/l2-r.png'
import L2L from '../../shares/images/layers/l2-l.png'
import L3R from '../../shares/images/layers/l3-r.png'
import L3L from '../../shares/images/layers/l3-l.png'
import L4 from '../../shares/images/layers/l4.png'
import L5 from '../../shares/images/layers/l5.png'
import L6 from '../../shares/images/layers/l6.png'
import LS from '../../shares/images/layers/l_sky.png'
import LW from '../../shares/images/layers/l_water.png'

export const layers = [
	{
		children: <Image src={L1R} alt={''} width={2000} className={'w-screen'} />,
		shouldAlwaysCompleteAnimation: true,
	},
	{
		children: <Image src={L1L} alt={''} width={2000} className={'w-screen'} />,
		shouldAlwaysCompleteAnimation: true,
	},
	{
		children: <Image src={L2R} alt={''} width={2000} className={'w-screen'} />,
		// shouldAlwaysCompleteAnimation: true,
		startScroll: 10,
	},
	{
		children: <Image src={L2L} alt={''} width={2000} className={'w-screen'} />,
		shouldAlwaysCompleteAnimation: true,
	},
	{
		children: <Image src={L3R} alt={''} width={2000} className={'w-screen'} />,
		shouldAlwaysCompleteAnimation: true,
	},
	{
		children: <Image src={L3L} alt={''} width={2000} className={'w-screen'} />,
		shouldAlwaysCompleteAnimation: true,
		// translateY: [15, 30],
	},
	{
		children: <Image src={L4} alt={''} width={2000} className={'w-screen'} />,
		shouldAlwaysCompleteAnimation: true,
		// translateY: [16, 24],
	},
	{
		children: <Image src={L5} alt={''} width={2000} className={'w-screen'} />,
		shouldAlwaysCompleteAnimation: true,
		// translateY: [18, 25],
	},
	{
		children: <Image src={L6} alt={''} width={2000} className={'w-screen'} />,
		shouldAlwaysCompleteAnimation: true,
		// translateY: [18, 25],
	},
	{
		children: <Image src={LS} alt={''} width={2000} className={'w-screen'} />,
		shouldAlwaysCompleteAnimation: true,
	},
	{
		children: <Image src={LW} alt={''} width={2000} className={'w-screen'} />,
		shouldAlwaysCompleteAnimation: true,
	},
	// {
	// 	children: <Image src={BG} alt={''} width={2000} className={'w-screen'} />,
	// 	shouldAlwaysCompleteAnimation: true,
	// },
].reverse()
