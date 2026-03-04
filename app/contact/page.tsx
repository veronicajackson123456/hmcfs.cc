'use client'

import React from "react"

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Since we don't have a backend, we'll just show a success message
      // In a real application, you would send this to an API endpoint
      console.log('Form submitted:', formData)
      setSubmitMessage('Thank you! We will get back to you within 24 hours.')
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        service: '',
        message: '',
      })
      setTimeout(() => setSubmitMessage(''), 5000)
    } catch (error) {
      setSubmitMessage('Error submitting form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      title: 'Phone',
      content: '+44(0)7424488818',
      icon: Phone,
      link: 'tel:+447424488818',
    },
    {
      title: 'Email',
      content: 'info@mcol.online',
      icon: Mail,
      link: 'mailto:info@mcol.online',
    },
    {
      title: 'Office',
      content: '72 High Street\nEasterton\nDevizes\nWiltshire\nSN10 4PG',
      icon: MapPin,
    },
    {
      title: 'Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM\nWeekend: By Appointment',
      icon: Clock,
    },
  ]

  const benefits = [
    {
      icon: '⚡',
      title: 'Fast Response Time',
      description: 'We respond to all inquiries within 24 hours',
    },
    {
      icon: '🎁',
      title: 'Free Consultation',
      description: 'Get expert advice with no obligation',
    },
    {
      icon: '🎯',
      title: 'Tailored Solutions',
      description: 'Custom packages designed for your business',
    },
    {
      icon: '✓',
      title: 'Proven Track Record',
      description: 'Trusted by businesses across all sectors',
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
              <span className="text-5xl">💬</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Let's Start a Conversation
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 flex items-center gap-2">
              <span className="text-3xl">👋</span>
              We're Here to Help
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              Have a question or ready to transform your business? Get in touch with our team and discover how MCOL LTD can help you succeed.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, idx) => {
                const IconComponent = info.icon
                return (
                  <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex gap-3 mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <h3 className="font-bold text-gray-900">{info.title}</h3>
                    </div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-700 hover:text-blue-600 transition-colors break-all"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-700 whitespace-pre-line">{info.content}</p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 justify-center mb-8">
              <span className="text-5xl">✉️</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Send Us a Message
              </h2>
            </div>
            <p className="text-gray-600 text-center mb-8 text-lg">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            {submitMessage && (
              <div
                className={`p-4 rounded-lg mb-8 text-center font-semibold ${
                  submitMessage.includes('Thank')
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="+44(0)XXXX XXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Service Interested In
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select a service</option>
                  <option value="Administrative Support">Administrative Support</option>
                  <option value="Accounting & Financial Management">Accounting & Financial Management</option>
                  <option value="Credit Control & Debt Recovery">Credit Control & Debt Recovery</option>
                  <option value="Business Consultancy">Business Consultancy</option>
                  <option value="Human Resources & Staffing">Human Resources & Staffing</option>
                  <option value="Marketing & Branding">Marketing & Branding</option>
                  <option value="IT & Digital Solutions">IT & Digital Solutions</option>
                  <option value="Networking & Business Development">Networking & Business Development</option>
                  <option value="Compliance & Legal Administration">Compliance & Legal Administration</option>
                  <option value="Virtual Office & Outsourcing">Virtual Office & Outsourcing</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                  placeholder="Tell us about your business needs..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 justify-center mb-12">
              <span className="text-5xl">🌟</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Work With Us?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-6 p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
                  <div className="text-5xl flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Office Locations */}
        
      </main>
      <Footer />
    </>
  )
}
