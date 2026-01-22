'use client';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 bg-[#0a0e1a] text-white overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Advanced AI solutions,
                        <br />
                        <span className="text-gradient">designed for future</span>
                        <br />
                        focused teams and innovators.
                    </h1>

                    <p className="text-lg md:text-xl text-[#a0aec0] max-w-2xl mx-auto">
                        Harness the power of artificial intelligence to transform your business
                        and unlock unprecedented growth opportunities.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                        <button className="flex items-center gap-2 px-6 py-3 bg-[#3b82f6] text-white rounded-lg hover:bg-blue-600 transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-500/30 font-medium">
                            Book A Free Call
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
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>

                        <button className="flex items-center gap-2 px-6 py-3 bg-transparent border border-[#1f2937] text-white rounded-lg hover:border-[#3b82f6] hover:bg-blue-500/10 transition-all font-medium">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
        </section>
    );
}
