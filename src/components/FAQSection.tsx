'use client';

export default function FAQSection() {
    const faqs = [
        {
            question: 'What services do you offer?',
            answer:
                'We specialize in AI solutions, including machine learning, predictive analytics, and automation platforms designed to streamline operations and drive growth.',
        },
        {
            question: 'How long does it take to develop an AI solution?',
            answer:
                'Development timelines vary based on project complexity. Simple solutions can be deployed in 4-6 weeks, while enterprise-grade systems may take 3-6 months.',
        },
        {
            question: 'Do I need technical expertise to work with you?',
            answer:
                'Not at all! Our team handles all technical aspects and provides comprehensive training and support to ensure smooth adoption.',
        },
        {
            question: 'Do you take when working with you or agency?',
            answer:
                'We offer flexible engagement models including project-based, retainer, and dedicated team arrangements to suit your needs.',
        },
        {
            question: 'How long does project usually take?',
            answer:
                'Project duration depends on scope and complexity. We provide detailed timelines during the consultation phase and maintain transparent communication throughout.',
        },
    ];

    return (
        <section className="py-20 relative">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left Column */}
                    <div>
                        <p className="text-sm text-[#3b82f6] mb-2 uppercase tracking-wider">
                            FAQS
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Your Questions
                            <br />
                            Answered
                        </h2>
                        <p className="text-[#a0aec0] mb-8">
                            Need help? Find answers to common questions, from setup to strategy, to
                            automation success.
                        </p>
                        <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white border border-[#1f2937] rounded-lg font-medium transition-all hover:border-[#3b82f6] hover:bg-blue-500/10 cursor-pointer">
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

                    {/* Right Column - FAQ Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <details
                                key={index}
                                className="bg-[#151b28]/60 backdrop-blur-md border border-[#1f2937] rounded-xl p-6 cursor-pointer group"
                            >
                                <summary className="flex items-center justify-between font-semibold list-none">
                                    <span>{faq.question}</span>
                                    <svg
                                        className="w-5 h-5 transition-transform group-open:rotate-45"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                </summary>
                                <p className="mt-4 text-[#a0aec0] text-sm leading-relaxed">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>

                {/* Bottom Contact */}
                <div className="mt-16 text-center">
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
