import type { Metadata } from 'next'
import LegalLayout from '@/components/legal-layout'

export const metadata: Metadata = {
  title: 'Refund Policy | HMCFS LTD',
  description: 'Read the Refund Policy detailing HMCFS LTD\'s refund procedures, eligibility requirements, and customer satisfaction guarantees.',
}

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      title="Refund Policy"
      lastUpdated="19 April 2026"
      description="At HMCFS LTD, we are committed to ensuring customer satisfaction with our services. This Refund Policy outlines the conditions under which refunds may be requested, the refund process, and the terms and conditions that apply to all refund requests."
      sections={[
        {
          title: 'Eligibility for Refunds',
          content: (
            <>
              <p>
                Refund eligibility depends on the type of service provided and the terms agreed upon in your service agreement. Generally, you may be eligible for a refund if:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>You request a refund within the refund period specified in your service agreement (typically 14-30 days from the date of service delivery)</li>
                <li>The service was not delivered as described or agreed upon in writing</li>
                <li>The service fails to meet reasonable professional standards</li>
                <li>You request a refund before any substantial work has commenced on your project</li>
                <li>The refund request is made in accordance with all conditions specified in your service agreement</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Non-Refundable Services',
          content: (
            <>
              <p>
                The following services or circumstances typically do not qualify for refunds:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>Services that have been fully completed and delivered as agreed</li>
                <li>Consulting or advisory services where guidance has been provided</li>
                <li>Services where work has substantially commenced, unless otherwise agreed in writing</li>
                <li>Refund requests made more than 30 days after service delivery</li>
                <li>Services provided in accordance with your instructions and specifications</li>
                <li>Retainer fees or prepaid service packages unless otherwise specified in your agreement</li>
                <li>Services where non-performance is due to your failure to provide necessary information or access</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Refund Request Process',
          content: (
            <>
              <p>
                To request a refund, please follow these steps:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li><strong className="text-foreground">Submit a written request:</strong> Send a detailed refund request email to info@hmcfs.cc within the specified refund period, clearly stating the reason for the request and providing relevant service agreement details</li>
                <li><strong className="text-foreground">Provide supporting documentation:</strong> Include any evidence, communications, or documentation that supports your refund request and demonstrates the grounds for the request</li>
                <li><strong className="text-foreground">Allow for review:</strong> Our team will review your refund request within 5-10 business days and assess it against this policy and your service agreement</li>
                <li><strong className="text-foreground">Await our response:</strong> We will contact you with our decision and, if approved, details regarding the refund process and timeline</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Refund Approval and Processing',
          content: (
            <>
              <p>
                If your refund request is approved, the following terms will apply:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li><strong className="text-foreground">Refund amount:</strong> Refunds will be calculated based on services not completed or delivered, less any non-refundable fees or costs incurred by HMCFS LTD</li>
                <li><strong className="text-foreground">Processing time:</strong> Approved refunds will be processed within 14 business days of approval</li>
                <li><strong className="text-foreground">Refund method:</strong> Refunds will be issued using the same payment method used for the original purchase</li>
                <li><strong className="text-foreground">Bank processing:</strong> Depending on your bank or payment provider, it may take an additional 5-10 business days for the funds to appear in your account</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Partial Refunds',
          content: (
            <>
              <p>
                In cases where services have been partially completed, HMCFS LTD may offer a partial refund calculated on a pro-rata basis. This calculation takes into account:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>The percentage of the project completed at the time of refund request</li>
                <li>Any costs incurred by HMCFS LTD in initiating work on your project</li>
                <li>Time and resources already invested in your service delivery</li>
                <li>Any materials or resources purchased specifically for your project</li>
              </ul>
              <p className="mt-3">
                The exact calculation will be clearly outlined in our refund approval communication to you.
              </p>
            </>
          ),
        },
        {
          title: 'Subscription and Retainer Services',
          content: (
            <>
              <p>
                For subscription-based services or retainer agreements, refund eligibility and procedures are as follows:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li><strong className="text-foreground">Monthly services:</strong> Cancellation requests must be submitted before the renewal date. Refunds are not available for already-paid months unless service was not delivered</li>
                <li><strong className="text-foreground">Annual or multi-month packages:</strong> Early cancellation requests will be evaluated on a case-by-case basis. Refunds may be issued on a pro-rata basis for unused service periods</li>
                <li><strong className="text-foreground">Termination notice:</strong> For ongoing service agreements, you must provide written notice as specified in your agreement. Services will continue until the notice period ends, during which full fees remain due</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Disputes and Appeals',
          content: (
            <>
              <p>
                If you disagree with our refund decision or believe your refund was calculated incorrectly, you may submit an appeal:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>Submit a written appeal within 14 days of receiving our decision</li>
                <li>Clearly explain why you believe the decision was incorrect</li>
                <li>Provide any additional evidence or documentation to support your appeal</li>
                <li>Your appeal will be reviewed by a senior member of our team</li>
                <li>We will respond to your appeal within 10 business days with a final decision</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Non-Refundable Payment Methods',
          content: (
            <>
              <p>
                Certain payment methods may have restrictions on refundability:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li><strong className="text-foreground">Bank transfers:</strong> Refunds via bank transfer are subject to your bank&apos;s processing times and may incur currency conversion fees</li>
                <li><strong className="text-foreground">Payment plans:</strong> Refunds on payment plans will suspend future installments and refund only amounts already paid, minus services delivered</li>
                <li><strong className="text-foreground">Third-party payments:</strong> If payment was made by a third party, the refund will be issued to the original payment method, not to another individual</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Your Rights and Our Responsibilities',
          content: (
            <>
              <p>
                As a customer of HMCFS LTD, you have the following rights:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>The right to request a refund within the timeframe specified in this policy and your service agreement</li>
                <li>The right to receive clear communication about the status of your refund request</li>
                <li>The right to appeal a refund denial decision</li>
                <li>The right to consumer protection under UK law, including rights under the Consumer Rights Act 2015</li>
              </ul>
              <p className="mt-3">
                HMCFS LTD commits to processing all refund requests fairly, transparently, and in accordance with this policy and applicable law.
              </p>
            </>
          ),
        },
        {
          title: 'Changes to This Refund Policy',
          content: (
            <>
              <p>
                HMCFS LTD reserves the right to modify or update this Refund Policy at any time. Changes will be effective upon posting to our website. Your continued use of our services following changes constitutes your acceptance of the updated policy. We will make reasonable efforts to notify you of material changes.
              </p>
              <p>
                Refund requests made before a policy change will be assessed under the policy in effect at the time of the service agreement.
              </p>
            </>
          ),
        },
        {
          title: 'Contact for Refund Requests',
          content: (
            <>
              <p>
                To submit a refund request or for questions about this Refund Policy, please contact us:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li><strong className="text-foreground">Email:</strong> info@hmcfs.cc</li>
                <li><strong className="text-foreground">Phone:</strong> +44(0)7424 488818</li>
                <li><strong className="text-foreground">Address:</strong> 128 City Road, London, United Kingdom, EC1V 2NX</li>
              </ul>
            </>
          ),
        },
      ]}
    />
  )
}
