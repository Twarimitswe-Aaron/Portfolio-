'use client';

import Image from 'next/image';

export default function AboutSection() {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left Column - Text */}
                    <div>
                        <p className="text-sm text-[#3b82f6] mb-2 uppercase tracking-wider">
                            Since 2018
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
                        <div className="space-y-4 text-[#a0aec0]">
                            <p>
                                At VOIDAI, we bridge the gap between innovation and impact. Our mission is to
                                empower businesses with advanced AI solutions that drive real results.
                            </p>
                            <p>
                                We believe in the transformative power of AI—it's about transforming the way
                                you work, solve problems, and deliver value. Our team of experts craft solutions
                                tailored to your unique challenges, helping you streamline operations, unlock
                                new opportunities, and stay ahead in a rapidly evolving digital landscape.
                            </p>
                            <p>
                                Whether you're implementing workflows, building complex simulations, or scaling
                                with AI, we're here to be your trusted partner in navigating the future of business.
                            </p>
                        </div>
                        <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#3b82f6] text-white rounded-lg font-medium transition-all hover:bg-[#2563eb] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 border-none cursor-pointer mt-8">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            Book A Call
                        </button>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative">
                        <div className="bg-[#151b28]/60 backdrop-blur-md border border-[#1f2937] rounded-xl transition-all duration-300 hover:border-[#3b82f6]/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] overflow-hidden">
                            <Image
                                src="/images/robot-working.png"
                                alt="AI Robot Working"
                                width={600}
                                height={600}
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Stats Card */}
                        <div className="absolute -bottom-8 -left-8 bg-[#151b28]/60 backdrop-blur-md border border-[#1f2937] rounded-xl p-6 border-[#3b82f6]">
                            <h3 className="text-3xl font-bold bg-gradient-to-br from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent mb-2">AI Achievements</h3>
                            <p className="text-sm text-[#a0aec0]">
                                Cutting-edge solutions since 2018, with 92% client efficiency
                            </p>
                            <p className="text-sm text-[#a0aec0]">
                                increase through AI integration.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Banner */}
                <div className="bg-[#151b28]/60 backdrop-blur-md border border-[#1f2937] rounded-xl p-8 text-center">
                    <p className="text-sm text-[#a0aec0] flex items-center justify-center gap-2 flex-wrap">
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        Feel free to mail us for any enquiries -{' '}
                        <a
                            href="mailto:voidai@support.com"
                            className="text-white hover:text-[#3b82f6] transition-colors"
                        >
                            voidai@support.com
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
