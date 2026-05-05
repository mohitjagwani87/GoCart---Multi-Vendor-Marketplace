'use client'
import Link from 'next/link'
import React from 'react'

export default function ContactSmall(){
    return (
        <section className="px-6 py-12">
            <div className="max-w-6xl mx-auto rounded-lg border bg-white p-6 shadow">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <h4 className="text-lg font-semibold">Get in touch</h4>
                        <p className="text-sm text-slate-600">Questions? Reach out and we’ll respond quickly.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="mailto:contact@mohitjag.com" className="text-sm text-slate-700 hover:underline">contact@mohitjag.com</a>
                        <a href="tel:9109883022" className="text-sm text-slate-700 hover:underline">+91 9109883022</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
