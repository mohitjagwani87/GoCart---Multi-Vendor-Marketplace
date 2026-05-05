"use client"
import Title from '@/components/Title'
import ContactSmall from '@/components/ContactSmall'
import { useState } from 'react'

export default function ContactPage(){
    const [form, setForm] = useState({ name: '', email: '', message: '' })

    const onChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    const onSubmit = (e) => { e.preventDefault(); alert('Thanks — message sent (demo)') }

    return (
        <main className="px-6 py-12 max-w-3xl mx-auto">
            <Title title="Contact Us" description="We'd love to hear from you. Use the form or the quick contact details below." visibleButton={false} />

            <form onSubmit={onSubmit} className="mt-8 space-y-4">
                <div>
                    <label className="block text-sm font-medium">Name</label>
                    <input name="name" value={form.name} onChange={onChange} className="mt-1 w-full rounded border p-2" required />
                </div>
                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input name="email" type="email" value={form.email} onChange={onChange} className="mt-1 w-full rounded border p-2" required />
                </div>
                <div>
                    <label className="block text-sm font-medium">Message</label>
                    <textarea name="message" value={form.message} onChange={onChange} className="mt-1 w-full rounded border p-2 h-36" required />
                </div>
                <div className="flex items-center gap-3">
                    <button type="submit" className="px-4 py-2 bg-slate-900 text-white rounded">Send message</button>
                    <ContactSmall />
                </div>
            </form>
        </main>
    )
}
