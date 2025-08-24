// src/pages/PrivacyPolicy.jsx
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-10 px-4">
      <div className="bg-neutral-900 rounded-2xl shadow-2xl max-w-xl w-full p-8 md:p-12 text-gray-200 animate-fadeIn">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 animate-bounce">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 mb-8 animate-pulse">
          Last Updated: August 24, 2025
        </p>

        <div className="bg-red-600 rounded-lg px-5 py-3 mb-8 text-white text-sm font-semibold text-center animate-ping">
          This Privacy Policy explains how personal data is collected, used, and protected.
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3 transition-colors duration-300 hover:text-red-400 cursor-pointer">
            1. Information Collected
          </h2>
          <p className="mb-2 text-gray-300 transition-opacity duration-500 hover:opacity-100 opacity-80">
            This site does not collect personal information automatically. Any data such as names or emails you provide is voluntary, via contact or email.
          </p>
          <p className="text-gray-300 transition-opacity duration-500 hover:opacity-100 opacity-80">
            Anonymized analytics data (browser type, page visits) may be collected using tools like Google Analytics.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3 transition-colors duration-300 hover:text-red-400 cursor-pointer">
            2. Use of Information
          </h2>
          <p className="text-gray-300 transition-opacity duration-500 hover:opacity-100 opacity-80">
            Voluntarily provided data is used solely to respond to inquiries and professional opportunities.
          </p>
          <p className="text-gray-300 transition-opacity duration-500 hover:opacity-100 opacity-80">
            Analytics help improve website performance and user experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3 transition-colors duration-300 hover:text-red-400 cursor-pointer">
            3. Third-Party Services
          </h2>
          <p className="text-gray-300 transition-opacity duration-500 hover:opacity-100 opacity-80">
            External links to platforms like GitHub or LinkedIn are provided, but I do not control those sites and am not responsible for their privacy practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3 transition-colors duration-300 hover:text-red-400 cursor-pointer">
            4. Your Rights
          </h2>
          <p className="text-gray-300 transition-opacity duration-500 hover:opacity-100 opacity-80">
            You can request deletion of any personal information shared with me.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3 transition-colors duration-300 hover:text-red-400 cursor-pointer">
            5. Consent
          </h2>
          <p className="text-gray-300 transition-opacity duration-500 hover:opacity-100 opacity-80">
            By using this site, you agree to this Privacy Policy. Updates will be posted with a new "Last Updated" date.
          </p>
        </section>
      </div>
    </div>
  );
}
