import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { FileText, Shield, Cookie, AlertCircle, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Legal | MCOL LTD',
  description: 'Access all of MCOL LTD\'s legal documents including Terms & Conditions, Privacy Policy, Cookie Policy, Acceptable Use Policy, and Disclaimer.',
}

const legalDocs = [
  {
    title: 'Terms & Conditions',
    description:
      'The rules and regulations governing your use of our website and services, including payment terms, intellectual property, confidentiality, and governing law.',
    href: '/terms',
    icon: FileText,
    updated: '4 November 2025',
  },
  {
    title: 'Privacy Policy',
    description:
      'How we collect, use, store, and protect your personal data in compliance with UK GDPR and applicable data protection legislation.',
    href: '/privacy',
    icon: Shield,
    updated: '4 November 2025',
  },
  {
    title: 'Cookie Policy',
    description:
      'A detailed explanation of the cookies and tracking technologies we use on our website and how you can manage your preferences.',
    href: '/cookies',
    icon: Cookie,
    updated: '4 November 2025',
  },
  {
    title: 'Acceptable Use Policy',
    description:
      'The standards and restrictions that apply to all users accessing our website and services, including prohibited activities and enforcement.',
    href: '/acceptable-use',
    icon: AlertCircle,
    updated: '4 November 2025',
  },
  {
    title: 'Disclaimer',
    description:
      'Important information about the limitations of the content on our website, including accuracy, professional advice, and liability exclusions.',
    href: '/disclaimer',
    icon: Scale,
    updated: '4 November 2025',
  },
]

export default function LegalHubPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="bg-primary pt-16 pb-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-primary-foreground/70">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-primary-foreground transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-primary-foreground font-medium" aria-current="page">Legal</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground text-balance">
              Legal Information
            </h1>
            <p className="mt-4 text-primary-foreground/75 max-w-2xl leading-relaxed">
              We are committed to transparency and compliance. Find all of our legal documents below, covering everything from how we use your data to the terms under which we provide our services.
            </p>
          </div>
        </section>

        {/* Legal Documents Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {legalDocs.map((doc) => {
                const Icon = doc.icon
                return (
                  <Link
                    key={doc.href}
                    href={doc.href}
                    className="group flex flex-col bg-card border border-border rounded-2xl p-7 hover:border-primary hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h2 className="font-semibold text-foreground group-hover:text-primary transition-colors text-balance leading-snug">
                          {doc.title}
                        </h2>
                        <p className="text-xs text-muted-foreground mt-0.5">Updated {doc.updated}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {doc.description}
                    </p>
                    <div className="mt-5 flex items-center gap-1 text-sm font-medium text-primary">
                      Read document
                      <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-muted border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-foreground mb-3">Have a legal question?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have questions about any of our legal documents, how we handle your data, or your rights, please do not hesitate to contact us. We are happy to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Get in Touch
                </Link>
                <a
                  href="mailto:info@mcol.online"
                  className="inline-flex items-center justify-center border border-border text-foreground font-medium px-6 py-3 rounded-lg hover:bg-background transition-colors"
                >
                  info@mcol.online
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
