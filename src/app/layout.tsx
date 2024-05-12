import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import { RecoilContextProvider } from '@/app/RecoilProvider'
import { Navigation } from '@/components/navigation/navigation'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider, Layout } from 'antd'
import { mainTheme } from '@/shares/configs/theme'
import '@/shares/declarations/svgr'
import { Providers } from '@/app/providers'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Музей корюшки',
	description: 'by Olifem',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ConfigProvider theme={mainTheme}>
			<html lang='ru'>
			<body className={inter.className}>
			<Providers>
				<Navigation />
				{children}
			</Providers>
			</body>
			</html>
		</ConfigProvider>
	)
}
