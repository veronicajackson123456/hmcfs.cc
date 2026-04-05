import type { Metadata } from 'next'
import LegalLayout from '@/components/legal-layout'

export const metadata: Metadata = {
  title: 'Terms & Conditions | MCOL LTD',
  description: 'Read the Terms and Conditions governing your use of MCOL LTD services and website.',
}

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      lastUpdated="4 November 2025"
      description="Please read these Terms and Conditions carefully before using our website or services. By accessing or using our website, you agree to be bound by these terms. If you do not agree with any part of these terms, please do not use our website or services. These Terms and Conditions apply to all visitors, users, and others who access or use the service."
      sections={[
        {
          title: 'Interpretation and Definitions',
          content: (
            <>
              <p>
                In these Terms, <strong className="text-foreground">"Company"</strong>, <strong className="text-foreground">"We"</strong>, <strong className="text-foreground">"Our"</strong>, or <strong className="text-foreground">"Us"</strong> refers to <strong className="text-foreground">MCOL LTD</strong>, a company registered in England and Wales (Company No. 17069019), with a registered address at 72 High Street, Easterton, Devizes, Wiltshire, SN10 4PG.
              </p>
              <p>
                <strong className="text-foreground">"Client"</strong>, <strong className="text-foreground">"You"</strong>, or <strong className="text-foreground">"Your"</strong> refers to the individual or business accessing or using our website or services. <strong className="text-foreground">"Services"</strong> means all services provided by MCOL LTD, including but not limited to business support, IT, and digital services.
              </p>
            </>
          ),
        },
        {
          title: 'Use of Our Website',
          content: (
            <>
              <p>
                You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others or restrict or inhibit their use and enjoyment of the site. Prohibited behaviour includes, but is not limited to:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>Transmitting any material that is defamatory, offensive, or otherwise objectionable</li>
                <li>Engaging in any conduct that disrupts or interferes with our services</li>
                <li>Attempting to gain unauthorised access to any part of our website or systems</li>
                <li>Using the website for fraudulent or deceptive purposes</li>
                <li>Harvesting or collecting information about other users without consent</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Services',
          content: (
            <>
              <p>
                MCOL LTD provides business support, IT, and digital services. All services are subject to individual agreements and may require written confirmation or payment prior to commencement. We reserve the right to modify, suspend, or discontinue any service at any time without notice.
              </p>
              <p>
                Service descriptions on our website are provided for general informational purposes. Specific deliverables, timelines, and pricing are agreed upon in separate service agreements or statements of work.
              </p>
            </>
          ),
        },
        {
          title: 'Intellectual Property',
          content: (
            <p>
              All content on this website — including text, images, graphics, logos, and software — is the property of MCOL LTD or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, transmit, or exploit any materials without our prior written consent. Any unauthorised use may result in legal action.
            </p>
          ),
        },
        {
          title: 'Limitation of Liability',
          content: (
            <>
              <p>
                To the fullest extent permitted by law, MCOL LTD shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, our website or services. This includes, without limitation, damages for loss of profits, data, goodwill, or other intangible losses.
              </p>
              <p>
                Our total cumulative liability in connection with our services or these Terms shall not exceed the total fees paid by you for the specific service giving rise to the claim in the twelve (12) months preceding the date of the claim.
              </p>
            </>
          ),
        },
        {
          title: 'Payment Terms',
          content: (
            <>
              <p>
                Payments for our services must be made in accordance with the terms stated in the applicable service agreement or invoice. Unless otherwise agreed in writing:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>Invoices are due within 30 days of the invoice date</li>
                <li>Late payments may incur interest charges at 8% above the Bank of England base rate</li>
                <li>Persistent non-payment may result in suspension or termination of services</li>
                <li>All prices are exclusive of VAT unless otherwise stated</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Confidentiality',
          content: (
            <p>
              Both parties agree to keep confidential all proprietary, technical, or business information shared during the course of a business relationship. MCOL LTD will not disclose your confidential information to third parties without your prior written consent, except where required by law or regulation. This obligation survives the termination of any service agreement.
            </p>
          ),
        },
        {
          title: 'Termination',
          content: (
            <>
              <p>
                Either party may terminate a service agreement with written notice as specified in that agreement. We reserve the right to terminate or suspend access to our website or services immediately, without prior notice or liability, for any reason including, but not limited to, a breach of these Terms.
              </p>
              <p>
                Upon termination, all outstanding fees for completed work must be paid in full. Any provisions of these Terms that by their nature should survive termination shall remain in effect.
              </p>
            </>
          ),
        },
        {
          title: 'Governing Law',
          content: (
            <p>
              These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales. If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
            </p>
          ),
        },
        {
          title: 'Changes to Terms',
          content: (
            <p>
              MCOL LTD reserves the right to modify or replace these Terms at any time. We will notify users of material changes by updating the "Last updated" date at the top of this page. Your continued use of the website following the posting of changes constitutes your acceptance of those changes. We encourage you to review these Terms periodically.
            </p>
          ),
        },
      ]}
    />
  )
}
