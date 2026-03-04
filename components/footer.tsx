'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/mcol-logo.jpg" 
                alt="MCOL LTD Logo" 
                width={40} 
                height={40}
                className="rounded"
              />
              <h3 className="text-xl font-bold">MCOL LTD</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner in growth, efficiency, and success. Delivering comprehensive business support services worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <span>📎</span> Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span>🏠</span> Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span>🛠️</span> Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span>ℹ️</span> About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span>📧</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <span>📞</span> Contact
            </h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-start gap-2">
                <span className="mt-1">📱</span>
                <span>
                  <span className="font-semibold text-white">Phone:</span>
                  <br />
                  <a href="tel:+447424488818" className="hover:text-white transition-colors">
                    +44(0)7424488818
                  </a>
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="mt-1">✉️</span>
                <span>
                  <span className="font-semibold text-white">Email:</span>
                  <br />
                  <a href="mailto:info@mcol.online" className="hover:text-white transition-colors">
                    info@mcol.online
                  </a>
                </span>
              </p>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <span>⚖️</span> Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span>📋</span> Terms & Conditions
                </Link>
              </li>
              <li>
                
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
            <div>
              <p className="flex items-start gap-2">
                <span className="text-lg mt-0.5">📍</span>
                <span>72 High Street, Easterton, Devizes, Wiltshire, SN10 4PG</span>
              </p>
              <p className="mt-2 flex items-center gap-2">
                <span className="text-lg">🏷️</span> Company No. 17069019
              </p>
            </div>
            <div className="md:text-right">
              <p>&copy; 2025 MCOL LTD. All rights reserved.</p>
              <p className="mt-2 text-xs">✨ Comprehensive Business Support Services</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
