import './globals.css'
import type {Metadata} from 'next'
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: 'RPG',
    description: 'RPG風に動けるようにする',
}

export default function RootLayout({children,}: {
    children: ReactNode
}) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}
