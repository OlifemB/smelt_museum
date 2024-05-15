import React from 'react'
import Fish from '@/shares/svgs/spinner.svg'

export const Spinner = () => {
	return (
		<div className={'flex flex-col items-center justify-center h-full bg gap-4'}>
			<Fish className={'animate-spin h-32 w-32'}/>
			<spin className={'text-gray-300 font-semibold'}>Загрузка. Пожалуйста, подождите.</spin>
		</div>
	)
}