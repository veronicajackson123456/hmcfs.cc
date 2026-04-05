import type { Metadata } from 'next'
import LegalLayout from '@/components/legal-layout'

export const metadata: Metadata = {
  title: 'Privacy Policy | MCOL LTD',
  description: 'Learn how MCOL LTD collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="4 November 2025"
      description="At MCOL LTD, we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully. If you disagree with its terms, please discontinue use of our site."
      sections={[
        {
          title: 'Information We Collect',
          content: (
            <>
              <p>We may collect personal information from you in the following ways:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>
                  <strong className="text-foreground">Contact Information:</strong> Name, email address, telephone number, and postal address when you contact us or submit an enquiry form.
                </li>
                <li>
                  <strong className="text-foreground">Business Information:</strong> Company name, industry, job title, and other business details relevant to the services you request.
                </li>
                <li>
                  <strong className="text-foreground">Communications:</strong> Records of correspondence if you contact us by email, phone, or any other means.
                </li>
                <li>
                  <strong className="text-foreground">Technical Data:</strong> IP address, browser type and version, time zone setting, browser plug-in types, operating system, and other technology used to access our website.
                </li>
                <li>
                  <strong className="text-foreground">Usage Data:</strong> Information about how you use our website, products, and services, including page visits and referring URLs.
                </li>
              </ul>
            </>
          ),
        },
        {
          title: 'How We Use Your Information',
          content: (
            <>
              <p>We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>To respond to your enquiries and provide the services you have requested</li>
                <li>To manage our relationship with you, including notifying you of changes to our services</li>
                <li>To send you marketing communications where you have consented to receive them</li>
                <li>To improve our website, products, and services through analytics</li>
                <li>To comply with legal and regulatory obligations</li>
                <li>To detect, prevent, and address technical issues or fraudulent activity</li>
                <li>To administer and protect our business and this website</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Legal Basis for Processing',
          content: (
            <>
              <p>
                We only process your personal data where we have a lawful basis for doing so under the UK GDPR. The legal bases we rely on include:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li><strong className="text-foreground">Contract:</strong> Processing necessary to perform a contract with you or to take steps at your request before entering into a contract</li>
                <li><strong className="text-foreground">Legitimate Interests:</strong> Processing necessary for our legitimate business interests, provided these are not overridden by your rights</li>
                <li><strong className="text-foreground">Legal Obligation:</strong> Processing necessary to comply with a legal obligation</li>
                <li><strong className="text-foreground">Consent:</strong> Where you have given us your explicit consent, such as for marketing communications</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Data Sharing and Disclosure',
          content: (
            <>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties for marketing purposes. We may share your data in the following limited circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li><strong className="text-foreground">Service Providers:</strong> Trusted third-party companies who assist us in operating our business, subject to confidentiality agreements</li>
                <li><strong className="text-foreground">Legal Requirements:</strong> When required by law, regulation, or legal process</li>
                <li><strong className="text-foreground">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, where personal data may be transferred</li>
                <li><strong className="text-foreground">Protection of Rights:</strong> When necessary to protect the rights, property, or safety of MCOL LTD, our clients, or others</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Data Security',
          content: (
            <p>
              We have implemented appropriate technical and organisational security measures to protect your personal data against unauthorised or unlawful processing, accidental loss, destruction, or damage. These include secure servers, encryption, access controls, and regular security reviews. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          ),
        },
        {
          title: 'Data Retention',
          content: (
            <p>
              We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. To determine the appropriate retention period, we consider the amount, nature, and sensitivity of the data, the potential risk of harm from unauthorised use or disclosure, and the applicable legal requirements. You may request deletion of your data at any time, subject to our legal obligations.
            </p>
          ),
        },
        {
          title: 'Cookies and Tracking',
          content: (
            <>
              <p>
                Our website uses cookies and similar tracking technologies to enhance your experience and analyse site usage. Cookies are small files placed on your device when you visit our website.
              </p>
              <p className="mt-3">
                We use essential cookies required for the site to function, and where you have consented, we may use analytics cookies to understand how visitors interact with our website. You can control and manage cookies through your browser settings. For full details, please refer to our <strong className="text-foreground">Cookie Policy</strong>.
              </p>
            </>
          ),
        },
        {
          title: 'Your Rights Under UK GDPR',
          content: (
            <>
              <p>Under the UK General Data Protection Regulation, you have the following rights in relation to your personal data:</p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li><strong className="text-foreground">Right of Access:</strong> To request a copy of the personal data we hold about you</li>
                <li><strong className="text-foreground">Right to Rectification:</strong> To request correction of inaccurate or incomplete data</li>
                <li><strong className="text-foreground">Right to Erasure:</strong> To request deletion of your personal data in certain circumstances</li>
                <li><strong className="text-foreground">Right to Restriction:</strong> To request that we restrict processing of your data</li>
                <li><strong className="text-foreground">Right to Data Portability:</strong> To receive your data in a structured, machine-readable format</li>
                <li><strong className="text-foreground">Right to Object:</strong> To object to processing based on legitimate interests or for direct marketing</li>
                <li><strong className="text-foreground">Rights related to automated decision-making:</strong> Not to be subject to decisions made solely by automated processing</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at <a href="mailto:info@mcol.online" className="text-primary hover:underline">info@mcol.online</a>. You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ico.org.uk</a>.
              </p>
            </>
          ),
        },
        {
          title: 'Third-Party Links',
          content: (
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party websites you visit, as we have no control over and assume no responsibility for their content or practices.
            </p>
          ),
        },
        {
          title: 'Changes to This Policy',
          content: (
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. We will notify you of any significant changes by updating the &quot;Last updated&quot; date at the top of this page. We encourage you to review this page periodically. Your continued use of our website constitutes acceptance of the updated policy.
            </p>
          ),
        },
      ]}
    />
  )
}
