'use client'
import React from 'react'

const reviews = [
    { name: 'Asha K.', text: 'Fast delivery and great support. Highly recommended!' },
    { name: 'Ravi P.', text: 'Vendor experience is smooth and payouts are fair.' },
    { name: 'Nisha S.', text: 'I love the sustainability efforts and packaging.' }
]

export default function Reviews(){
    return (
        <section className="px-6 py-16 bg-slate-900 text-white">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl font-semibold mb-6">Customer Reviews</h3>
                <div className="grid gap-4 md:grid-cols-3">
                    {reviews.map((r, i) => (
                        <blockquote key={i} className="rounded-lg bg-slate-800/60 p-6">
                            <p className="text-sm">“{r.text}”</p>
                            <footer className="mt-4 text-xs text-slate-300">— {r.name}</footer>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
    )
}
