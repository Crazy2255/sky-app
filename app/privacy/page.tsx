import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Skynet Vision",
  description: "Privacy policy for Skynet Vision's services and website.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none">
            <section className="mb-10">
              <p className="text-white/80 mb-6">
                At Skynet Vision, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website or use our services. Please read
                this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not
                access the site.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#FFD56C]">
                1. Collection of Your Information
              </h2>
              <p className="text-white/80 mb-4">
                We may collect information about you in a variety of ways. The information we may collect via the
                website includes:
              </p>

              <h3 className="text-xl font-semibold mb-2 text-white">Personal Data</h3>
              <p className="text-white/80 mb-4">
                Personally identifiable information, such as your name, email address, and telephone number, that you
                voluntarily give to us when you choose to participate in various activities related to the website, such
                as online chat, contact forms, and newsletter subscriptions.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-white">Derivative Data</h3>
              <p className="text-white/80 mb-4">
                Information our servers automatically collect when you access the website, such as your IP address,
                browser type, operating system, access times, and the pages you have viewed directly before and after
                accessing the website.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-white">Financial Data</h3>
              <p className="text-white/80 mb-4">
                Financial information, such as data related to your payment method (e.g., valid credit card number, card
                brand, expiration date) that we may collect when you purchase, order, return, exchange, or request
                information about our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#FFD56C]">2. Use of Your Information</h2>
              <p className="text-white/80 mb-4">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized
                experience. Specifically, we may use information collected about you via the website to:
              </p>
              <ul className="list-disc pl-6 text-white/80 mb-4 space-y-2">
                <li>Create and manage your account</li>
                <li>Process payments and refunds</li>
                <li>Email you regarding your account or order</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the website</li>
                <li>Send you a newsletter</li>
                <li>Respond to your inquiries and customer service requests</li>
                <li>Deliver targeted advertising, newsletters, and other information regarding promotions</li>
                <li>Administer sweepstakes, promotions, and contests</li>
                <li>Compile anonymous statistical data for research purposes</li>
                <li>Assist law enforcement and respond to subpoenas</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#FFD56C]">
                3. Disclosure of Your Information
              </h2>
              <p className="text-white/80 mb-4">
                We may share information we have collected about you in certain situations. Your information may be
                disclosed as follows:
              </p>

              <h3 className="text-xl font-semibold mb-2 text-white">By Law or to Protect Rights</h3>
              <p className="text-white/80 mb-4">
                If we believe the release of information about you is necessary to respond to legal process, to
                investigate or remedy potential violations of our policies, or to protect the rights, property, and
                safety of others, we may share your information as permitted or required by any applicable law, rule, or
                regulation.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-white">Third-Party Service Providers</h3>
              <p className="text-white/80 mb-4">
                We may share your information with third parties that perform services for us or on our behalf,
                including payment processing, data analysis, email delivery, hosting services, customer service, and
                marketing assistance.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-white">Marketing Communications</h3>
              <p className="text-white/80 mb-4">
                With your consent, or with an opportunity for you to withdraw consent, we may share your information
                with third parties for marketing purposes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#FFD56C]">
                4. Security of Your Information
              </h2>
              <p className="text-white/80 mb-4">
                We use administrative, technical, and physical security measures to help protect your personal
                information. While we have taken reasonable steps to secure the personal information you provide to us,
                please be aware that despite our efforts, no security measures are perfect or impenetrable, and no
                method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#FFD56C]">5. Policy for Children</h2>
              <p className="text-white/80 mb-4">
                We do not knowingly solicit information from or market to children under the age of 13. If you become
                aware of any data we have collected from children under age 13, please contact us using the contact
                information provided below.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#FFD56C]">
                6. Options Regarding Your Information
              </h2>
              <h3 className="text-xl font-semibold mb-2 text-white">Account Information</h3>
              <p className="text-white/80 mb-4">
                You may at any time review or change the information in your account or terminate your account by
                contacting us using the contact information provided.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-white">Emails and Communications</h3>
              <p className="text-white/80 mb-4">
                If you no longer wish to receive correspondence, emails, or other communications from us, you may
                opt-out by contacting us using the contact information provided below.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#FFD56C]">7. California Privacy Rights</h2>
              <p className="text-white/80 mb-4">
                California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who
                are California residents to request and obtain from us, once a year and free of charge, information
                about categories of personal information (if any) we disclosed to third parties for direct marketing
                purposes and the names and addresses of all third parties with which we shared personal information in
                the immediately preceding calendar year.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#FFD56C]">8. Contact Us</h2>
              <p className="text-white/80 mb-4">
                If you have questions or comments about this Privacy Policy, please contact us through the form on our
                website.
              </p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/60">Last updated: April 21, 2025</p>
          </div>
        </div>
      </div>
    </main>
  )
}
