'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Header */}
        <section className="pt-12 md:pt-20 pb-12 md:pb-16 bg-gradient-to-br from-white to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">🔐</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Privacy Policy
              </h1>
            </div>
            <p className="text-gray-600 flex items-center gap-2">
              <span className="text-2xl">📅</span> Last updated: November 4, 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-base max-w-none space-y-8 text-gray-700">
              <div>
                <p className="text-lg leading-relaxed flex items-start gap-3">
                  <span className="text-2xl mt-1">👋</span>
                  <span>
                    Welcome to MCOL LTD's Privacy Policy. This policy describes how we collect, use, and protect your personal information when you visit our website or use our services.
                  </span>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>📊</span> 1. Information We Collect
                </h2>
                <p className="leading-relaxed mb-4">
                  We may collect information from you in the following ways:
                </p>
                <ul className="list-none pl-6 space-y-2">
                  <li className="flex gap-3"><span className="text-lg">👤</span> <span><span className="font-semibold">Contact Information:</span> Name, email address, phone number, and physical address</span></li>
                  <li className="flex gap-3"><span className="text-lg">🏢</span> <span><span className="font-semibold">Company Information:</span> Company name, industry, and business details</span></li>
                  <li className="flex gap-3"><span className="text-lg">📋</span> <span><span className="font-semibold">Service Requests:</span> Information about the services you inquire about</span></li>
                  <li className="flex gap-3"><span className="text-lg">🖥️</span> <span><span className="font-semibold">Automatic Information:</span> IP address, browser type, and pages visited</span></li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>🎯</span> 2. How We Use Your Information
                </h2>
                <p className="leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-none pl-6 space-y-2">
                  <li className="flex gap-3"><span className="text-lg">💬</span> <span>To respond to your inquiries and provide requested services</span></li>
                  <li className="flex gap-3"><span className="text-lg">📧</span> <span>To send you marketing communications (with your consent)</span></li>
                  <li className="flex gap-3"><span className="text-lg">🔧</span> <span>To improve our website and services</span></li>
                  <li className="flex gap-3"><span className="text-lg">📜</span> <span>To comply with legal obligations</span></li>
                  <li className="flex gap-3"><span className="text-lg">🛡️</span> <span>To protect against fraud and security issues</span></li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>🔒</span> 3. Data Protection
                </h2>
                <p className="leading-relaxed">
                  We are committed to protecting your personal information. We implement appropriate technical and organizational measures to secure your data against unauthorized access, alteration, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>⏰</span> 4. Data Retention
                </h2>
                <p className="leading-relaxed">
                  We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. You may request deletion of your information at any time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>🍪</span> 5. Cookies and Tracking
                </h2>
                <p className="leading-relaxed">
                  Our website may use cookies to enhance your experience. You can control cookie settings through your browser preferences. We do not use cookies for tracking or advertising purposes without your consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>🔗</span> 6. Third-Party Links
                </h2>
                <p className="leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>✅</span> 7. Your Rights
                </h2>
                <p className="leading-relaxed mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-none pl-6 space-y-2">
                  <li className="flex gap-3"><span className="text-lg">👁️</span> <span>The right to access your personal information</span></li>
                  <li className="flex gap-3"><span className="text-lg">✏️</span> <span>The right to correct inaccurate data</span></li>
                  <li className="flex gap-3"><span className="text-lg">🗑️</span> <span>The right to request deletion of your data</span></li>
                  <li className="flex gap-3"><span className="text-lg">📴</span> <span>The right to opt-out of marketing communications</span></li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>🇪🇺</span> 8. GDPR Compliance
                </h2>
                <p className="leading-relaxed">
                  For residents of the European Union, we comply with the General Data Protection Regulation (GDPR). We only process personal data with a lawful basis and respect all your rights under GDPR.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>📞</span> 9. Contact Us
                </h2>
                <p className="leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <ul className="list-none pl-6 space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-lg">✉️</span>
                    <span><span className="font-semibold">Email:</span> info@mcol.online</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-lg">📱</span>
                    <span><span className="font-semibold">Phone:</span> +1 (845) 904-7626</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-lg">📍</span>
                    <span><span className="font-semibold">Address:</span> 102 GOLD AVE SW, ALBUQUERQUE, NM 87102</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>🔄</span> 10. Policy Updates
                </h2>
                <p className="leading-relaxed">
                  We reserve the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting to our website. Your continued use of our website constitutes your acceptance of the updated policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
