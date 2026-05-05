import { Suspense } from 'react'
import LoginClient from './LoginClient'

export default function LoginPage() {
    return (
        <Suspense fallback={<div className="min-h-[70vh] bg-slate-50 px-6 py-16">Loading login...</div>}>
            <LoginClient />
        </Suspense>
    )
}