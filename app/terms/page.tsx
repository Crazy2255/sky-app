import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use | Skynet Vision",
  description: "Terms and conditions for using Skynet Vision's services and website.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">Terms of Use</h1>

          <div className="prose prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#FFD56C]">1. Acceptance of Terms</h2>
              <p className="text-white/80 mb-4">
                By accessing and using the Skynet Vision website and services, you accept and agree to be bound by the
                terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use
                this website or our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#FFD56C]">2. Use License</h2>
              <p className="text-white/80 mb-4">
                Permission is granted to temporarily view the materials on Skynet Vision's website for personal,
                non-commercial use only. This is the grant of a license, not a transfer of title, and under this license
                you may not:
              </p>
              <ul className="list-disc pl-6 text-white/80 mb-4 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on Skynet Vision's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              <p className="text-white/80 mb-4">
                This license shall automatically terminate if you violate any of these restrictions and may be
                terminated by Skynet Vision at any time.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#FFD56C]">3. Disclaimer</h2>
              <p className="text-white/80 mb-4">
                The materials on Skynet Vision's website are provided on an 'as is' basis. Skynet Vision makes no
                warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of merchantability, fitness for a particular
                purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="text-white/80 mb-4">
                Further, Skynet Vision does not warrant or make any representations concerning the accuracy, likely
                results, or reliability of the use of the materials on its website or otherwise relating to such
                materials or on any sites linked to this site.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#FFD56C]">4. Limitations</h2>
              <p className="text-white/80 mb-4">
                In no event shall Skynet Vision or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the use
                or inability to use the materials on Skynet Vision's website, even if Skynet Vision or a Skynet Vision
                authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
              <p className="text-white/80 mb-4">
                Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability
                for consequential or incidental damages, these limitations may not apply to you.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#FFD56C]">5. Revisions and Errata</h2>
              <p className="text-white/80 mb-4">
                The materials appearing on Skynet Vision's website could include technical, typographical, or
                photographic errors. Skynet Vision does not warrant that any of the materials on its website are
                accurate, complete or current. Skynet Vision may make changes to the materials contained on its website
                at any time without notice. Skynet Vision does not, however, make any commitment to update the
                materials.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#FFD56C]">6. Links</h2>
              <p className="text-white/80 mb-4">
                Skynet Vision has not reviewed all of the sites linked to its website and is not responsible for the
                contents of any such linked site. The inclusion of any link does not imply endorsement by Skynet Vision
                of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#FFD56C]">
                7. Modifications to Terms of Use
              </h2>
              <p className="text-white/80 mb-4">
                Skynet Vision may revise these terms of use for its website at any time without notice. By using this
                website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#FFD56C]">8. Governing Law</h2>
              <p className="text-white/80 mb-4">
                These terms and conditions are governed by and construed in accordance with the laws and you irrevocably
                submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#FFD56C]">9. Contact Information</h2>
              <p className="text-white/80 mb-4">
                If you have any questions about these Terms of Use, please contact us through the form on our website.
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
