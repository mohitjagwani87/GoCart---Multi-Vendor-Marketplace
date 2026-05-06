'use client'

import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { Leaf, PackageCheck, ShieldCheck, Sparkles, Truck, Users } from 'lucide-react'
import React, { useMemo, useRef, useState } from 'react'

const steps = [
    {
        key: 'trust',
        title: 'Credibility people can feel',
        desc: 'Verified sellers, clear policies, honest support, and a checkout flow that keeps customers informed at every step.',
        icon: ShieldCheck,
        accent: 'from-cyan-400 to-sky-600',
        dot: 'bg-cyan-400',
        bullets: ['Verified vendors', 'Buyer protection', 'Transparent order status'],
        badge: 'Trust first'
    },
    {
        key: 'friendly',
        title: 'Built for customers and delivery partners',
        desc: 'Fast dispatch, sensible routes, better handoff details, and fewer support headaches for everyone involved.',
        icon: Truck,
        accent: 'from-amber-400 to-orange-600',
        dot: 'bg-amber-400',
        bullets: ['Faster dispatch', 'Clear handoff notes', 'Partner-friendly operations'],
        badge: 'Two-sided care'
    },
    {
        key: 'impact',
        title: 'Sustainable and socially responsible',
        desc: 'We reduce CO2 where we can, use smarter packaging choices, and contribute a small portion to charity.',
        icon: Leaf,
        accent: 'from-emerald-400 to-green-600',
        dot: 'bg-emerald-400',
        bullets: ['Lower carbon footprint', 'Thoughtful packaging', 'Small charity contribution'],
        badge: 'Positive impact'
    },
    {
        key: 'innovation',
        title: 'Modern, dependable shopping experience',
        desc: 'Performance-driven storefront UX with smooth browsing, a clean product flow, and helpful service built in.',
        icon: Sparkles,
        accent: 'from-violet-400 to-fuchsia-600',
        dot: 'bg-violet-400',
        bullets: ['Modern UI', 'Smooth product discovery', 'Reliable store experience'],
        badge: 'Always improving'
    }
]

const reviews = [
    { name: 'Asha K.', role: 'Customer', quote: 'Fast delivery, clear communication, and the support team actually replies.' },
    { name: 'Rahul P.', role: 'Delivery Partner', quote: 'The route instructions are better than most platforms I have used.' },
    { name: 'Nisha S.', role: 'Seller', quote: 'The platform feels trustworthy and the vendor experience is very smooth.' },
]

function StepVisual({ step, progress }) {
    const lift = useTransform(progress, [0, 1], [0, -18])
    const scale = useTransform(progress, [0, 1], [0.97, 1.04])

    const Icon = step.icon

    return (
        <motion.div
            style={{ y: lift, scale }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-[0_35px_100px_rgba(2,6,23,0.5)]"
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${step.accent} opacity-90`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.16),transparent_30%)]" />

            <div className="relative flex h-[430px] flex-col p-6 text-white md:h-[560px] md:p-10">
                <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white/15 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] backdrop-blur">
                        {step.badge}
                    </span>
                    <span className="rounded-full border border-white/20 bg-black/15 px-3 py-1 text-xs">
                        {step.key}
                    </span>
                </div>

                <div className="mt-5 max-w-sm">
                    <h3 className="text-2xl font-semibold leading-tight md:text-4xl">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/90 md:text-base">{step.desc}</p>
                </div>

                <div className="mx-auto flex w-full max-w-sm flex-1 items-center justify-center py-8">
                    <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm md:h-80 md:w-80">
                        <div className="absolute inset-6 rounded-full border border-white/15" />
                        <div className="absolute inset-12 rounded-full border border-white/10" />
                        <div className="absolute inset-0 rounded-full bg-white/5 blur-2xl" />
                        <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl bg-white text-slate-950 shadow-2xl md:h-32 md:w-32">
                            <Icon size={46} />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

function StepCard({ step, active, index, total }) {
    return (
        <motion.article
            animate={active ? 'active' : 'idle'}
            variants={{
                idle: { opacity: 0.72, y: 10, scale: 0.995 },
                active: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={`rounded-3xl border p-5 md:p-6 ${active ? 'border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.12)]' : 'border-slate-200 bg-white/90'}`}
        >
            <div className="flex items-start gap-4">
                <div className={`mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm ${active ? `ring-2 ring-offset-2 ring-offset-white ${step.dot}` : ''}`}>
                    <step.icon size={22} />
                </div>
                <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                        <h4 className="text-lg font-semibold text-slate-900">{step.title}</h4>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                            0{index + 1}/{total}
                        </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{step.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {step.bullets.map((item) => (
                            <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.article>
    )
}

export default function AboutInteractive() {
    const sectionRef = useRef(null)
    const containerRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [cycleDone, setCycleDone] = useState(false)
    const [lastDirection, setLastDirection] = useState(1)
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        const nextIndex = Math.min(steps.length - 1, Math.max(0, Math.floor(latest * steps.length)))
        setActiveIndex((current) => (current === nextIndex ? current : nextIndex))
    })

    // Handle wheel and touch scroll to step through content (one cycle only)
    React.useEffect(() => {
        const handleWheel = (e) => {
            if (!containerRef.current?.contains(e.target)) return

            const direction = e.deltaY > 0 ? 1 : -1

            // When the user changes direction, start a fresh cycle for the new direction.
            if (cycleDone && direction !== lastDirection) {
                setCycleDone(false)
            }

            // If this cycle already completed and the user keeps going the same way, allow normal scroll.
            if (cycleDone && direction === lastDirection) return

            const isAtEnd = direction > 0 && activeIndex === steps.length - 1
            const isAtStart = direction < 0 && activeIndex === 0
            if (isAtEnd || isAtStart) {
                // Mark cycle as complete for this direction, allow scroll to continue.
                setCycleDone(true)
                setLastDirection(direction)
                return
            }

            // Lock scroll and advance step
            e.preventDefault()
            setLastDirection(direction)
            setActiveIndex((current) => Math.max(0, Math.min(steps.length - 1, current + direction)))
        }

        const handleTouchMove = (e) => {
            if (!containerRef.current?.contains(e.target)) return

            if (cycleDone) return

            const isAtEnd = lastDirection > 0 && activeIndex === steps.length - 1
            const isAtStart = lastDirection < 0 && activeIndex === 0
            if (isAtEnd || isAtStart) {
                setCycleDone(true)
                return
            }

            e.preventDefault()
        }

        const container = containerRef.current
        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false })
            container.addEventListener('touchmove', handleTouchMove, { passive: false })

            return () => {
                container.removeEventListener('wheel', handleWheel)
                container.removeEventListener('touchmove', handleTouchMove)
            }
        }
    }, [activeIndex, cycleDone, lastDirection])

    const activeStep = useMemo(() => steps[activeIndex], [activeIndex])

    return (
        <section ref={sectionRef} className="relative isolate overflow-hidden bg-slate-950 text-white" style={{ minHeight: `${Math.max(240, steps.length * 70)}vh` }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.14),transparent_28%)]" />

            <div ref={containerRef} className="sticky top-0 flex min-h-screen items-center">
                <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">
                    <div className="space-y-6">
                        <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/8 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-200 backdrop-blur">
                            About GoCart
                        </span>

                        <div>
                            <h2 className="max-w-xl text-4xl font-semibold leading-tight md:text-6xl">
                                Built for people, partners, and a better footprint.
                            </h2>
                            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
                                We focus on customer trust, delivery-partner friendliness, sustainability, and a small give-back model so the platform feels useful beyond just sales.
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="rounded-3xl border border-white/10 bg-white/6 p-4 backdrop-blur-sm">
                                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Customer friendly</p>
                                <p className="mt-2 text-sm leading-6 text-slate-200">Fast support, honest service, and a smoother shopping journey.</p>
                            </div>
                            <div className="rounded-3xl border border-white/10 bg-white/6 p-4 backdrop-blur-sm">
                                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Delivery partner friendly</p>
                                <p className="mt-2 text-sm leading-6 text-slate-200">Clear handoffs, better routing, and less friction on each order.</p>
                            </div>
                            <div className="rounded-3xl border border-white/10 bg-white/6 p-4 backdrop-blur-sm">
                                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Sustainable</p>
                                <p className="mt-2 text-sm leading-6 text-slate-200">Less CO2, smarter packaging, and a charity contribution model.</p>
                            </div>
                        </div>

                        <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/6 p-4 backdrop-blur-sm md:grid-cols-2">
                            <div className="rounded-2xl bg-white/6 p-4">
                                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Customer reviews</p>
                                <p className="mt-2 text-sm text-slate-200">Verified feedback, quick support, and smooth ordering.</p>
                            </div>
                            <div className="rounded-2xl bg-white/6 p-4">
                                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Our advantage</p>
                                <p className="mt-2 text-sm text-slate-200">Better operations, fairer delivery flows, and transparent service.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-5 lg:pl-4">
                        <StepVisual step={activeStep} progress={scrollYProgress} />

                        <div className="flex items-center justify-between gap-4 px-1 text-xs uppercase tracking-[0.24em] text-slate-400">
                            <span>Scroll to explore</span>
                            <div className="flex items-center gap-2">
                                {steps.map((step, i) => (
                                    <span
                                        key={step.key}
                                        className={`h-2.5 rounded-full transition-all ${i === activeIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/30'}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            {steps.map((step, index) => (
                                <StepCard key={step.key} step={step} active={index === activeIndex} index={index} total={steps.length} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}