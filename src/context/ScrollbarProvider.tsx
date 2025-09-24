'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type ScrollbarContextType = {
    scrollbarSize: number,
    changeScrollbarSize: (sizeInPx: number) => void
}

const ScrollbarContext = createContext<ScrollbarContextType | null>(null)

export function ScrollbarProvider({children}: {children: ReactNode}) {
    const [scrollbarSize, setScrollbarSize] = useState<number>(0)

    function changeScrollbarSize(sizeInPx: number) {
        setScrollbarSize(sizeInPx)
    }

    return (
        <ScrollbarContext.Provider value={{scrollbarSize, changeScrollbarSize}}>
            {children}
        </ScrollbarContext.Provider>
    )
}

export function useScrollBar() {
    const ctx = useContext(ScrollbarContext)
    if(!ctx) {
        throw new Error('useScrollbar must be used within a ScrollbarProvider')
    }
    return ctx
}