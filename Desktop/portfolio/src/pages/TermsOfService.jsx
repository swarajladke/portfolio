// src/pages/TermsOfService.jsx
export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-10 px-4">
      <div className="bg-neutral-900 rounded-2xl shadow-2xl max-w-xl w-full p-8 md:p-12 text-gray-200 animate-fadeIn">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 animate-bounce">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-400 mb-8 animate-pulse">
          Last Updated: August 24, 2025
        </p>

        <div className="bg-red-600 rounded-lg px-5 py-3 mb-8 text-white text-sm font-semibold text-center animate-ping">
          These terms govern your use of this personal portfolio website and its content.
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3 transition-colors duration-300 hover:text-red-400 cursor-pointer">
            1. Purpose
          </h2>
          <p className="mb-2 text-gray-300 transition-opacity duration-500 hover:opacity-100 opacity-80">
            This site is intended solely for showcasing personal projects, skills, and achievements. It does not provide any commercial services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3 transition-colors duration-300 hover:text-red-400 cursor-pointer">
            2. Intellectual Property
          </h2>
          <p className="mb-2 text-gray-300 transition-opacity duration-500 hover:opacity-100 opacity-80">
            All designs, code, and content are owned by <span className="text-red-400 font-semibold">Swaraj Ladke</span> unless otherwise stated. Unauthorized commercial use is prohibited.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3 transition-colors duration-300 hover:text-red-400 cursor-pointer">
            3. External Links
          </h2>
          <p className="mb-2 text-gray-300 transition-opacity duration-500 hover:opacity-100 opacity-80">
            This site may link to external platforms like GitHub and LinkedIn. I am not responsible for their content or privacy policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3 transition-colors duration-300 hover:text-red-400 cursor-pointer">
            4. No Warranties
          </h2>
          <p className="mb-2 text-gray-300 transition-opacity duration-500 hover:opacity-100 opacity-80">
            The website and content are provided "as is," with no guarantees on accuracy or reliability.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3 transition-colors duration-300 hover:text-red-400 cursor-pointer">
            5. Limitation of Liability
          </h2>
          <p className="mb-2 text-gray-300 transition-opacity duration-500 hover:opacity-100 opacity-80">
            I am not liable for any damages or losses arising from your use of the site or reliance on its content.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3 transition-colors duration-300 hover:text-red-400 cursor-pointer">
            6. Acceptance of Terms
          </h2>
          <p className="mb-2 text-gray-300 transition-opacity duration-500 hover:opacity-100 opacity-80">
            By using this site, you agree to these Terms of Service. Updates will be posted with a revised "Last Updated" date.
          </p>
        </section>
      </div>
    </div>
  );
}
