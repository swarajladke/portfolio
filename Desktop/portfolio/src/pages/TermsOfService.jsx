// src/pages/TermsOfService.jsx
export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: August 24, 2025</p>

        <p className="text-gray-700 mb-8">
          Welcome to the personal portfolio of <b className="text-blue-600">Swaraj Ladke</b>. By accessing or using this website, you agree to these Terms of Service.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-300 pb-2 mb-4">1. Purpose</h2>
          <p className="text-gray-700 leading-relaxed">
            This site is intended solely for showcasing personal projects, skills, and achievements. It is not a commercial service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-300 pb-2 mb-4">2. Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            All projects, designs, code snippets, and other content are the intellectual property of <b className="text-blue-600">Swaraj Ladke</b> unless otherwise stated.
            You may not copy or use the content for commercial purposes without permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-300 pb-2 mb-4">3. External Links</h2>
          <p className="text-gray-700 leading-relaxed">
            This site may link to external websites (GitHub, LinkedIn, project demos). I am not responsible for the practices or content of those external sites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-300 pb-2 mb-4">4. No Warranties</h2>
          <p className="text-gray-700 leading-relaxed">
            The site and its content are provided "as is," without warranties of any kind. Accuracy and reliability are not guaranteed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-300 pb-2 mb-4">5. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            I am not liable for any damages, losses, or issues arising from the use of this site or reliance on its content.
          </p>
        </section>

        <p className="text-gray-700 mt-6 leading-relaxed">
          By continuing to use this site, you agree to these Terms of Service. These terms may be updated periodically; any changes will be posted with a revised "Last Updated" date.
        </p>

        <p className="text-sm text-gray-500 mt-10">
          If you have any questions about these Terms of Service, please contact me through the provided contact methods.
        </p>
      </div>
    </div>
  );
}
