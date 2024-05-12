'use client'

import { ParallaxProvider } from 'react-scroll-parallax'
import { RecoilContextProvider } from '@/app/recoil-provider'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { Layout } from 'antd'

export function Providers({ children }) {
	return (
		<RecoilContextProvider>
			<AntdRegistry>
				<ParallaxProvider>{children}</ParallaxProvider>
			</AntdRegistry>
		</RecoilContextProvider>
	)
}
