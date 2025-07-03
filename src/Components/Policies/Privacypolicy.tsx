import React from 'react'

const Privacypolicy = () => {
    return (
        <section className="bg-[#0a0a0a] text-white pt-40 pb-26 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300">
                    Privacy Policy
                </h1>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-gray-400 mb-8">
                        Effective:{" "}
                        {new Date().toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                        1. Information We Collect
                    </h2>
                    <div className="bg-[#121212] border border-blue-900/30 rounded-xl p-6 my-4">
                        <h3 className="text-xl font-semibold text-blue-400 mb-3">
                            1.1 Personal Data
                        </h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Contact information (name, email, phone)</li>
                            <li>Business details (company name, job title)</li>
                            <li>
                                Payment information (processed securely via Stripe/PayPal)
                            </li>
                            <li>Project requirements and communication history</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-blue-400 mt-6 mb-3">
                            1.2 Automated Collection
                        </h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>IP addresses and device information</li>
                            <li>Cookies and usage data (via Google Analytics)</li>
                            <li>Website interaction metrics</li>
                        </ul>
                    </div>

                    <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                        2. How We Use Information
                    </h2>
                    <ul className="list-disc pl-5 space-y-2 my-4">
                        <li>Service delivery and project execution</li>
                        <li>Client communication and support</li>
                        <li>Website improvement and analytics</li>
                        <li>Marketing (with opt-out options)</li>
                        <li>Legal compliance and fraud prevention</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                        3. Data Sharing
                    </h2>
                    <div className="bg-[#121212] border border-gray-800 rounded-xl p-6 my-4">
                        <h3 className="text-xl font-semibold text-blue-400 mb-3">
                            3.1 Third Parties
                        </h3>
                        <p>We may share data with:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li>Payment processors (Stripe, PayPal)</li>
                            <li>Cloud service providers (AWS, Google Cloud)</li>
                            <li>Marketing platforms (HubSpot, Mailchimp)</li>
                            <li>When required by law</li>
                        </ul>
                    </div>

                    <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                        4. Your Rights
                    </h2>
                    <ul className="list-disc pl-5 space-y-2 my-4">
                        <li>Access and request copies of your data</li>
                        <li>Request correction or deletion</li>
                        <li>Opt-out of marketing communications</li>
                        <li>Withdraw consent (where applicable)</li>
                        <li>Lodge complaints with regulatory authorities</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                        5. Security Measures
                    </h2>
                    <p>We implement:</p>
                    <ul className="list-disc pl-5 space-y-2 my-4">
                        <li>SSL/TLS encryption</li>
                        <li>Regular security audits</li>
                        <li>Role-based access controls</li>
                        <li>Employee training programs</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                        6. Policy Updates
                    </h2>
                    <p>
                        We will notify users of material changes via email or website notice
                        30 days in advance.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                        7. Contact Us
                    </h2>
                    <p className="text-blue-400">info@nexomark.agency</p>
                </div>
            </div>
        </section>
    )
}

export default Privacypolicy