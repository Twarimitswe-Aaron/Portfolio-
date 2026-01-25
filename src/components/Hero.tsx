'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen bg-[#01010d] text-white overflow-hidden flex flex-col items-center justify-center py-20" style={{ fontFamily: '"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif' }}>

            {/* Radial Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[100px] z-0 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/[0.05] rounded-full blur-[80px] z-0 pointer-events-none" />

            {/* Dot Pattern (Subtle) */}


            {/* Background Image */}
            <div
                style={{
                    position: 'absolute',
                    borderRadius: 'inherit',
                    // @ts-ignore
                    cornerShape: 'inherit',
                    inset: '0px'
                }}
            >
                <div
                    style={{
                        filter: 'grayscale(1)',
                        opacity: 0.4,
                        pointerEvents: 'none',
                        zIndex: 0,
                        flex: 'none',
                        width: '2458px',
                        height: '1701px',
                        position: 'absolute',
                        top: 'calc(55.75% - 850.5px)',
                        left: 'calc(50% - 1229px)'
                    }}
                >
                    <img
                        decoding="auto"
                        src="/images/download.avif"
                        alt=""
                        style={{
                            display: 'block',
                            width: '100%',
                            height: '100%',
                            borderRadius: 'inherit',
                            // @ts-ignore
                            cornerShape: 'inherit',
                            objectPosition: 'center center',
                            objectFit: 'contain'
                        }}
                    />
                </div>
            </div>

            {/* Vignette Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(75% 64% at 50% 50%, #fff0 17.5676%, #01010d 100%)' }} />

            {/* Dot Pattern (Subtle) */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(80,80,138,0.2)_1px,transparent_1px)] bg-[size:5px_5px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] z-0 pointer-events-none" />

            {/* Floating UI Elements Container */}
            <div className="absolute inset-0 w-full h-full overflow-hidden z-10 pointer-events-none">





                {/* Element 3: Message Bubble (Top Right) */}
                {/* Google Meet Card */}
                <motion.div
                    className="absolute bottom-[30%] left-[5%] md:left-[10%] flex flex-col md:flex-row items-end w-[303px] gap-2 opacity-90 z-20"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                >
                    {/* Text Box */}
                    <div className="relative group p-3 md:p-4 rounded-lg border border-white/10 bg-[#181825]/60 backdrop-blur-md max-w-[220px]">
                        {/* Corner Animations */}
                        <motion.div className="absolute -top-1 -left-1 w-2 h-2 z-20" animate={{ x: [0, -4, 0, 0], y: [0, -4, 0, 0] }} transition={{ duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity }}>
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#f0f0ff]"></div>
                            <div className="absolute top-0 left-0 w-[1px] h-full bg-[#f0f0ff]"></div>
                        </motion.div>
                        <motion.div className="absolute -top-1 -right-1 w-2 h-2 z-20" animate={{ x: [0, 4, 0, 0], y: [0, -4, 0, 0] }} transition={{ duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity }}>
                            <div className="absolute top-0 right-0 w-full h-[1px] bg-[#f0f0ff]"></div>
                            <div className="absolute top-0 right-0 w-[1px] h-full bg-[#f0f0ff]"></div>
                        </motion.div>
                        <motion.div className="absolute -bottom-1 -left-1 w-2 h-2 z-20" animate={{ x: [0, -4, 0, 0], y: [0, 4, 0, 0] }} transition={{ duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity }}>
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#f0f0ff]"></div>
                            <div className="absolute bottom-0 left-0 w-[1px] h-full bg-[#f0f0ff]"></div>
                        </motion.div>
                        <motion.div className="absolute -bottom-1 -right-1 w-2 h-2 z-20" animate={{ x: [0, 4, 0, 0], y: [0, 4, 0, 0] }} transition={{ duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity }}>
                            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-[#f0f0ff]"></div>
                            <div className="absolute bottom-0 right-0 w-[1px] h-full bg-[#f0f0ff]"></div>
                        </motion.div>

                        <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-light">Set up a Google Meet with Twarimitswe at 2:00 PM on Thursday.</p>
                    </div>

                    {/* Icon Box */}
                    <div className="relative group flex flex-col items-center gap-2 p-2 rounded-lg border border-white/10 bg-[#181825]/80 backdrop-blur-md">
                        {/* Corner Animations */}
                        <motion.div className="absolute -top-1 -left-1 w-2 h-2 z-20" animate={{ x: [0, -4, 0, 0], y: [0, -4, 0, 0] }} transition={{ duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity }}>
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#f0f0ff]"></div>
                            <div className="absolute top-0 left-0 w-[1px] h-full bg-[#f0f0ff]"></div>
                        </motion.div>
                        <motion.div className="absolute -top-1 -right-1 w-2 h-2 z-20" animate={{ x: [0, 4, 0, 0], y: [0, -4, 0, 0] }} transition={{ duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity }}>
                            <div className="absolute top-0 right-0 w-full h-[1px] bg-[#f0f0ff]"></div>
                            <div className="absolute top-0 right-0 w-[1px] h-full bg-[#f0f0ff]"></div>
                        </motion.div>
                        <motion.div className="absolute -bottom-1 -left-1 w-2 h-2 z-20" animate={{ x: [0, -4, 0, 0], y: [0, 4, 0, 0] }} transition={{ duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity }}>
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#f0f0ff]"></div>
                            <div className="absolute bottom-0 left-0 w-[1px] h-full bg-[#f0f0ff]"></div>
                        </motion.div>
                        <motion.div className="absolute -bottom-1 -right-1 w-2 h-2 z-20" animate={{ x: [0, 4, 0, 0], y: [0, 4, 0, 0] }} transition={{ duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity }}>
                            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-[#f0f0ff]"></div>
                            <div className="absolute bottom-0 right-0 w-[1px] h-full bg-[#f0f0ff]"></div>
                        </motion.div>

                        {/* User Icon */}
                        <div className="w-8 h-8 flex items-center justify-center text-white bg-white/5 rounded-full">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        </div>
                        {/* Dots */}
                        <div className="flex flex-col gap-1">
                            <div className="w-1 h-1 rounded-full bg-[#50508a]"></div>
                            <div className="w-1 h-1 rounded-full bg-[#50508a]"></div>
                            <div className="w-1 h-1 rounded-full bg-[#50508a]"></div>
                            <div className="w-1 h-1 rounded-full bg-[#50508a]"></div>
                        </div>
                    </div>
                </motion.div>



                {/* Abstract Lines */}
                <div className="absolute top-1/2 left-[10%] w-[1px] h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                <div className="absolute bottom-[20%] right-[30%] w-32 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-20 flex flex-col items-center text-center max-w-6xl px-4 space-y-10">
                <div>
                    <div className="relative px-4 py-2 border border-[#181825] bg-[#01010d] text-xs md:text-sm text-white font-medium tracking-wide flex items-center gap-2">
                        {/* Left Border */}
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#f0f0ff] shadow-[0_0_20px_#f0f0ff] z-20"></div>

                        <div className="relative w-3 h-3 flex items-center justify-center">
                            <motion.div
                                className="absolute w-full h-full bg-[rgba(240,240,255,0.5)] rounded-full shadow-[0_0_15px_#f0f0ff]"
                                animate={{ scale: [0, 2.5], opacity: [0, 1, 0] }}
                                transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute w-full h-full bg-[rgba(240,240,255,0.3)] rounded-full shadow-[0_0_15px_#f0f0ff]"
                                animate={{ scale: [0, 2.5], opacity: [0, 1, 0] }}
                                transition={{ duration: 4, ease: "linear", repeat: Infinity, delay: 2 }}
                            />
                            <div className="relative w-2 h-2 bg-[rgb(240,240,255)] rounded-full shadow-[0_0_8px_rgba(240,240,255,0.8)]"></div>
                        </div>
                        <span className="uppercase">AI AUTOMATION FOR BUSINESSES</span>

                        {/* Right Border */}
                        <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-[#f0f0ff] shadow-[0_0_20px_#f0f0ff] z-20"></div>
                    </div>

                </div>


                <div className="flex flex-wrap items-start justify-between w-full">
                    <div className="relative px-3 py-1 border-y border-[#181825] bg-[#01010d] text-[11px] tracking-wide flex items-center gap-2 text-gray-300">
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#f0f0ff] shadow-[0_0_15px_#f0f0ff] z-20"></div>
                        Custom AI Agents {'</>'}
                        <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-[#f0f0ff] shadow-[0_0_15px_#f0f0ff] z-20"></div>
                    </div>
                    <div className="relative px-3 py-1 border-y border-[#181825] bg-[#01010d] text-[11px] font-medium tracking-wide flex items-center gap-2 text-gray-300">
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#f0f0ff] shadow-[0_0_15px_#f0f0ff] z-20"></div>
                        Automated Workflows
                        <svg className="w-3 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-[#f0f0ff] shadow-[0_0_15px_#f0f0ff] z-20"></div>
                    </div>
                </div>

                {/* Logo & Headline group */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                    {/* Logo Mark */}
                    <div className="relative w-32 h-32 md:w-[148px] md:h-[148px] flex-shrink-0 group">
                        {/* Outer Static Border (Empty Space) */}
                        <div className="absolute inset-0 border border-[#181825] z-0"></div>

                        {/* Decor: Corners (Outer) */}
                        <motion.div
                            className="absolute -top-2 -left-2 w-2 h-2 z-20"
                            animate={{ x: [0, -4, 0, 0], y: [0, -4, 0, 0] }}
                            transition={{ duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity }}
                        >
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#f0f0ff]"></div>
                            <div className="absolute top-0 left-0 w-[1px] h-full bg-[#f0f0ff]"></div>
                        </motion.div>

                        <motion.div
                            className="absolute -top-2 -right-2 w-2 h-2 z-20"
                            animate={{ x: [0, 4, 0, 0], y: [0, -4, 0, 0] }}
                            transition={{ duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity }}
                        >
                            <div className="absolute top-0 right-0 w-full h-[1px] bg-[#f0f0ff]"></div>
                            <div className="absolute top-0 right-0 w-[1px] h-full bg-[#f0f0ff]"></div>
                        </motion.div>

                        <motion.div
                            className="absolute -bottom-2 -left-2 w-2 h-2 z-20"
                            animate={{ x: [0, -4, 0, 0], y: [0, 4, 0, 0] }}
                            transition={{ duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity }}
                        >
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#f0f0ff]"></div>
                            <div className="absolute bottom-0 left-0 w-[1px] h-full bg-[#f0f0ff]"></div>
                        </motion.div>

                        <motion.div
                            className="absolute -bottom-2 -right-2 w-2 h-2 z-20"
                            animate={{ x: [0, 4, 0, 0], y: [0, 4, 0, 0] }}
                            transition={{ duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity }}
                        >
                            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-[#f0f0ff]"></div>
                            <div className="absolute bottom-0 right-0 w-[1px] h-full bg-[#f0f0ff]"></div>
                        </motion.div>

                        {/* Inner Active Container (Compact) */}
                        <div className="absolute inset-0 m-auto w-[75%] h-[75%]">
                            {/* Active Borders - 4 Layers */}

                            {/* Main Background & Logo */}
                            <div
                                className="relative w-full h-full bg-[#01010d] flex items-center justify-center overflow-hidden z-0"
                                style={{
                                    boxShadow: "rgba(80, 80, 138, 0.73) 0px 0.706592px 0.706592px -0.666667px, rgba(80, 80, 138, 0.71) 0px 1.80656px 1.80656px -1.33333px, rgba(80, 80, 138, 0.68) 0px 3.62176px 3.62176px -2px, rgba(80, 80, 138, 0.62) 0px 6.8656px 6.8656px -2.66667px, rgba(80, 80, 138, 0.49) 0px 13.6468px 13.6468px -3.33333px, rgba(80, 80, 138, 0.19) 0px 30px 30px -4px",
                                    opacity: 1
                                }}
                            >
                                {/* Logo Image - pure CSS construction */}
                                <div className="relative z-10 w-[55%] h-[55%] bg-white flex items-center justify-center">
                                    <div className="w-[50%] h-[50%] bg-[#01010d]"></div>
                                </div>
                            </div>

                            {/* Bottom Glow/Border - Moved outside to glow downwards */}
                            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#f0f0ff] shadow-[0_9px_20px_#f0f0ff] z-20 overflow-hidden"></div>
                        </div>
                    </div>

                    {/* Wordmark */}
                    <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white drop-shadow-2xl">
                        Twarimitswe
                    </h1>
                </div>

                {/* Subtitle */}
                <p className="max-w-2xl text-gray-400 text-lg md:text-xl font-light leading-relaxed tracking-wide">
                    Custom AI solutions, built for the innovators of tomorrow — expertly crafted to seamlessly scale your vision faster than ever
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 mt-4 w-full justify-center">
                    <motion.button
                        whileHover="hover"
                        initial="initial"
                        className="hidden md:flex relative group items-center cursor-pointer gap-2 px-6 py-3 text-sm transition-colors border border-[#b8b8ff]/40 bg-[radial-gradient(100%_150%_at_50%_50%,#01010d_0%,#181825_100%)] shadow-[inset_0px_0px_12px_0px_#69699666] text-white"
                    >

                        {/* Corner Animations */}
                        {/* Top Left */}
                        <motion.div
                            className="absolute -top-1 -left-1 w-2 h-2 z-20"
                            variants={{
                                initial: { opacity: 0, x: 0, y: 0 },
                                hover: {
                                    opacity: 1,
                                    x: [0, -4, 0, 0],
                                    y: [0, -4, 0, 0],
                                    transition: {
                                        x: { duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity },
                                        y: { duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity },
                                        opacity: { duration: 0.2 }
                                    }
                                }
                            }}
                        >
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#f0f0ff]"></div>
                            <div className="absolute top-0 left-0 w-[1px] h-full bg-[#f0f0ff]"></div>
                        </motion.div>
                        {/* Top Right */}
                        <motion.div
                            className="absolute -top-1 -right-1 w-2 h-2 z-20"
                            variants={{
                                initial: { opacity: 0, x: 0, y: 0 },
                                hover: {
                                    opacity: 1,
                                    x: [0, 4, 0, 0],
                                    y: [0, -4, 0, 0],
                                    transition: {
                                        x: { duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity },
                                        y: { duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity },
                                        opacity: { duration: 0.2 }
                                    }
                                }
                            }}
                        >
                            <div className="absolute top-0 right-0 w-full h-[1px] bg-[#f0f0ff]"></div>
                            <div className="absolute top-0 right-0 w-[1px] h-full bg-[#f0f0ff]"></div>
                        </motion.div>
                        {/* Bottom Left */}
                        <motion.div
                            className="absolute -bottom-1 -left-1 w-2 h-2 z-20"
                            variants={{
                                initial: { opacity: 0, x: 0, y: 0 },
                                hover: {
                                    opacity: 1,
                                    x: [0, -4, 0, 0],
                                    y: [0, 4, 0, 0],
                                    transition: {
                                        x: { duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity },
                                        y: { duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity },
                                        opacity: { duration: 0.2 }
                                    }
                                }
                            }}
                        >
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#f0f0ff]"></div>
                            <div className="absolute bottom-0 left-0 w-[1px] h-full bg-[#f0f0ff]"></div>
                        </motion.div>
                        {/* Bottom Right */}
                        <motion.div
                            className="absolute -bottom-1 -right-1 w-2 h-2 z-20"
                            variants={{
                                initial: { opacity: 0, x: 0, y: 0 },
                                hover: {
                                    opacity: 1,
                                    x: [0, 4, 0, 0],
                                    y: [0, 4, 0, 0],
                                    transition: {
                                        x: { duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity },
                                        y: { duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity },
                                        opacity: { duration: 0.2 }
                                    }
                                }
                            }}
                        >
                            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-[#f0f0ff]"></div>
                            <div className="absolute bottom-0 right-0 w-[1px] h-full bg-[#f0f0ff]"></div>
                        </motion.div>

                        <span className="relative flex items-center justify-center gap-3 font-medium text-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.13 8.13 0 01-7.89-6.316C2.26 12.016 4.965 7 9.5 7h4c4.535 0 7.24 5.016 4.39 6.684A8.13 8.13 0 0121 12z"></path></svg>
                            Hire Engineer
                        </span>
                    </motion.button>

                    <motion.button
                        whileHover="hover"
                        initial="initial"
                        className="hidden md:flex relative group items-center cursor-pointer gap-2 px-6 py-3 text-sm transition-colors border border-[#b8b8ff]/40 bg-[radial-gradient(100%_150%_at_50%_50%,#01010d_0%,#181825_100%)] shadow-[inset_0px_0px_12px_0px_#69699666] text-white"
                    >
                        {/* Corner Animations */}
                        {/* Top Left */}
                        <motion.div
                            className="absolute -top-1 -left-1 w-2 h-2 z-20"
                            variants={{
                                initial: { opacity: 0, x: 0, y: 0 },
                                hover: {
                                    opacity: 1,
                                    x: [0, -4, 0, 0],
                                    y: [0, -4, 0, 0],
                                    transition: {
                                        x: { duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity },
                                        y: { duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity },
                                        opacity: { duration: 0.2 }
                                    }
                                }
                            }}
                        >
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#f0f0ff]"></div>
                            <div className="absolute top-0 left-0 w-[1px] h-full bg-[#f0f0ff]"></div>
                        </motion.div>
                        {/* Top Right */}
                        <motion.div
                            className="absolute -top-1 -right-1 w-2 h-2 z-20"
                            variants={{
                                initial: { opacity: 0, x: 0, y: 0 },
                                hover: {
                                    opacity: 1,
                                    x: [0, 4, 0, 0],
                                    y: [0, -4, 0, 0],
                                    transition: {
                                        x: { duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity },
                                        y: { duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity },
                                        opacity: { duration: 0.2 }
                                    }
                                }
                            }}
                        >
                            <div className="absolute top-0 right-0 w-full h-[1px] bg-[#f0f0ff]"></div>
                            <div className="absolute top-0 right-0 w-[1px] h-full bg-[#f0f0ff]"></div>
                        </motion.div>
                        {/* Bottom Left */}
                        <motion.div
                            className="absolute -bottom-1 -left-1 w-2 h-2 z-20"
                            variants={{
                                initial: { opacity: 0, x: 0, y: 0 },
                                hover: {
                                    opacity: 1,
                                    x: [0, -4, 0, 0],
                                    y: [0, 4, 0, 0],
                                    transition: {
                                        x: { duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity },
                                        y: { duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity },
                                        opacity: { duration: 0.2 }
                                    }
                                }
                            }}
                        >
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#f0f0ff]"></div>
                            <div className="absolute bottom-0 left-0 w-[1px] h-full bg-[#f0f0ff]"></div>
                        </motion.div>
                        {/* Bottom Right */}
                        <motion.div
                            className="absolute -bottom-1 -right-1 w-2 h-2 z-20"
                            variants={{
                                initial: { opacity: 0, x: 0, y: 0 },
                                hover: {
                                    opacity: 1,
                                    x: [0, 4, 0, 0],
                                    y: [0, 4, 0, 0],
                                    transition: {
                                        x: { duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity },
                                        y: { duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity },
                                        opacity: { duration: 0.2 }
                                    }
                                }
                            }}
                        >
                            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-[#f0f0ff]"></div>
                            <div className="absolute bottom-0 right-0 w-[1px] h-full bg-[#f0f0ff]"></div>
                        </motion.div>

                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                        Our Services
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
