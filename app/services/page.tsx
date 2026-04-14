'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function Services() {
  const serviceCategories = [
    {
      title: 'Administrative Support',
      icon: '📋',
      description: 'Keep your operations running smoothly with our efficient administrative services.',
      items: [
        'Virtual assistant and secretarial services',
        'Email and calendar management',
        'Document processing and data entry',
        'CRM and database management',
        'Office workflow setup and optimisation',
      ],
    },
    {
      title: 'Business Consultancy',
      icon: '💼',
      description: 'Strategic insight for smarter decisions.',
      items: [
        'Business planning and performance improvement',
        'Market research and feasibility studies',
        'Operational efficiency reviews',
        'Risk and compliance assessment',
        'Change management and restructuring',
      ],
    },
    {
      title: 'Human Resources & Staffing',
      icon: '👥',
      description: 'Build the team your business deserves.',
      items: [
        'Recruitment and onboarding',
        'HR policy creation and compliance',
        'Employee relations and performance management',
        'Payroll and benefits administration',
        'Outsourced HR and interim staffing',
      ],
    },
    {
      title: 'Advertising Services',
      icon: '📺',
      description: 'Creative campaigns and strategic advertising to amplify your brand.',
      items: [
        'Campaign strategy and creative development',
        'Digital advertising and social media ads',
        'Print and outdoor advertising',
        'Media planning and buying',
        'Performance tracking and optimization',
      ],
    },
    {
      title: 'Marketing & Branding',
      icon: '📢',
      description: 'Grow your audience and strengthen your presence.',
      items: [
        'Brand strategy and visual identity',
        'Website content and SEO',
        'Social media management',
        'Email marketing and campaigns',
        'Market positioning and competitor analysis',
      ],
    },
    {
      title: 'IT & Digital Solutions',
      icon: '💻',
      description: 'Empower your business through technology.',
      items: [
        'IT setup, support, and cybersecurity',
        'Software integration and data management',
        'Cloud migration and system optimisation',
        'Digital transformation consulting',
      ],
    },
    {
      title: 'Networking & Business Development',
      icon: '🤝',
      description: 'We connect you to opportunities that help your business grow.',
      items: [
        'B2B matchmaking and introductions',
        'Event organisation and networking support',
        'Supplier and partner sourcing',
        'Strategic collaborations and partnerships',
      ],
    },
    {
      title: 'Compliance & Legal Administration',
      icon: '⚖️',
      description: 'We help ensure your business operates within all legal frameworks.',
      items: [
        'Business registration and licensing',
        'GDPR and data protection',
        'Health and safety documentation',
        'Policy drafting and procedure manuals',
        'Contract support and record-keeping',
      ],
    },
    {
      title: 'Virtual Office & Outsourcing',
      icon: '🏢',
      description: 'Professional presence, zero overheads.',
      items: [
        'Virtual address and call answering',
        'Mail handling and forwarding',
        'Remote admin, HR, or finance teams',
        'Complete back-office outsourcing',
      ],
    },
  ]

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="pt-12 md:pt-20 pb-12 md:pb-16 bg-gradient-to-br from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-5xl">📚</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Our Services
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl flex items-center gap-2">
              <span className="text-3xl">✨</span>
              Complete Support for Every Business Function
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              We understand that every business is unique, which is why we tailor our services to meet your specific needs. Whether you need a single solution or full operational outsourcing, we've got you covered.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategories.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex gap-3 items-start">
                        <span className="text-blue-600 font-bold mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center gap-3 justify-center mb-6">
              <span className="text-5xl">🎁</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Looking for a Complete Support Package?
              </h2>
            </div>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Explore our flexible service bundles and build a solution that fits your business perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center gap-2"
              >
                <span>📊</span> Get a Quote
              </Link>
              <Link
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center flex items-center justify-center gap-2"
              >
                <span>📞</span> Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
