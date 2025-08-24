// src/pages/PrivacyPolicy.jsx
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row items-center justify-center py-10 px-4">
      {/* Main Card */}
      <div className="bg-neutral-900 rounded-2xl shadow-2xl max-w-xl w-full p-8 md:p-12 text-gray-200 mx-auto md:mx-0">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-6">Last Updated: August 24, 2025</p>

        <div className="bg-red-600 rounded-lg px-5 py-3 mb-8 text-white text-sm font-semibold text-center">
          This Privacy Policy explains how your personal information is collected, used, and protected.
        </div>

        <section className="mb-8" id="information-collected">
          <h2 className="text-xl font-semibold text-gray-100 mb-3">1. Information Collected</h2>
          <p className="mb-2 text-gray-300">
            This website does not automatically collect personally identifiable information such as names, emails, or payment details.
            Any personal information is only collected if you voluntarily provide it via contact forms or email.
          </p>
          <p className="mb-2 text-gray-300">
            Google Analytics and similar tools may be used to gather anonymized data like browser type, device information, geographic region, and page visits.
            This data is statistical and cannot personally identify you.
          </p>
        </section>

        <section className="mb-8" id="use-of-information">
          <h2 className="text-xl font-semibold text-gray-100 mb-3">2. Use of Information</h2>
          <p className="text-gray-300">
            Personal information you provide is used solely to respond to inquiries or professional opportunities.
            Analytics data is used to improve website performance and user experience.
          </p>
        </section>

        <section className="mb-8" id="third-party-services">
          <h2 className="text-xl font-semibold text-gray-100 mb-3">3. Third-Party Services</h2>
          <p className="text-gray-300">
            This website may contain links to third-party sites such as GitHub, LinkedIn, or project demos.
            These sites have their own privacy policies, for which I am not responsible.
          </p>
        </section>

        <section className="mb-8" id="your-rights">
          <h2 className="text-xl font-semibold text-gray-100 mb-3">4. Your Rights</h2>
          <p className="text-gray-300">
            You may request deletion of any personal information that you have shared via direct communication.
          </p>
        </section>

        <section className="mb-8" id="consent">
          <h2 className="text-xl font-semibold text-gray-100 mb-3">5. Consent</h2>
          <p className="text-gray-300">
            By using this site, you agree to this Privacy Policy, which may be updated periodically.
            Updates will be noted with a revised “Last Updated” date.
          </p>
        </section>

        <div className="mt-12 text-sm text-gray-400">
          For questions regarding this policy, please get in touch through provided contact methods.
        </div>
      </div>

      {/* Table of Contents sidebar (desktop only) */}
      <aside className="hidden md:block ml-12 max-w-xs w-full">
        <div className="bg-neutral-900 rounded-2xl shadow-xl p-6 sticky top-12 text-gray-300">
          <h3 className="text-lg font-bold text-white mb-4">Table of Contents</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#information-collected" className="text-red-400 hover:underline font-semibold">1. Information Collected</a></li>
            <li><a href="#use-of-information" className="text-red-400 hover:underline font-semibold">2. Use of Information</a></li>
            <li><a href="#third-party-services" className="text-red-400 hover:underline font-semibold">3. Third-Party Services</a></li>
            <li><a href="#your-rights" className="text-red-400 hover:underline font-semibold">4. Your Rights</a></li>
            <li><a href="#consent" className="text-red-400 hover:underline font-semibold">5. Consent</a></li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
