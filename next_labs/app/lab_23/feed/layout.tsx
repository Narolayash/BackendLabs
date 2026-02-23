"use client"

import React from 'react'
import { useSelectedLayoutSegment } from 'next/navigation'

function Feed_Layout({ children, model } : { children : React.ReactNode; model : React.ReactNode } ) {
    const modelSegment = useSelectedLayoutSegment('model');
    const hasModel = modelSegment !== null;

    if (!hasModel) {
        return <>{children}</>;
    }

    return (
        <>
            <div className='bg-primary bg-opacity-10' style={{ filter: 'blur(1px)', minHeight: '100vh' }}>
                {children}
            </div>

            <div
                className='position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center'
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)', zIndex: 1050 }}
            >
                {model}
            </div>
        </>
    )
}

export default Feed_Layout