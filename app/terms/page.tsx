'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Terms() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Header */}
        <section className="pt-12 md:pt-20 pb-12 md:pb-16 bg-gradient-to-br from-white to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">📋</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Terms and Conditions
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
                    Welcome to <span className="font-bold">MCOL LTD</span>. These Terms and Conditions outline the rules and regulations for the use of our website and services. By accessing or using our website, you agree to comply with these terms. If you disagree with any part of the terms, please do not use our website or services.
                  </span>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>1️⃣</span> Interpretation and Definitions
                </h2>
                <p className="leading-relaxed">
                  In these Terms, "Company", "We", "Our", or "Us" refers to <span className="font-bold">MCOL LTD</span>. "Client", "You", or "Your" refers to the individual or business using our website or services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>🌐</span> 2. Use of Our Website
                </h2>
                <p className="leading-relaxed">
                  You agree to use this website only for lawful purposes and in a manner that does not infringe on the rights of others or restrict their use and enjoyment of the site. You must not use our site to transmit harmful, offensive, or illegal material.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>🛠️</span> 3. Services
                </h2>
                <p className="leading-relaxed">
                  MCOL LTD provides business support, IT, and digital services. All services are subject to individual agreements and may require written confirmation or payment prior to commencement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>📝</span> 4. Intellectual Property
                </h2>
                <p className="leading-relaxed">
                  All content, including text, images, graphics, and code on this website, is the property of MCOL LTD or its licensors. You may not reproduce, distribute, or exploit any materials without prior written consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>⚖️</span> 5. Limitation of Liability
                </h2>
                <p className="leading-relaxed">
                  MCOL LTD shall not be held liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services. Our total liability, in any case, will not exceed the total fees paid by the client for the specific project.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>💳</span> 6. Payment Terms
                </h2>
                <p className="leading-relaxed">
                  Payments for our services must be made as per the terms stated in the service agreement or invoice. Late payments may incur additional charges or suspension of services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>🔒</span> 7. Confidentiality
                </h2>
                <p className="leading-relaxed">
                  We value your trust. Any business, technical, or personal information shared with MCOL LTD will remain confidential and will not be disclosed to third parties without your consent, unless required by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>🚪</span> 8. Termination
                </h2>
                <p className="leading-relaxed">
                  Either party may terminate a service agreement with written notice. Upon termination, all outstanding fees for completed work must be paid in full.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>⚡</span> 9. Governing Law
                </h2>
                <p className="leading-relaxed">
                  These Terms shall be governed and construed in accordance with the laws of the United States and the State of Delaware, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>🔄</span> 10. Changes to Terms
                </h2>
                <p className="leading-relaxed">
                  MCOL LTD reserves the right to modify or replace these Terms at any time. Updates will be posted on this page, and your continued use of the site constitutes acceptance of the new Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>📞</span> 11. Contact Us
                </h2>
                <p className="leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <ul className="list-none pl-6 space-y-3 mt-4">
                  <li className="flex items-center gap-2">
                    <span className="text-lg">✉️</span>
                    <span><span className="font-semibold">Email:</span> info@nccpllc.cc</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-lg">📱</span>
                    <span><span className="font-semibold">Phone:</span> +1 (845) 904-7626</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-lg">📍</span>
                    <span><span className="font-semibold">Address:</span> 102 GOLD AVE SW, ALBUQUERQUE, NM 87102</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-lg">🏷️</span>
                    <span><span className="font-semibold">Company Number:</span> 394282215</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
