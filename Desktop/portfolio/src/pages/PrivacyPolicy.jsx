// src/pages/PrivacyPolicy.jsx
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: August 24, 2025</p>

        <p className="text-gray-700 mb-8">
          This Privacy Policy explains how this personal portfolio website, operated by <b className="text-blue-600">Swaraj Ladke</b>, handles information about its visitors.
          Protecting your privacy is a priority, and this site is designed to minimize data collection wherever possible.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-300 pb-2 mb-4">1. Information Collected</h2>
          <p className="text-gray-700 leading-relaxed">
            This website does not automatically collect personally identifiable information (such as your name, email address, or payment details).
            Any personal data will only be collected if you voluntarily provide it—for example, by contacting me via a form or email.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            To better understand site performance, Google Analytics (or similar tools) may be used to collect anonymized data,
            such as browser type, device information, geographic region, and pages visited. This information is statistical in nature and cannot be used to personally identify you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-300 pb-2 mb-4">2. How Information Is Used</h2>
          <p className="text-gray-700 leading-relaxed">
            Any personal information you voluntarily share will be used solely for the purpose of responding to your inquiries, professional opportunities, or collaborations.
            Aggregated analytics data may be used to improve website functionality, design, and user experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-300 pb-2 mb-4">3. Third-Party Links & Services</h2>
          <p className="text-gray-700 leading-relaxed">
            This website may contain links to third-party websites or services (e.g., GitHub, LinkedIn, project demos).
            Please note that I do not control, and am not responsible for, the privacy practices of those websites.
            You are encouraged to review the privacy policies of any external sites you visit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-300 pb-2 mb-4">4. Data Retention & Your Rights</h2>
          <p className="text-gray-700 leading-relaxed">
            Personal information shared through direct communication will be retained only as long as necessary to fulfill the purpose of the interaction.
            You have the right to request deletion of any personal data previously provided by you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-300 pb-2 mb-4">5. Consent</h2>
          <p className="text-gray-700 leading-relaxed">
            By using this website, you consent to the terms outlined in this Privacy Policy. This policy may be updated periodically, and any changes will be reflected with a revised "Last Updated" date.
          </p>
        </section>

        <p className="text-sm text-gray-500">
          If you have any questions regarding this Privacy Policy or the handling of your information, please feel free to reach out via the contact methods provided on this site.
        </p>
      </div>
    </div>
  );
}
