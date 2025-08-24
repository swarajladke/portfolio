// src/pages/TermsOfService.jsx
export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row items-center justify-center py-10 px-4">
      {/* Main Card */}
      <div className="bg-neutral-900 rounded-2xl shadow-2xl max-w-xl w-full p-8 md:p-12 text-gray-200 mx-auto md:mx-0">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-400 mb-6">Last Updated: August 24, 2025</p>

        <div className="bg-red-600 rounded-lg px-5 py-3 mb-8 text-white text-sm font-semibold text-center">
          These Terms of Service explain the rules for using this personal portfolio website and its content.
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-100 mb-3">1. Purpose</h2>
          <p className="mb-2 text-gray-300">
            This site is intended solely for showcasing personal projects, skills, and achievements. It does not offer any commercial services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-100 mb-3">2. Intellectual Property</h2>
          <p className="mb-2 text-gray-300">
            All designs, code, and content are the property of <span className="text-red-400 font-semibold">Swaraj Ladke</span> unless otherwise stated.
            You may not copy or use them for commercial purposes without explicit permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-100 mb-3">3. External Links</h2>
          <p className="mb-2 text-gray-300">
            This website may link to external sites such as GitHub, LinkedIn, or project demos. I am not responsible for the content or practices of those external sites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-100 mb-3">4. No Warranties</h2>
          <p className="mb-2 text-gray-300">
            The site and its content are provided "as is," without any warranties. Accuracy and reliability are not guaranteed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-100 mb-3">5. Limitation of Liability</h2>
          <p className="mb-2 text-gray-300">
            I am not liable for any damages, losses, or issues arising from use of this site or reliance on its content.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-100 mb-3">6. Acceptance of Terms</h2>
          <p className="mb-2 text-gray-300">
            By using this site, you agree to these Terms of Service. These terms may be updated periodically; updates will appear with a revised date above.
          </p>
        </section>

        <div className="mt-12 text-sm text-gray-400">
          For any questions or concerns, please contact through my listed contact channels.
        </div>
      </div>

      {/* Table of Contents sidebar (desktop only) */}
      <aside className="hidden md:block ml-12 max-w-xs w-full">
        <div className="bg-neutral-900 rounded-2xl shadow-xl p-6 sticky top-12 text-gray-300">
          <h3 className="text-lg font-bold text-white mb-4">Table of Contents</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#purpose" className="text-red-400 hover:underline font-semibold">1. Purpose</a></li>
            <li><a href="#ip" className="text-red-400 hover:underline font-semibold">2. Intellectual Property</a></li>
            <li><a href="#links" className="text-red-400 hover:underline font-semibold">3. External Links</a></li>
            <li><a href="#warranty" className="text-red-400 hover:underline font-semibold">4. No Warranties</a></li>
            <li><a href="#liability" className="text-red-400 hover:underline font-semibold">5. Limitation of Liability</a></li>
            <li><a href="#acceptance" className="text-red-400 hover:underline font-semibold">6. Acceptance of Terms</a></li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
