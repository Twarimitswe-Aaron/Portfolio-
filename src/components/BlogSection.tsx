'use client';

import Image from 'next/image';

export default function BlogSection() {
    const articles = [
        {
            title: 'Scaling Smarter: How Automation Helps',
            excerpt:
                'Learn how real-life scaling can save time and boost client value without growing your team endlessly.',
            category: 'Article',
            date: 'Nov 14, 2025',
            image: '/images/robot-working.png',
        },
        {
            title: 'The Future of Workflow: Why AI Automation',
            excerpt:
                'Discover how to overcome top operating challenges with intelligent AI-driven automation solutions.',
            category: 'Article',
            date: 'Oct 29, 2025',
            image: '/images/ai-hand.png',
        },
        {
            title: 'Beyond Bots: Real Impact From AI Interaction',
            excerpt:
                'Forget old-school concepts of bots—see how AI goes beyond simple automation.',
            category: 'Resources',
            date: 'Sep 12, 2025',
            image: '/images/neural-network.png',
        },
        {
            title: '5 Ways AI Assistants Are Transforming',
            excerpt:
                'Practical real-life examples proving the changing landscape for AI-driven assistants.',
            category: 'Resources',
            date: 'Sep 12, 2025',
            image: '/images/robot-working.png',
        },
    ];

    return (
        <section id="blog" className="py-20 relative">
            <div className="max-w-[1280px] mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-sm text-[#3b82f6] mb-2 uppercase tracking-wider">
                        Blog
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Insights & Ideas for Growth
                    </h2>
                    <p className="text-[#a0aec0] max-w-2xl mx-auto">
                        Explore expert tips, trends, and strategies shaping the future of automation.
                    </p>
                </div>

                {/* Featured Article */}
                <div className="bg-[#151b28]/60 backdrop-blur-md border border-[#1f2937] rounded-xl transition-all duration-300 hover:border-[#3b82f6]/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] overflow-hidden mb-12">
                    <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative h-64 md:h-auto">
                            <Image
                                src="/images/robot-working.png"
                                alt="Featured article"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8 flex flex-col justify-center">
                            <span className="inline-block px-3 py-1 bg-[#3b82f6] text-white text-xs rounded-full w-fit mb-4">
                                Article
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Scaling Smarter: How Automation Helps
                            </h3>
                            <p className="text-[#a0aec0] mb-6">
                                Learn how real-life scaling can save time and boost client value without
                                growing your team endlessly, utilizing cutting-edge AI.
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-[#a0aec0]">Nov 14, 2025</span>
                                <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white border border-[#1f2937] rounded-lg font-medium transition-all hover:border-[#3b82f6] hover:bg-blue-500/10 cursor-pointer">
                                    Read More
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
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Article Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {articles.slice(1).map((article, index) => (
                        <div key={index} className="bg-[#151b28]/60 backdrop-blur-md border border-[#1f2937] rounded-xl transition-all duration-300 hover:border-[#3b82f6]/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] overflow-hidden group cursor-pointer">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <span className="inline-block px-3 py-1 bg-[#0d1117] text-[#a0aec0] text-xs rounded-full mb-3">
                                    {article.category}
                                </span>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-[#3b82f6] transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-sm text-[#a0aec0] mb-4">
                                    {article.excerpt}
                                </p>
                                <span className="text-xs text-[#a0aec0]">{article.date}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="text-center">
                    <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white border border-[#1f2937] rounded-lg font-medium transition-all hover:border-[#3b82f6] hover:bg-blue-500/10 cursor-pointer">Load More</button>
                </div>
            </div>
        </section>
    );
}
