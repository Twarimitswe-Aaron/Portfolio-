'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Highlight = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    return (
        <span className={`relative inline-flex items-center justify-center bg-[radial-gradient(66%_75%_at_50%_50%,#01010d_0%,#181825_100%)] border border-[#1f2937]/0 font-sans text-white align-baseline group ${className}`} style={{ verticalAlign: 'middle' }}>
            {/* Corner Accents - 4 Corners Explicitly Positioned */}

            {/* Top Left */}
            <span className="absolute -top-[1px] -left-[1px] w-[1px] h-1 bg-[#f0f0ff]"></span>
            <span className="absolute -top-[1px] -left-[1px] w-1 h-[1px] bg-[#f0f0ff]"></span>

            {/* Top Right */}
            <span className="absolute -top-[1px] -right-[1px] w-[1px] h-1 bg-[#f0f0ff]"></span>
            <span className="absolute -top-[1px] -right-[1px] w-1 h-[1px] bg-[#f0f0ff]"></span>

            {/* Bottom Right */}
            <span className="absolute -bottom-[1px] -right-[1px] w-[1px] h-1 bg-[#f0f0ff]"></span>
            <span className="absolute -bottom-[1px] -right-[1px] w-1 h-[1px] bg-[#f0f0ff]"></span>

            {/* Bottom Left */}
            <span className="absolute -bottom-[1px] -left-[1px] w-[1px] h-1 bg-[#f0f0ff]"></span>
            <span className="absolute -bottom-[1px] -left-[1px] w-1 h-[1px] bg-[#f0f0ff]"></span>

            <div className="relative z-10 items-center px-2 py-0.3 text-center">
                {children}
            </div>
        </span>
    );
};

export default function WhoWeAre() {
    const words = ["slow operations", "human error", "repetitive tasks", "manual workflows"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000); // Change every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full bg-[#01010d] flex justify-center items-center overflow-hidden"
            style={{ fontFamily: '"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif' }}>

            {/* Background Image */}
            {/* Background Image - Centered Fixed Size */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[853px] h-[628px] z-0 select-none pointer-events-none"
                style={{
                    filter: 'brightness(1.24)',
                    opacity: 0.4,
                    mixBlendMode: 'normal'
                }}>
                <img
                    src="/images/who%20we%20are.avif"
                    alt=""
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Main Container with Borders & Width Constraints */}
            <div className="relative w-[90%] max-w-[1200px] mx-auto border-l border-r border-[#181825] flex flex-col items-center gap-[60px] py-[80px] px-5 md:px-[40px] z-10">

                {/* Badge */}
                <div className="relative flex flex-col items-center">
                    <div className="relative px-5 py-1 border border-[#181825] bg-[#01010d] flex items-center gap-3">
                        <div className="relative z-10">
                            <span className="text-[16px] font-medium text-[#f0f0ff]/50 leading-[1.3em]">Who We Are</span>
                        </div>
                        {/* Dots */}
                        <div className="absolute top-[-1px] left-[-1px] w-[1px] h-[1px] bg-[#f0f0ff]"></div>
                        <div className="absolute top-[-1px] right-[-1px] w-[1px] h-[1px] bg-[#f0f0ff]"></div>
                        <div className="absolute bottom-[-1px] left-[-1px] w-[1px] h-[1px] bg-[#f0f0ff]"></div>
                        <div className="absolute bottom-[-1px] right-[-1px] w-[1px] h-[1px] bg-[#f0f0ff]"></div>
                    </div>
                </div>

                {/* Content */}
                {/* Content - Single Text Block Flow */}
                <div className="w-full max-w-5xl text-center leading-relaxed">
                    <div className="text-xl md:text-3xl lg:text-3xl font-medium text-gray-300 tracking-tight inline-block">
                        "We harness
                        <Highlight className="text-xl md:text-3xl lg:text-3xl font-medium tracking-tight align-middle mx-2">your data</Highlight>
                        , understand your audience, and
                        <Highlight className="text-xl md:text-3xl lg:text-3xl font-medium tracking-tight align-middle mx-2">use AI</Highlight>
                        to help your brand rise above the noise. The best part?
                        <Highlight className="text-xl md:text-3xl lg:text-3xl font-medium tracking-tight align-middle mx-2">We execute</Highlight>
                        , too."
                    </div>
                </div>




                {/* Bottom Statement with Slider */}
                <div className="w-full max-w-[840px] flex flex-wrap items-center justify-center gap-[32px] p-[40px] border-t-[2px] border-white/20 relative overflow-hidden box-border">
                    {/* Top Glow Effect */}
                    <div className="absolute top-0 left-0 right-0 h-[60px] pointer-events-none z-0"
                        style={{ background: 'radial-gradient(ellipse at top, rgba(255, 255, 255, 0.2) 0%, transparent 70%)' }}></div>

                    {/* Icon & "Automate away the" */}
                    {/* Icon & "Automate away the" */}
                    <div className="flex items-center gap-3 text-[#f0f0ff]/70 text-xl md:text-3xl lg:text-3xl font-medium tracking-tight py-4 px-6">
                        <svg className="w-5 h-5 text-[#f0f0ff] opacity-70" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.7 }}>
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                        <span style={{ opacity: 0.7 }}>Automate away the</span>
                    </div>

                    {/* Slider Container - Framer Exact Styling */}
                    <div className="relative w-[384px] h-[52px] flex items-center justify-center gap-6 px-3 py-1 overflow-hidden border border-[#181825] bg-[#01010d] box-border">

                        {/* Vertical Glow Effects - Left & Right */}
                        <div className="absolute -left-[65px] top-0 bottom-0 w-[120px] z-0 pointer-events-none"
                            style={{ background: 'radial-gradient(circle at 50% 50%, rgba(240, 240, 255, 0.25) 0%, rgba(240, 240, 255, 0) 50%)' }}></div>

                        <div className="absolute -right-[65px] top-0 bottom-0 w-[120px] z-0 pointer-events-none"
                            style={{ background: 'radial-gradient(circle at 50% 50%, rgba(240, 240, 255, 0.25) 0%, rgba(240, 240, 255, 0) 50%)' }}></div>

                        {/* White Vertical Borders */}
                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#f0f0ff] z-10" style={{ opacity: 1 }}></div>
                        <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-[#f0f0ff] z-10" style={{ opacity: 1 }}></div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="absolute z-20"
                            >
                                <span className="text-xl md:text-3xl lg:text-3xl font-medium text-[#f0f0ff] tracking-tight">
                                    {words[index]}
                                </span>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
