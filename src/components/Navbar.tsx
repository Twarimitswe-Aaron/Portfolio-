'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Projects', href: '#projects' },
        { name: 'Blog', href: '#blog' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
        { name: 'Coming Soon', href: '#coming-soon' },
    ];


    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#01010d]/75 backdrop-blur-[10px] border-b-[2px] border-white/7">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 text-lg font-bold">
                        <div className="w-4 h-4 border-2 border-white"></div>
                        <span className="font-mono">AART</span>
                    </Link>

                    {/* Desktop Navigation - Centered */}
                    <div className="hidden md:flex items-center gap-4 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link, index) => (
                            <div key={link.name} className="flex items-center gap-4">
                                <Link
                                    href={link.href}
                                    className="text-sm font-medium text-white opacity-70 hover:opacity-100 transition-opacity whitespace-nowrap"
                                >
                                    {link.name}
                                </Link>
                                {index < navLinks.length - 1 && (
                                    <div className="w-[3px] h-[3px] bg-[#f0f0ff] rounded-full"></div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <button className="hidden md:flex items-center cursor-pointer gap-2 px-6 py-3 text-sm transition-colors border border-[#b8b8ff]/40 bg-[radial-gradient(100%_150%_at_50%_50%,#01010d_0%,#181825_100%)] shadow-[inset_0px_0px_12px_0px_#69699666] hover:border-opacity-80 text-white">
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        Hire Engineer
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-white/7">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block py-2 text-sm text-white opacity-70 hover:opacity-100 transition-opacity"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="flex items-center gap-2 w-full justify-center px-6 py-3 border border-[#b8b8ff]/40 bg-[radial-gradient(100%_150%_at_50%_50%,#01010d_0%,#181825_100%)] shadow-[inset_0px_0px_12px_0px_#69699666] rounded-none text-sm hover:border-opacity-80 transition-colors mt-4 text-white">
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            Get Template
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}
