'use client'

import { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter, useSearchParams } from 'next/navigation'
import toast from 'react-hot-toast'
import { loginSuccess } from '@/lib/features/auth/authSlice'

const demoUsers = {
    customer: {
        email: 'customer@gocart.com',
        password: 'customer123',
        role: 'customer',
        name: 'GoCart Customer',
    },
    seller: {
        email: 'seller@gocart.com',
        password: 'seller123',
        role: 'seller',
        name: 'GoCart Seller',
    },
    admin: {
        email: 'admin@gocart.com',
        password: 'admin123',
        role: 'admin',
        name: 'GoCart Admin',
    },
}

export default function LoginClient() {
    const dispatch = useDispatch()
    const router = useRouter()
    const searchParams = useSearchParams()
    const redirectTo = searchParams.get('redirect') || '/'

    const [role, setRole] = useState('customer')
    const [email, setEmail] = useState(demoUsers.customer.email)
    const [password, setPassword] = useState('customer123')

    const selectedUser = useMemo(() => demoUsers[role], [role])

    const handleRoleChange = (nextRole) => {
        setRole(nextRole)
        setEmail(demoUsers[nextRole].email)
        setPassword(demoUsers[nextRole].password)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (email !== selectedUser.email || password !== selectedUser.password) {
            toast.error('Invalid email or password')
            return
        }

        dispatch(
            loginSuccess({
                id: `${selectedUser.role}_${selectedUser.email}`,
                name: selectedUser.name,
                email: selectedUser.email,
                role: selectedUser.role,
            })
        )

        toast.success('Logged in successfully')

        if (selectedUser.role === 'admin') {
            router.push('/admin')
            return
        }

        if (selectedUser.role === 'seller') {
            router.push('/store')
            return
        }

        router.push(redirectTo)
    }

    return (
        <main className="min-h-[80vh] bg-slate-50 px-6 py-16">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                <section className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_30px_100px_rgba(15,23,42,0.2)]">
                    <p className="text-xs uppercase tracking-[0.35em] text-emerald-300">Authentication</p>
                    <h1 className="mt-4 text-4xl font-semibold leading-tight">Log in to manage your GoCart account.</h1>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                        This demo login gives you access to customer, seller, and admin views so you can test the real navigation and protected pages.
                    </p>

                    <div className="mt-8 space-y-4 text-sm text-slate-200">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="font-semibold">Customer</p>
                            <p className="mt-1 text-slate-300">customer@gocart.com / customer123</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="font-semibold">Seller</p>
                            <p className="mt-1 text-slate-300">seller@gocart.com / seller123</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="font-semibold">Admin</p>
                            <p className="mt-1 text-slate-300">admin@gocart.com / admin123</p>
                        </div>
                    </div>
                </section>

                <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
                    <div className="flex flex-wrap gap-3">
                        {Object.keys(demoUsers).map((item) => (
                            <button
                                key={item}
                                type="button"
                                onClick={() => handleRoleChange(item)}
                                className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition ${role === item ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <button type="submit" className="w-full rounded-2xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700">
                            Login now
                        </button>
                    </form>

                    <p className="mt-5 text-sm leading-6 text-slate-500">
                        After login, sellers go to the store dashboard and admins go to the admin dashboard.
                    </p>
                </section>
            </div>
        </main>
    )
}