'use client';
import {atom} from "recoil";


export const navigationState = atom({
    key: 'navigationState',
    default: {current: '/'}
})