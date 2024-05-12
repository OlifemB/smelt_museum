'use client'

import { ParallaxProvider } from 'react-scroll-parallax'
import { RecoilContextProvider } from '@/app/RecoilProvider'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { Layout } from 'antd'


export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<RecoilContextProvider>
			<AntdRegistry>
				<ParallaxProvider>
					{children}
				</ParallaxProvider>
			</AntdRegistry>
		</RecoilContextProvider>
	)
}