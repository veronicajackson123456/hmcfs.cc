import type { Metadata } from 'next'
import LegalLayout from '@/components/legal-layout'

export const metadata: Metadata = {
  title: 'Disclaimer | MCOL LTD',
  description: 'Read the legal disclaimer governing information provided on the MCOL LTD website.',
}

export default function DisclaimerPage() {
  return (
    <LegalLayout
      title="Disclaimer"
      lastUpdated="4 November 2025"
      description="The information contained on this website is provided by MCOL LTD for general informational purposes only. While we endeavour to keep information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website."
      sections={[
        {
          title: 'General Information Only',
          content: (
            <p>
              The content on this website is intended to provide a general overview of our services and does not constitute professional advice of any kind. The information should not be relied upon as a substitute for formal advice from a qualified professional — including but not limited to legal, financial, accounting, HR, or business advice — tailored to your specific circumstances.
            </p>
          ),
        },
        {
          title: 'No Warranty',
          content: (
            <>
              <p>
                To the fullest extent permitted by law, MCOL LTD expressly excludes:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>All conditions, warranties, representations, or other terms that may apply to our website or any content on it, whether express or implied</li>
                <li>Any liability for any direct, indirect, or consequential loss or damage incurred by any user in connection with our website or in connection with the use, inability to use, or results of the use of our website, any websites linked to it, and any materials posted on it</li>
              </ul>
              <p className="mt-3">
                This does not affect any liability we cannot exclude or limit under applicable law.
              </p>
            </>
          ),
        },
        {
          title: 'Accuracy of Information',
          content: (
            <p>
              While we take reasonable steps to ensure the accuracy of the information provided on our website, we cannot guarantee that it is free from errors or omissions. Information may become out of date over time, and we reserve the right to update, change, or remove content at any time without notice. You should independently verify any information before relying on it.
            </p>
          ),
        },
        {
          title: 'External Links',
          content: (
            <p>
              Our website may contain links to external websites that are not operated or controlled by MCOL LTD. We have no control over the content, nature, or availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them. We accept no responsibility for the content of any linked website, or any loss or damage that may arise from your use of them.
            </p>
          ),
        },
        {
          title: 'Professional Services Disclaimer',
          content: (
            <p>
              The services described on this website are provided in accordance with individual service agreements entered into between MCOL LTD and each client. Descriptions of services on this website are for illustrative purposes and do not represent a binding commitment. Actual services, deliverables, timelines, and fees are governed exclusively by the terms of any formal engagement between MCOL LTD and the client.
            </p>
          ),
        },
        {
          title: 'Limitation of Liability',
          content: (
            <>
              <p>
                Nothing in this disclaimer will:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>Limit or exclude our liability for death or personal injury resulting from negligence</li>
                <li>Limit or exclude our liability for fraud or fraudulent misrepresentation</li>
                <li>Limit any of our liabilities in any way that is not permitted under applicable law</li>
                <li>Exclude any of our liabilities that may not be excluded under applicable law</li>
              </ul>
              <p className="mt-3">
                Subject to the above, our total liability to you for any loss or damage arising under or in connection with the use of our website shall not exceed &pound;100.
              </p>
            </>
          ),
        },
        {
          title: 'Intellectual Property',
          content: (
            <p>
              All intellectual property rights in any content displayed on this website — including but not limited to text, graphics, logos, icons, images, audio clips, and software — are owned by or licensed to MCOL LTD. Such works are protected by copyright, trade mark, and other applicable laws. No content may be copied, reproduced, distributed, or otherwise used without the prior written permission of MCOL LTD.
            </p>
          ),
        },
        {
          title: 'Governing Law',
          content: (
            <p>
              This disclaimer and any dispute or claim arising out of or in connection with it (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of England and Wales. The courts of England and Wales shall have exclusive jurisdiction to settle any dispute or claim arising from or related to this disclaimer.
            </p>
          ),
        },
      ]}
    />
  )
}
