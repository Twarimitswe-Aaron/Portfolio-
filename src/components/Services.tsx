
"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const ServiceCard = ({
    title,
    icon,
    className = "",
    glow = false,
    delay = 0
}: {
    title: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
    glow?: boolean;
    delay?: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`relative flex items-center justify-center overflow-hidden border border-[#181825] bg-[#01010d] ${className}`}
        >
            {icon && (
                <div className="absolute inset-0 flex items-center justify-center opacity-50 z-0 pointer-events-none">
                    {icon}
                </div>
            )}

            {/* Glow Effects */}
            {glow && (
                <>
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-50"
                        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(240, 240, 255, 0.05) 0%, rgba(240, 240, 255, 0) 70%)' }}></div>
                </>
            )}

            <div className="relative z-10 flex flex-col items-center justify-center gap-2 p-4 text-center">
                {title}
            </div>

            {/* Corner decorations for that specific technical look */}
            <div className="absolute left-0 top-0 w-1 h-1 bg-[#181825]"></div>
            <div className="absolute right-0 top-0 w-1 h-1 bg-[#181825]"></div>
            <div className="absolute left-0 bottom-0 w-1 h-1 bg-[#181825]"></div>
            <div className="absolute right-0 bottom-0 w-1 h-1 bg-[#181825]"></div>
        </motion.div>
    );
};

export default function Services() {
    return (
        <section className="relative w-full bg-[#01010d] flex justify-center items-center overflow-hidden"
            style={{ fontFamily: '"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif' }}>

            {/* Background Image - Top Aligned */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[853px] h-[628px] z-0 select-none pointer-events-none"
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

            {/* Full-width Top Border */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#181825] z-10"></div>

            {/* Main Container with Borders & Width Constraints */}
            <div className="relative w-[90%] max-w-[1200px] mx-auto border-l border-r border-[#181825] flex flex-col items-center gap-[60px] py-[80px] px-5 md:px-[40px] z-10">

                {/* Header */}
                <div className="flex flex-col items-center gap-4  max-w-2xl text-center">
                    <div className="relative px-5 py-1 border border-[#181825] bg-[#01010d] flex items-center gap-3">
                        <div className="relative z-10">
                            <span className="text-[16px] font-medium text-[#f0f0ff]/50 leading-[1.3em]">Services</span>
                        </div>
                        {/* Corner Dots */}
                        <div className="absolute top-[-1px] left-[-1px] w-[1px] h-[1px] bg-[#f0f0ff]"></div>
                        <div className="absolute top-[-1px] right-[-1px] w-[1px] h-[1px] bg-[#f0f0ff]"></div>
                        <div className="absolute bottom-[-1px] left-[-1px] w-[1px] h-[1px] bg-[#f0f0ff]"></div>
                        <div className="absolute bottom-[-1px] right-[-1px] w-[1px] h-[1px] bg-[#f0f0ff]"></div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#f0f0ff]">
                        <span className="bg-clip-text text-transparent bg-gradient-to-t from-[#f0f0ff80] to-[#f0f0ff]">
                            Our AI-Driven Services
                        </span>
                    </h2>

                    <p className="text-[#f0f0ff80] text-lg">
                        Leverage AI features that boost performance to your business
                    </p>
                </div>

                {/* Main Grid */}
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">

                    {/* Cost Management - Large Card */}
                    <div className="col-span-1 md:col-span-1 row-span-2 relative border-l border-r border-[#181825] bg-[#01010d] overflow-hidden p-6 flex flex-col justify-between w-full md:w-[414px]"
                        style={{ boxSizing: 'border-box' }}>
                        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                            style={{ background: 'radial-gradient(circle at 50% 0%, rgba(240, 240, 255, 0.1) 0%, transparent 70%)' }}></div>

                        {/* Corner Edge Accents */}
                        <div className="absolute top-0 left-0 w-3 h-[1px] bg-[#f0f0ff]"></div>
                        <div className="absolute top-0 left-0 w-[1px] h-3 bg-[#f0f0ff]"></div>

                        <div className="absolute top-0 right-0 w-3 h-[1px] bg-[#f0f0ff]"></div>
                        <div className="absolute top-0 right-0 w-[1px] h-3 bg-[#f0f0ff]"></div>

                        <div className="absolute bottom-0 left-0 w-3 h-[1px] bg-[#f0f0ff]"></div>
                        <div className="absolute bottom-0 left-0 w-[1px] h-3 bg-[#f0f0ff]"></div>

                        <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-[#f0f0ff]"></div>
                        <div className="absolute bottom-0 right-0 w-[1px] h-3 bg-[#f0f0ff]"></div>

                        <div className="relative z-10 opacity-50 mb-8 self-center w-32 h-32 flex items-center justify-center rounded-full border border-[#f0f0ff1a]">
                            <svg className="w-12 h-12 text-[#f0f0ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 2v20M2 12h20" strokeLinecap="round" />
                                <circle cx="12" cy="12" r="10" />
                            </svg>
                        </div>

                        <div className="relative z-10 text-center">
                            <h3 className="text-xl font-medium text-[#f0f0ff] mb-2">Cost Management</h3>
                            <p className="text-sm text-[#f0f0ff80]"></p>
                        </div>
                    </div>


                    {/* Bottom Row: Automated Workflows & Custom AI Agents */}
                    <div className="col-span-1 md:col-span-1 border border-[#181825] bg-[#01010d] p-6 flex flex-col justify-center relative overflow-hidden">
                        {/* Corner Edge Accents */}
                        <div className="absolute top-0 left-0 w-3 h-[1px] bg-[#f0f0ff]"></div>
                        <div className="absolute top-0 left-0 w-[1px] h-3 bg-[#f0f0ff]"></div>
                        <div className="absolute top-0 right-0 w-3 h-[1px] bg-[#f0f0ff]"></div>
                        <div className="absolute top-0 right-0 w-[1px] h-3 bg-[#f0f0ff]"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-[1px] bg-[#f0f0ff]"></div>
                        <div className="absolute bottom-0 left-0 w-[1px] h-3 bg-[#f0f0ff]"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-[#f0f0ff]"></div>
                        <div className="absolute bottom-0 right-0 w-[1px] h-3 bg-[#f0f0ff]"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#f0f0ff05] to-transparent"></div>
                        <h3 className="text-xl font-medium text-[#f0f0ff] mb-2">Automated Workflows</h3>
                        <p className="text-sm text-[#f0f0ff80]">Build seamless, end-to-end processes that execute consistently.</p>
                    </div>

                    <div className="col-span-1 md:col-span-2 border border-[#181825] bg-[#01010d] p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                        {/* Corner Edge Accents */}
                        <div className="absolute top-0 left-0 w-3 h-[1px] bg-[#f0f0ff]"></div>
                        <div className="absolute top-0 left-0 w-[1px] h-3 bg-[#f0f0ff]"></div>
                        <div className="absolute top-0 right-0 w-3 h-[1px] bg-[#f0f0ff]"></div>
                        <div className="absolute top-0 right-0 w-[1px] h-3 bg-[#f0f0ff]"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-[1px] bg-[#f0f0ff]"></div>
                        <div className="absolute bottom-0 left-0 w-[1px] h-3 bg-[#f0f0ff]"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-[#f0f0ff]"></div>
                        <div className="absolute bottom-0 right-0 w-[1px] h-3 bg-[#f0f0ff]"></div>
                        <div className="flex-1">
                            <h3 className="text-xl font-medium text-[#f0f0ff] mb-2">Custom AI Agents</h3>
                            <p className="text-sm text-[#f0f0ff80]">Tailored, intelligent assistants trained on your business logic to work 24/7 across your tools.</p>
                        </div>

                        {/* Code/Terminal Visual */}
                        <div className="w-full md:w-64 h-24 bg-[#050510] border border-[#181825] rounded-lg p-3 font-mono text-xs text-[#f0f0ff80] overflow-hidden opacity-80 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                            <div className="flex gap-1.5 mb-2">
                                <span className="w-2 h-2 rounded-full bg-red-500/50"></span>
                                <span className="w-2 h-2 rounded-full bg-yellow-500/50"></span>
                                <span className="w-2 h-2 rounded-full bg-green-500/50"></span>
                            </div>
                            <p>function process() {'{'}</p>
                            <p className="pl-4">await agent.run();</p>
                            <p>{'}'}</p>
                        </div>
                    </div>
                </div>

                {/* Scrollable Bottom List */}
                <div className="w-full max-w-6xl mt-10 overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#01010d] to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#01010d] to-transparent z-10"></div>

                    <div className="flex gap-6 animate-scroll whitespace-nowrap">
                        {["Cost Effective", "Faster Innovation", "Scalable Solutions", "Data-Driven Decisions", "Personalized Experiences", "Virtual Assistance"].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 px-6 py-3 border border-[#181825] bg-[#01010d] rounded-full">
                                <div className="w-2 h-2 bg-[#f0f0ff] rounded-full opacity-50"></div>
                                <span className="text-[#f0f0ff80] text-sm font-medium">{item}</span>
                            </div>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {["Cost Effective", "Faster Innovation", "Scalable Solutions", "Data-Driven Decisions", "Personalized Experiences", "Virtual Assistance"].map((item, i) => (
                            <div key={`dup-${i}`} className="flex items-center gap-4 px-6 py-3 border border-[#181825] bg-[#01010d] rounded-full">
                                <div className="w-2 h-2 bg-[#f0f0ff] rounded-full opacity-50"></div>
                                <span className="text-[#f0f0ff80] text-sm font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}
