'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
    const [showDuplicate, setShowDuplicate] = useState(false);
    const [showStar, setShowStar] = useState(false);
    const [showDots, setShowDots] = useState(false);
    const [showIcons, setShowIcons] = useState(false);
    const [showRightCard, setShowRightCard] = useState(false);

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let flies: Fly[] = [];

        interface Fly {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            angle: number;
            angleSpeed: number;
        }

        const createFlies = () => {
            const flyCount = 200; // Increased count per request
            flies = [];
            for (let i = 0; i < flyCount; i++) {
                flies.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height, // Full screen (delocalized)
                    size: Math.random() * 1 + 0.5, // Thin but visible (0.5 to 1.5)
                    speedX: (Math.random() - 0.5) * 1.5,
                    speedY: (Math.random() - 0.5) * 1.5,
                    angle: Math.random() * Math.PI * 2,
                    angleSpeed: (Math.random() - 0.5) * 0.1
                });
            }
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createFlies();
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            flies.forEach(fly => {
                // Update position with some erratic movement
                fly.angle += fly.angleSpeed;
                fly.x += fly.speedX + Math.cos(fly.angle) * 0.5;
                fly.y += fly.speedY + Math.sin(fly.angle) * 0.5;

                // Wrap around screen horizontally
                if (fly.x < -10) fly.x = canvas.width + 10;
                if (fly.x > canvas.width + 10) fly.x = -10;

                // Full screen wrap for Y (delocalized)
                if (fly.y < -10) fly.y = canvas.height + 10;
                if (fly.y > canvas.height + 10) fly.y = -10;

                // Draw fly (rect for sharpness)
                ctx.fillStyle = `rgba(220, 220, 255, ${Math.random() * 0.2 + 0.8})`; // Very strong opacity (0.8-1.0)
                ctx.fillRect(fly.x, fly.y, fly.size, fly.size); // Sharp square
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.1,
                staggerDirection: -1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
        exit: { opacity: 0, x: 20, transition: { duration: 0.2 } }
    };

    const itemVariantsInverted = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
        exit: { opacity: 0, x: -20, transition: { duration: 0.2 } }
    };

    useEffect(() => {
        const runAnimationCycle = () => {
            // 1. Start: Star, Dots, and Icons appear
            setShowStar(true);
            setShowDots(true);
            setShowIcons(true);

            // 2. Dots disappear, Card appears (after 1s)
            const cardTimer = setTimeout(() => {
                setShowDots(false);
                setShowDuplicate(true);
            }, 1000);

            // 3. Card disappears (after 3s total time, 2s visible)
            const hideCardTimer = setTimeout(() => {
                setShowDuplicate(false);
            }, 3000);

            // 4. Star disappears (after 3.5s)
            const hideStarTimer = setTimeout(() => {
                setShowStar(false);
            }, 3500);

            // 5. Right Card appears (staggered, e.g. at 2s)
            const rightCardTimer = setTimeout(() => {
                setShowRightCard(true);
            }, 2000);

            // 6. Right Card disappears (at 4s)
            const hideRightCardTimer = setTimeout(() => {
                setShowRightCard(false);
            }, 4000);

            // 7. Icons disappear (after 4.5s)
            const hideIconsTimer = setTimeout(() => {
                setShowIcons(false);
            }, 4500);

            return { cardTimer, hideCardTimer, hideStarTimer, hideIconsTimer, rightCardTimer, hideRightCardTimer };
        };

        const initialTimer = setTimeout(() => {
            let timers = runAnimationCycle();

            // Loop every 5 seconds
            const loopInterval = setInterval(() => {
                timers = runAnimationCycle();
            }, 5000);

            return () => {
                if (timers) {
                    clearTimeout(timers.cardTimer);
                    clearTimeout(timers.hideCardTimer);
                    clearTimeout(timers.hideStarTimer);
                    clearTimeout(timers.hideIconsTimer);
                    clearTimeout(timers.rightCardTimer);
                    clearTimeout(timers.hideRightCardTimer);
                }
                clearInterval(loopInterval);
            };
        }, 1000);

        return () => clearTimeout(initialTimer);
    }, []);

    return (
        <section className="relative w-full min-h-screen bg-[#01010d] text-white overflow-hidden flex flex-col items-center justify-center py-20" style={{ fontFamily: '"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif' }}>

            {/* Flying Dots Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 pointer-events-none"
                style={{ opacity: 1 }} // Subtle global opacity
            />

            {/* Radial Light - Deep Blue Power */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#02021a]/40 rounded-full blur-[100px] z-0 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#01010d]/80 rounded-full blur-[80px] z-0 pointer-events-none" />

            {/* Center Power Glow (New) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] max-h-[1000px] opacity-100 z-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 50%, #01010d 0%, transparent 60%)' }} />

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

            {/* Additional Dark Overlay (Step 579) */}
            <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3, background: 'radial-gradient(75% 64% at 50% 50%, #fff0 17.5676%, #04070d 100%)' }} />

            {/* Dot Pattern (Subtle) */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(80,80,138,0.2)_1px,transparent_1px)] bg-[size:5px_5px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] z-0 pointer-events-none" />

            {/* Floating UI Elements Container */}
            <div className="absolute inset-0 w-full h-full overflow-hidden z-10 pointer-events-none">

                {/* Floating Icons Row (Top Right) */}
                <motion.div
                    className="absolute top-64 right-[10%] z-0 opacity-60"
                    animate={{ x: [-20, 20, -20] }}
                    transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
                >
                    <AnimatePresence mode="wait">
                        {showIcons && (
                            <motion.div
                                key="icons-container"
                                className="flex gap-6"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                {/* Mail */}
                                <motion.div variants={itemVariants} className="relative w-12 h-12 bg-transparent border border-[#181825] backdrop-blur-md flex items-center justify-center">
                                    <div className="absolute -top-px -left-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -top-px -right-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -bottom-px -left-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -bottom-px -right-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <svg className="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="square" strokeLinejoin="miter" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </motion.div>
                                {/* Figma */}
                                <motion.div variants={itemVariants} className="relative w-12 h-12 bg-transparent border border-[#181825] backdrop-blur-md flex items-center justify-center">
                                    <div className="absolute -top-px -left-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -top-px -right-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -bottom-px -left-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -bottom-px -right-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <svg className="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="square" strokeLinejoin="miter" d="M12 2a3 3 0 013 3 3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 013-3zm0 6a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3zm0 6a3 3 0 013 3 3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 013-3zm-6-6a3 3 0 00-3 3 3 3 0 003 3h3v-6H9a3 3 0 00-3 3zm0 6h3v6a3 3 0 01-3-3 3 3 0 010-3z" />
                                    </svg>
                                </motion.div>
                                {/* Notion */}
                                <motion.div variants={itemVariants} className="relative w-12 h-12 bg-transparent border border-[#181825] backdrop-blur-md flex items-center justify-center">
                                    <div className="absolute -top-px -left-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -top-px -right-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -bottom-px -left-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -bottom-px -right-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <svg className="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="square" strokeLinejoin="miter" d="M4 4h16v16H4V4zm4 3v9h1.5l4.5-7v7h1.5V7h-1.5l-4.5 7V7H8z" />
                                    </svg>
                                </motion.div>
                                {/* Spiral/Orb */}
                                <motion.div variants={itemVariants} className="relative w-12 h-12 bg-transparent border border-[#181825] backdrop-blur-md flex items-center justify-center">
                                    <div className="absolute -top-px -left-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -top-px -right-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -bottom-px -left-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -bottom-px -right-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <svg className="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="square" strokeLinejoin="miter" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-4c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z" />
                                    </svg>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Lower Left Blurred Icons (Inverted Flow) */}
                <motion.div
                    className="absolute bottom-32 left-[10%] z-0 opacity-60"
                    style={{ filter: 'blur(2px)' }}
                    animate={{ x: [20, -20, 20] }}
                    transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
                >
                    <AnimatePresence mode="wait">
                        {showIcons && (
                            <motion.div
                                key="icons-container-inverted"
                                className="flex gap-6"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                {/* Mail */}
                                <motion.div variants={itemVariantsInverted} className="relative w-12 h-12 bg-transparent border border-[#181825] backdrop-blur-md flex items-center justify-center">
                                    <div className="absolute -top-px -left-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -top-px -right-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -bottom-px -left-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -bottom-px -right-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <svg className="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="square" strokeLinejoin="miter" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </motion.div>
                                {/* Figma */}
                                <motion.div variants={itemVariantsInverted} className="relative w-12 h-12 bg-transparent border border-[#181825] backdrop-blur-md flex items-center justify-center">
                                    <div className="absolute -top-px -left-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -top-px -right-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -bottom-px -left-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -bottom-px -right-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <svg className="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="square" strokeLinejoin="miter" d="M12 2a3 3 0 013 3 3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 013-3zm0 6a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3zm0 6a3 3 0 013 3 3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 013-3zm-6-6a3 3 0 00-3 3 3 3 0 003 3h3v-6H9a3 3 0 00-3 3zm0 6h3v6a3 3 0 01-3-3 3 3 0 010-3z" />
                                    </svg>
                                </motion.div>
                                {/* Notion */}
                                <motion.div variants={itemVariantsInverted} className="relative w-12 h-12 bg-transparent border border-[#181825] backdrop-blur-md flex items-center justify-center">
                                    <div className="absolute -top-px -left-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -top-px -right-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -bottom-px -left-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -bottom-px -right-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <svg className="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="square" strokeLinejoin="miter" d="M4 4h16v16H4V4zm4 3v9h1.5l4.5-7v7h1.5V7h-1.5l-4.5 7V7H8z" />
                                    </svg>
                                </motion.div>
                                {/* Spiral/Orb */}
                                <motion.div variants={itemVariantsInverted} className="relative w-12 h-12 bg-transparent border border-[#181825] backdrop-blur-md flex items-center justify-center">
                                    <div className="absolute -top-px -left-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -top-px -right-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -bottom-px -left-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -bottom-px -right-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <svg className="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="square" strokeLinejoin="miter" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-4c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z" />
                                    </svg>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Google Meet Card (Relocated Position) */}
                <div
                    className="absolute top-[calc(50%-100px)] left-[calc(50%-550px)] flex flex-row items-center w-[300px] gap-2 opacity-90 z-20"
                >
                    {/* Framer Wrapper */}
                    <div className="flex flex-row items-center h-full w-full gap-2">
                        {/* Text Container */}
                        <div className="relative transform-none items-center flex opacity-100 flex-shrink-0">
                            <div
                                className="relative backdrop-blur-[5px] opacity-100 max-w-[250px] transform-none p-2  bg-transparent"
                                style={{
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    borderColor: '#181825'
                                }}
                            >
                                <div className="opacity-70 transform-none">
                                    <p className="text-xs text-[#0099ff]  decoration-[#0099ff] leading-relaxed">
                                        <span className="text-gray-300 ">Set up a Google Meet with Aaron at 2:00 PM on Thursday.</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Icon Box */}
                        <div className="relative w-10 h-10 bg-transparent border border-[#181825] backdrop-blur-md flex items-center justify-center flex-shrink-0">
                            <div className="absolute -top-px -left-px w-0.5 h-0.5 bg-white rounded-full" />
                            <div className="absolute -top-px -right-px w-0.5 h-0.5 bg-white rounded-full" />
                            <div className="absolute -bottom-px -left-px w-0.5 h-0.5 bg-white rounded-full" />
                            <div className="absolute -bottom-px -right-px w-0.5 h-0.5 bg-white rounded-full" />
                            {/* Icon */}
                            <svg className="w-5 h-5 text-[#f0f0ff] opacity-100" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Right Side Mirrored Card (Aaron) */}
                <AnimatePresence>
                    {showRightCard && (
                        <motion.div
                            key="right-card"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 50, opacity: 0, transition: { duration: 0.5 } }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="absolute top-[calc(50%+50px)] right-[calc(50%-550px)] flex flex-row items-center w-[300px] gap-2 z-20"
                            style={{ filter: 'blur(2px)' }}
                        >
                            <div className="flex flex-row items-center h-full w-full gap-2">
                                {/* Icon Box (Left for Right Card) */}
                                <div className="relative w-7 h-7 bg-transparent border border-[#181825] backdrop-blur-md flex items-center justify-center flex-shrink-0">
                                    <div className="absolute -top-px -left-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -top-px -right-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -bottom-px -left-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -bottom-px -right-px w-0.5 h-0.5 bg-white rounded-full" />
                                    {/* Icon - Using same icon for consistency or snippet's */}
                                    <svg className="w-5 h-5 text-[#f0f0ff] opacity-100" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                    </svg>
                                </div>

                                {/* Text Container */}
                                <div className="relative transform-none items-center flex opacity-100 flex-shrink-0">
                                    <div
                                        className="relative backdrop-blur-[5px] opacity-100 max-w-[250px] transform-none p-2 bg-transparent"
                                        style={{
                                            borderWidth: '1px',
                                            borderStyle: 'solid',
                                            borderColor: '#181825'
                                        }}
                                    >
                                        <div className="opacity-70 transform-none">
                                            <p className="text-xs text-[#0099ff] decoration-[#0099ff] leading-relaxed">
                                                <span className="text-gray-300">Set up a Google Meet with Aaron at 2:00 PM on Thursday.</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Animated Duplicate Group (Flex Container with Fixed Width Star) */}
                <div className="absolute top-[calc(50%-20px)] left-[calc(50%-610px)] flex flex-row items-center gap-0 z-10 pointer-events-none">

                    {/* Fixed Width Star Container (Reserves Space) */}
                    <div className="relative w-[60px] min-h-15 flex-shrink-0 flex items-center justify-center">
                        {/* Animated Star Decoration */}
                        <AnimatePresence>
                            {showStar && (
                                <motion.div
                                    key="star-decor"
                                    initial={{ scale: 0, opacity: 0, rotate: -45 }}
                                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                    exit={{ scale: 0, opacity: 0, rotate: 45, transition: { duration: 0.3 } }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    className="relative w-7 h-7 -top-[4px] bg-transparent border border-[#181825] backdrop-blur-md flex items-center justify-center"
                                >
                                    <div className="absolute -top-px -left-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -top-px -right-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -bottom-px -left-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <div className="absolute -bottom-px -right-px w-0.5 h-0.5 bg-white rounded-full" />
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9L12 0Z" fill="#f0f0ff" fillOpacity="0.8" />
                                    </svg>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Loading Dots (Progressing) */}
                        <AnimatePresence>
                            {showDots && (
                                <motion.div
                                    key="loading-dots"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                                    className="absolute -right-8 top-1/2 -translate-y-1/2 flex gap-1.5 items-center"
                                >
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            className="w-1.5 h-1.5 bg-gray-300 rounded-full"
                                            animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
                                            transition={{
                                                duration: 1.2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: i * 0.15
                                            }}
                                        />
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>


                    </div>

                    {/* Duplicate Google Meet Card (Animated) */}
                    <AnimatePresence>
                        {showDuplicate && (
                            <motion.div
                                key="duplicate-card"
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 20, opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                className="relative flex flex-row items-center w-[300px] gap-2 ml-4"
                            >
                                {/* Framer Wrapper */}
                                <div className="flex flex-row items-center h-full w-full gap-2">
                                    {/* Text Container */}
                                    <div className="relative transform-none items-center flex opacity-100 flex-shrink-0">
                                        <div
                                            className="relative backdrop-blur-[5px] opacity-100 max-w-[250px] transform-none p-2 bg-transparent"
                                            style={{
                                                borderWidth: '1px',
                                                borderStyle: 'solid',
                                                borderColor: '#181825'
                                            }}
                                        >
                                            <div className="opacity-70 transform-none">
                                                <p className="text-xs text-[#0099ff] decoration-[#0099ff] leading-relaxed">
                                                    <span className="text-gray-300">Set up a Google Meet with Aaron at 2:00 PM on Thursday.</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Icon Box */}
                                    <div className="relative w-10 h-10 bg-transparent border border-[#181825] backdrop-blur-md flex items-center justify-center flex-shrink-0">
                                        <div className="absolute -top-px -left-px w-0.5 h-0.5 bg-white rounded-full" />
                                        <div className="absolute -top-px -right-px w-0.5 h-0.5 bg-white rounded-full" />
                                        <div className="absolute -bottom-px -left-px w-0.5 h-0.5 bg-white rounded-full" />
                                        <div className="absolute -bottom-px -right-px w-0.5 h-0.5 bg-white rounded-full" />
                                        {/* Icon */}
                                        <svg className="w-5 h-5 text-[#f0f0ff] opacity-100" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>


            </div>

            {/* Creative Corner Animations */}
            <div className="absolute inset-0 pointer-events-none z-20">
                {/* Top Left */}
                <motion.div
                    className="absolute top-20 left-8 md:top-32 md:left-12 opacity-40"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="w-24 h-[1px] bg-gradient-to-r from-white/50 to-transparent" />
                    <div className="w-[1px] h-24 bg-gradient-to-b from-white/50 to-transparent" />
                    <motion.div
                        className="absolute top-0 left-0 w-2 h-2 bg-white rounded-sm shadow-[0_0_10px_white]"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>

                {/* Top Right */}
                <motion.div
                    className="absolute top-20 right-8 md:top-32 md:right-12 opacity-40"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    <div className="absolute top-0 right-0 w-24 h-[1px] bg-gradient-to-l from-white/50 to-transparent" />
                    <div className="absolute top-0 right-0 w-[1px] h-24 bg-gradient-to-b from-white/50 to-transparent" />
                    <motion.div
                        className="absolute top-0 right-0 w-2 h-2 bg-white rounded-sm shadow-[0_0_10px_white]"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    />
                </motion.div>

                {/* Bottom Left */}
                <motion.div
                    className="absolute bottom-8 left-8 md:bottom-12 md:left-12 opacity-40"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                >
                    <div className="absolute bottom-0 left-0 w-24 h-[1px] bg-gradient-to-r from-white/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-[1px] h-24 bg-gradient-to-t from-white/50 to-transparent" />
                    <motion.div
                        className="absolute bottom-0 left-0 w-2 h-2 bg-white rounded-sm shadow-[0_0_10px_white]"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                </motion.div>

                {/* Bottom Right */}
                <motion.div
                    className="absolute bottom-8 right-8 md:bottom-12 md:right-12 opacity-40"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1.1 }}
                >
                    <div className="absolute bottom-0 right-0 w-24 h-[1px] bg-gradient-to-l from-white/50 to-transparent" />
                    <div className="absolute bottom-0 right-0 w-[1px] h-24 bg-gradient-to-t from-white/50 to-transparent" />
                    <motion.div
                        className="absolute bottom-0 right-0 w-2 h-2 bg-white rounded-sm shadow-[0_0_10px_white]"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                    />
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="relative z-20 flex flex-col items-center text-center max-w-6xl px-4 space-y-4">
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

                        {/* Mid-Point Animations (Synchronized) */}
                        <motion.div
                            className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 z-20"
                            animate={{ y: [0, -4, 0, 0] }}
                            transition={{ duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity }}
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-[#f0f0ff]"></div>
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#f0f0ff]"></div>
                        </motion.div>

                        <motion.div
                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 z-20"
                            animate={{ y: [0, 4, 0, 0] }}
                            transition={{ duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity }}
                        >
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-[#f0f0ff]"></div>
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#f0f0ff]"></div>
                        </motion.div>

                        <motion.div
                            className="absolute top-1/2 -left-2 -translate-y-1/2 w-2 h-2 z-20"
                            animate={{ x: [0, -4, 0, 0] }}
                            transition={{ duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity }}
                        >
                            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-[#f0f0ff]"></div>
                            <div className="absolute top-0 left-0 w-[1px] h-full bg-[#f0f0ff]"></div>
                        </motion.div>

                        <motion.div
                            className="absolute top-1/2 -right-2 -translate-y-1/2 w-2 h-2 z-20"
                            animate={{ x: [0, 4, 0, 0] }}
                            transition={{ duration: 4, times: [0, 0.1, 0.2, 1], ease: "easeOut", repeat: Infinity }}
                        >
                            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-full h-[1px] bg-[#f0f0ff]"></div>
                            <div className="absolute top-0 right-0 w-[1px] h-full bg-[#f0f0ff]"></div>
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
                        Aaron
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
                                initial: { opacity: 1, x: 0, y: 0 },
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
                                initial: { opacity: 1, x: 0, y: 0 },
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
                                initial: { opacity: 1, x: 0, y: 0 },
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
                                initial: { opacity: 1, x: 0, y: 0 },
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

            {/* Bottom Blur Overlay */}
            <div
                className="absolute bottom-0 left-0 w-full h-[200px] backdrop-blur-[10px] z-20 pointer-events-none"
                style={{
                    maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)'
                }}
            />
        </section>
    );
}
