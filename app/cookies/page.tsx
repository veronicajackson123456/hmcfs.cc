import type { Metadata } from 'next'
import LegalLayout from '@/components/legal-layout'

export const metadata: Metadata = {
  title: 'Cookie Policy | MCOL LTD',
  description: 'Learn how MCOL LTD uses cookies and similar tracking technologies on our website.',
}

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      lastUpdated="4 November 2025"
      description="This Cookie Policy explains how MCOL LTD uses cookies and similar technologies when you visit our website. It explains what these technologies are, why we use them, and your rights to control our use of them. By continuing to use our website, you consent to our use of cookies in accordance with this policy."
      sections={[
        {
          title: 'What Are Cookies?',
          content: (
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the website owners. Cookies allow a website to recognise your device and remember information about your visit, such as your preferred language and other settings.
            </p>
          ),
        },
        {
          title: 'Types of Cookies We Use',
          content: (
            <>
              <p>We use the following categories of cookies on our website:</p>
              <div className="space-y-5 mt-4">
                <div className="pl-4 border-l-2 border-border">
                  <h3 className="font-semibold text-foreground mb-1">Strictly Necessary Cookies</h3>
                  <p className="text-sm">These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. You may disable these by changing your browser settings, but this may affect how the website functions.</p>
                </div>
                <div className="pl-4 border-l-2 border-border">
                  <h3 className="font-semibold text-foreground mb-1">Analytics and Performance Cookies</h3>
                  <p className="text-sm">These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us understand which pages are the most and least popular and see how visitors move around the site. All information collected by these cookies is aggregated and therefore anonymous.</p>
                </div>
                <div className="pl-4 border-l-2 border-border">
                  <h3 className="font-semibold text-foreground mb-1">Functionality Cookies</h3>
                  <p className="text-sm">These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies, some or all of these services may not function properly.</p>
                </div>
                <div className="pl-4 border-l-2 border-border">
                  <h3 className="font-semibold text-foreground mb-1">Marketing and Targeting Cookies</h3>
                  <p className="text-sm">These cookies may be set through our website by our advertising partners. They may be used to build a profile of your interests and show you relevant advertisements on other sites. They do not directly store personal information but are based on uniquely identifying your browser and internet device. We only set these cookies with your explicit consent.</p>
                </div>
              </div>
            </>
          ),
        },
        {
          title: 'Third-Party Cookies',
          content: (
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements, and so on. These third parties have their own privacy policies and cookie practices. We do not control these third-party cookies. Please refer to the relevant third party&apos;s website for more information about their cookies and how to manage them.
            </p>
          ),
        },
        {
          title: 'How Long Do Cookies Last?',
          content: (
            <>
              <p>Cookies can be either session cookies or persistent cookies:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>
                  <strong className="text-foreground">Session Cookies:</strong> These are temporary cookies that are deleted when you close your browser. They are used to carry information across pages of our website and avoid having to re-enter information.
                </li>
                <li>
                  <strong className="text-foreground">Persistent Cookies:</strong> These remain on your device for a set period of time or until you delete them manually. They are activated each time you visit the website that created that particular cookie.
                </li>
              </ul>
            </>
          ),
        },
        {
          title: 'How to Control Cookies',
          content: (
            <>
              <p>
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by adjusting your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>See what cookies are installed on your device and delete them on an individual basis</li>
                <li>Block third-party cookies</li>
                <li>Block cookies from particular sites</li>
                <li>Block all cookies from being set</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>
              <p className="mt-4">
                Please note that if you choose to block or delete cookies, some features of our website may not function as intended. For information on how to manage cookies in your specific browser, please visit the browser&apos;s help documentation.
              </p>
            </>
          ),
        },
        {
          title: 'Changes to This Cookie Policy',
          content: (
            <p>
              We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed about our use of cookies and related technologies. The &quot;Last updated&quot; date at the top of this policy indicates when it was last revised.
            </p>
          ),
        },
      ]}
    />
  )
}
