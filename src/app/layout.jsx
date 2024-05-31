import { Inter } from 'next/font/google'
import '../shares/styles/globals.css'
import React, { Suspense } from 'react'
import { Navigation } from '@/components/navigation/navigation'
import { ConfigProvider } from 'antd'
import { mainTheme } from '@/shares/configs/theme'
import { Providers } from '@/app/providers'
import { Spinner } from '@/components/spinner/spinner'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Музей корюшки',
	description: 'by Olifem',
}

export default function RootLayout({ children }) {
	return (
		<ConfigProvider theme={mainTheme}>
			<html lang='ru'>
			<body className={inter.className}>
			<Providers>
				<Suspense fallback={<Spinner/>}>
					<Navigation />
					{children}
				</Suspense>
			</Providers>
			</body>
			</html>
		</ConfigProvider>
	)
}
