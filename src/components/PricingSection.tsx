'use client';

export default function PricingSection() {
    const pricingTiers = [
        {
            name: 'Starter',
            price: '$1000',
            period: '/month',
            popular: false,
            features: [
                '5 Advanced Workflows',
                'Email AI Assistant Access',
                'Email & Slack Integrations',
                'Monthly Performance Reports',
                'Email Support',
            ],
        },
        {
            name: 'Pro',
            price: '$1250',
            period: '/month',
            popular: true,
            features: [
                '20+ Advanced Workflows',
                'Advanced AI Assistant Features',
                'All Workflow Strategy Tools',
                'CRM + Marketing Tool Integrations',
                'Priority Support',
            ],
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: '',
            popular: false,
            features: [
                'Unlimited Custom Workflows',
                'Dedicated AI Strategist',
                'API & Private Integrations',
                'Real-time Performance Dashboards',
                '24/7 Premium Support + SLA',
            ],
        },
    ];

    return (
        <section id="pricing" className="py-20 relative">
            <div className="max-w-[1280px] mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-sm text-[#3b82f6] mb-2 uppercase tracking-wider">
                        Pricing
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Simple Price For All
                    </h2>
                    <p className="text-[#a0aec0] max-w-2xl mx-auto">
                        Flexible pricing plans built to scale with your business needs.
                    </p>
                </div>

                {/* Pricing Toggle */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex items-center gap-4 bg-[#151b28]/60 backdrop-blur-md border border-[#1f2937] rounded-xl p-1">
                        <button className="px-6 py-2 rounded-lg bg-[#3b82f6] text-white font-medium">
                            Monthly
                        </button>
                        <button className="px-6 py-2 rounded-lg text-[#a0aec0] hover:text-white transition-colors">
                            Yearly
                        </button>
                        <span className="text-sm text-[#a0aec0]">Save 20%</span>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingTiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`bg-[#151b28]/60 backdrop-blur-md border border-[#1f2937] rounded-xl p-8 transition-all duration-300 hover:border-[#3b82f6]/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] ${tier.popular ? 'border-[#3b82f6] relative' : ''
                                }`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#3b82f6] text-white px-4 py-1 rounded-full text-sm">
                                    Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-4">{tier.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold">{tier.price}</span>
                                    {tier.period && (
                                        <span className="text-[#a0aec0]">{tier.period}</span>
                                    )}
                                </div>
                            </div>

                            <button className={tier.popular ? 'inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#3b82f6] text-white rounded-lg font-medium transition-all hover:bg-[#2563eb] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 border-none cursor-pointer w-full' : 'inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white border border-[#1f2937] rounded-lg font-medium transition-all hover:border-[#3b82f6] hover:bg-blue-500/10 cursor-pointer w-full'}>
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
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                                Get Started
                            </button>

                            <div className="mt-8 space-y-4">
                                <p className="font-semibold text-sm">What's Included:</p>
                                <ul className="space-y-3">
                                    {tier.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3 text-sm">
                                            <svg
                                                className="w-5 h-5 text-[#3b82f6] flex-shrink-0 mt-0.5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-[#a0aec0]">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-sm text-[#a0aec0] flex items-center justify-center gap-2">
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
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        We donate 2% of our membership to platform wellbeing
                    </p>
                </div>
            </div>
        </section>
    );
}
