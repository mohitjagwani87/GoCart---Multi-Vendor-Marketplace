import React from 'react'
import Title from './Title'
import { ourSpecsData } from '@/assets/assets'

const OurSpecs = () => {

    return (
        <section className='px-6 my-24 max-w-6xl mx-auto'>
            <div className='relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-emerald-50/70 px-6 py-14 shadow-[0_30px_80px_rgba(15,23,42,0.08)] md:px-10'>
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(5,223,114,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(166,132,255,0.18),transparent_32%)]' />
                <div className='relative'>
                    <div className='flex flex-col items-center text-center'>
                        <span className='inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1 text-xs font-semibold tracking-[0.24em] text-emerald-700 uppercase shadow-sm'>
                            Service Highlights
                        </span>
                        <Title
                            visibleButton={false}
                            title='Our Specifications'
                            description="We offer top-tier service and convenience to ensure your shopping experience is smooth, secure and completely hassle-free."
                        />
                        <div className='mt-5 flex flex-wrap justify-center gap-3 text-xs text-slate-500'>
                            <span className='rounded-full bg-white/80 px-4 py-2 border border-slate-200 shadow-sm'>Fast fulfillment</span>
                            <span className='rounded-full bg-white/80 px-4 py-2 border border-slate-200 shadow-sm'>Trusted support</span>
                            <span className='rounded-full bg-white/80 px-4 py-2 border border-slate-200 shadow-sm'>Secure checkout</span>
                        </div>
                    </div>

                    <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                        {ourSpecsData.map((spec, index) => {
                            const isMiddle = index === 1;

                            return (
                                <article
                                    key={index}
                                    className={`group relative overflow-hidden rounded-2xl border bg-white/85 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.12)] ${isMiddle ? 'md:translate-y-5' : ''}`}
                                    style={{ borderColor: spec.accent + '26' }}
                                >
                                    <div
                                        className='absolute inset-x-0 top-0 h-1'
                                        style={{ background: `linear-gradient(90deg, ${spec.accent}, transparent)` }}
                                    />
                                    <div
                                        className='absolute -right-10 -top-10 size-32 rounded-full blur-3xl opacity-20 transition duration-300 group-hover:opacity-30'
                                        style={{ backgroundColor: spec.accent }}
                                    />
                                    <div className='relative flex h-full flex-col'>
                                        <div className='flex items-start justify-between gap-4'>
                                            <div
                                                className='flex size-14 items-center justify-center rounded-2xl text-white shadow-lg transition duration-300 group-hover:scale-105'
                                                style={{ backgroundColor: spec.accent }}
                                            >
                                                <spec.icon size={24} />
                                            </div>
                                            <span className='rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500'>
                                                0{index + 1}
                                            </span>
                                        </div>

                                        <div className='mt-6'>
                                            <h3 className='text-lg font-semibold text-slate-900'>{spec.title}</h3>
                                            <p className='mt-3 text-sm leading-6 text-slate-600'>{spec.description}</p>
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurSpecs