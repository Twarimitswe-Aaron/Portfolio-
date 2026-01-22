'use client';

import { useState } from 'react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-[1280px] mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-sm text-[#3b82f6] mb-2 uppercase tracking-wider">
                        Contact
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Reach Us At Anytime
                    </h2>
                    <p className="text-[#a0aec0] max-w-2xl mx-auto">
                        Have questions or need our help? We're here to help you with ideas.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Left Column - Contact Info */}
                    <div className="space-y-6">
                        {/* Email Card */}
                        <div className="bg-[#151b28]/60 backdrop-blur-md border border-[#1f2937] rounded-xl p-6 transition-all duration-300 hover:border-[#3b82f6]/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-6 h-6 text-[#3b82f6]"
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
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Email</h3>
                                    <p className="text-sm text-[#a0aec0] mb-2">
                                        Get in touch with us via email
                                    </p>
                                    <a
                                        href="mailto:voidai@support.com"
                                        className="text-sm text-white hover:text-[#3b82f6] transition-colors"
                                    >
                                        voidai@support.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-[#151b28]/60 backdrop-blur-md border border-[#1f2937] rounded-xl p-6 transition-all duration-300 hover:border-[#3b82f6]/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-6 h-6 text-[#3b82f6]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Phone</h3>
                                    <p className="text-sm text-[#a0aec0] mb-2">
                                        Talk to us—we'd love to hear from you
                                    </p>
                                    <a
                                        href="tel:+919725042546"
                                        className="text-sm text-white hover:text-[#3b82f6] transition-colors"
                                    >
                                        +91 9725042546
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="bg-[#151b28]/60 backdrop-blur-md border border-[#1f2937] rounded-xl p-6 transition-all duration-300 hover:border-[#3b82f6]/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-6 h-6 text-[#3b82f6]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Location</h3>
                                    <p className="text-sm text-[#a0aec0] mb-2">
                                        From to book a call if you'd like more convenience—we're happy to work
                                        you through everything and answer your questions.
                                    </p>
                                    <a
                                        href="#"
                                        className="text-sm text-white hover:text-[#3b82f6] transition-colors underline"
                                    >
                                        Book a call
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="w-full px-4 py-3 bg-[#151b28] border border-[#1f2937] rounded-lg focus:outline-none focus:border-[#3b82f6] transition-colors text-white"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 bg-[#151b28] border border-[#1f2937] rounded-lg focus:outline-none focus:border-[#3b82f6] transition-colors text-white"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                Subject of Enquiry
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-[#151b28] border border-[#1f2937] rounded-lg focus:outline-none focus:border-[#3b82f6] transition-colors text-white"
                                required
                            >
                                <option value="">Regarding Project</option>
                                <option value="general">General Inquiry</option>
                                <option value="support">Technical Support</option>
                                <option value="partnership">Partnership</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                How may we assist you?
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                placeholder="Tell us about your project..."
                                className="w-full px-4 py-3 bg-[#151b28] border border-[#1f2937] rounded-lg focus:outline-none focus:border-[#3b82f6] transition-colors text-white resize-none"
                                required
                            />
                        </div>

                        <button type="submit" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#3b82f6] text-white rounded-lg font-medium transition-all hover:bg-[#2563eb] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 border-none cursor-pointer w-full">
                            Send Your Message
                        </button>
                    </form>
                </div>

                {/* Join Network Banner */}
                <div className="mt-16 bg-[#151b28]/60 backdrop-blur-md border border-[#1f2937] rounded-xl p-8 text-center border-[#3b82f6]">
                    <h3 className="text-2xl font-bold mb-2">
                        Join a growing network of AI-
                        <br />
                        driven innovators
                    </h3>
                    <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white border border-[#1f2937] rounded-lg font-medium transition-all hover:border-[#3b82f6] hover:bg-blue-500/10 cursor-pointer mt-4">
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
                                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                            />
                        </svg>
                        Join Us
                    </button>
                </div>
            </div>
        </section>
    );
}
