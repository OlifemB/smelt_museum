'use client'

import { RecoilRoot, atom } from 'recoil'
import React from 'react'

export const todoListState = atom({
	key: 'TodoList',
	default: [],
})

export const RecoilContextProvider = ({ children }) => {
	return <RecoilRoot>{children}</RecoilRoot>
}
