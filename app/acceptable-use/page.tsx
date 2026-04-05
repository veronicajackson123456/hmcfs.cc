import type { Metadata } from 'next'
import LegalLayout from '@/components/legal-layout'

export const metadata: Metadata = {
  title: 'Acceptable Use Policy | MCOL LTD',
  description: 'Read the Acceptable Use Policy governing use of MCOL LTD services and platforms.',
}

export default function AcceptableUsePage() {
  return (
    <LegalLayout
      title="Acceptable Use Policy"
      lastUpdated="4 November 2025"
      description="This Acceptable Use Policy sets out the terms under which you may access and use our website, services, and any associated platforms. By using our services, you agree to comply with this policy. We reserve the right to terminate access to our services if this policy is violated."
      sections={[
        {
          title: 'Overview',
          content: (
            <p>
              MCOL LTD provides business support, IT, and digital services. This policy applies to all users of our website and services, including clients, visitors, and any third parties who access our platforms. We expect all users to act responsibly and with respect for others. Misuse of our services may result in immediate suspension or termination of access.
            </p>
          ),
        },
        {
          title: 'Permitted Use',
          content: (
            <>
              <p>You may use our website and services for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>Accessing information about our services and business support offerings</li>
                <li>Submitting legitimate business enquiries through authorised contact channels</li>
                <li>Using services as agreed in your individual service agreement with MCOL LTD</li>
                <li>Sharing our publicly available content, provided appropriate attribution is given</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Prohibited Activities',
          content: (
            <>
              <p>You must not use our website or services to:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Engage in any unlawful activity or facilitate illegal acts</li>
                <li>Transmit, distribute, or store content that is defamatory, offensive, obscene, or discriminatory</li>
                <li>Send unsolicited communications (spam) or engage in phishing activities</li>
                <li>Attempt to gain unauthorised access to our systems, networks, or data</li>
                <li>Introduce viruses, malware, ransomware, or other harmful or disruptive code</li>
                <li>Use automated tools to scrape, crawl, or harvest data from our website without prior written consent</li>
                <li>Impersonate any person or entity, or falsely claim an affiliation with any person or entity</li>
                <li>Violate the intellectual property rights of MCOL LTD or any third party</li>
                <li>Interfere with or disrupt the integrity or performance of our services or related infrastructure</li>
                <li>Use our services for competitive intelligence, benchmarking, or building a competing product</li>
                <li>Process or store any data in violation of applicable data protection laws</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Content Standards',
          content: (
            <>
              <p>
                Any content you submit to us — including enquiry forms, emails, or documents — must comply with the following standards. Content must:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>Be accurate and provided in good faith</li>
                <li>Not infringe any copyright, database right, trademark, or other intellectual property right of any person</li>
                <li>Not be threatening, abusive, or harassing to any individual or organisation</li>
                <li>Not contain false or misleading statements about yourself, your business, or your intentions</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Security Responsibilities',
          content: (
            <>
              <p>
                If you are provided with login credentials or access to any MCOL LTD platform or service, you are responsible for:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>Keeping your access credentials secure and confidential</li>
                <li>Not sharing your credentials with any unauthorised third parties</li>
                <li>Notifying us immediately if you become aware of any unauthorised use of your account</li>
                <li>Ensuring that your use of our services complies with all applicable laws and regulations</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Monitoring and Enforcement',
          content: (
            <p>
              MCOL LTD reserves the right to monitor use of our website and services for compliance with this policy. We may investigate any suspected breach and take appropriate action, including issuing warnings, suspending or terminating access to our services, and reporting matters to relevant law enforcement authorities. We are not obligated to actively monitor all content or activities but may do so at our discretion.
            </p>
          ),
        },
        {
          title: 'Consequences of Breach',
          content: (
            <>
              <p>
                Any breach of this Acceptable Use Policy may result in one or more of the following actions:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>Immediate, temporary, or permanent withdrawal of your right to use our services</li>
                <li>Legal action against you, including claims for damages or injunctive relief</li>
                <li>Disclosure of relevant information to law enforcement authorities as we deem appropriate</li>
                <li>Reporting of your activities to appropriate regulatory bodies</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Changes to This Policy',
          content: (
            <p>
              We reserve the right to amend this Acceptable Use Policy at any time. Changes will be effective immediately upon publication on our website. Your continued use of our services following any changes constitutes your acceptance of the revised policy. We recommend reviewing this page periodically to ensure you remain compliant.
            </p>
          ),
        },
      ]}
    />
  )
}
