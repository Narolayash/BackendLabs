import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../../../public/template_1/assets/css/styles.css'

import Script from 'next/script'
import React from 'react'

export default function Template1Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div>
                {children}
            </div>
            {/* Bootstrap JS ONLY for this template */}
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                strategy="afterInteractive"
            />
        </>
    )
}
