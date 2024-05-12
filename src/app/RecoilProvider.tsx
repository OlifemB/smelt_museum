"use client";

import {RecoilRoot, atom} from "recoil";
import React from "react";


export const todoListState = atom({
    key: "TodoList",
    default: [],
});

export const RecoilContextProvider = ({children}: { children: React.ReactNode }) => {
    return <RecoilRoot>{children}</RecoilRoot>;
}