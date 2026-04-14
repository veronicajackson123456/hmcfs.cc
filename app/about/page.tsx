'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function About() {
  const values = [
    {
      title: 'Integrity',
      description: "We do what's right, every time.",
      icon: '✓',
    },
    {
      title: 'Efficiency',
      description: 'We optimise processes for peak performance.',
      icon: '⚡',
    },
    {
      title: 'Confidentiality',
      description: 'Your business information stays secure.',
      icon: '🔒',
    },
    {
      title: 'Partnership',
      description: 'We work as an extension of your team.',
      icon: '🤝',
    },
    {
      title: 'Excellence',
      description: 'We aim for outstanding results in every task.',
      icon: '⭐',
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
              <span className="text-5xl">🎯</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Who We Are
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              HMCFS LTD is a multidisciplinary business support firm committed to helping organisations thrive in every stage of growth. Our mission is simple — to provide professional, reliable, and scalable support that allows you to focus on strategic priorities while we handle the day-to-day complexities of running a business.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mt-6">
              Founded on principles of trust, integrity, and excellence, we bring together a team of specialists with decades of experience across multiple industries — including finance, operations, human resources, advertising, and digital transformation.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">🚀</span>
                  <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To be the most trusted business support partner globally, empowering companies to operate efficiently, grow sustainably, and reach their full potential.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">💡</span>
                  <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To deliver innovative, cost-effective, and comprehensive business solutions that help clients save time, reduce costs, and achieve measurable results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Values
              </h2>
              <span className="text-5xl">💎</span>
            </div>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="p-8 border border-gray-200 rounded-lg hover:shadow-lg hover:border-blue-200 transition-all">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-lg">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center gap-3 justify-center mb-6">
              <span className="text-5xl">🤝</span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Work Together?
              </h2>
            </div>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Let's discuss how MCOL LTD can support your business goals and help you reach new heights
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
