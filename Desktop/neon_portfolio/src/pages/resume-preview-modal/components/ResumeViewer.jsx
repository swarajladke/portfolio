import React, { useState, useEffect } from 'react';

import Button from '../../../components/ui/Button';

const ResumeViewer = ({ "/resume.pdf/": onError }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(2);
  const [zoomLevel, setZoomLevel] = useState(100);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 25, 50));
  };

  const handleResetZoom = () => {
    setZoomLevel(100);
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const handleIframeError = () => {
    setIsLoading(false);
    onError();
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Viewer Controls */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            iconName="ChevronLeft"
            className="w-8 h-8"
          />
          <span className="text-sm text-muted-foreground px-2">
            {currentPage} / {totalPages}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            iconName="ChevronRight"
            className="w-8 h-8"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleZoomOut}
            disabled={zoomLevel <= 50}
            iconName="ZoomOut"
            className="w-8 h-8"
          />
          <span className="text-sm text-muted-foreground px-2 min-w-[60px] text-center">
            {zoomLevel}%
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleZoomIn}
            disabled={zoomLevel >= 200}
            iconName="ZoomIn"
            className="w-8 h-8"
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={handleResetZoom}
            className="text-xs px-2 h-8"
          >
            Reset
          </Button>
        </div>
      </div>

      {/* Document Viewer */}
      <div className="flex-1 overflow-auto bg-muted/20 p-4">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="text-muted-foreground">Loading resume preview...</p>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div 
              className="bg-white rounded-lg shadow-elevation-2 overflow-hidden transition-transform duration-300"
              style={{ 
                transform: `scale(${zoomLevel / 100})`,
                transformOrigin: 'top center'
              }}
            >
              {/* Mock Resume Content */}
              <div className="w-[595px] min-h-[842px] p-12 text-gray-900">
                {/* Header */}
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">Swaraj Ladke</h1>
                  <h2 className="text-xl text-gray-600 mb-4">Fullstack Developer & AI/ML Enthusiast</h2>
                  <div className="flex justify-center space-x-6 text-sm text-gray-600">
                    <span>📧 swaraj.ladke@email.com</span>
                    <span>📱 +91 98765 43210</span>
                    <span>🌐 linkedin.com/in/swarajladke</span>
                  </div>
                </div>

                {/* Professional Summary */}
                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-300 pb-1 mb-3">
                    Professional Summary
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Passionate Fullstack Developer with 3+ years of experience in building scalable web applications and AI-powered solutions. 
                    Expertise in React, Node.js, Python, and machine learning frameworks. Proven track record in hackathons and open-source contributions.
                  </p>
                </section>

                {/* Technical Skills */}
                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-300 pb-1 mb-3">
                    Technical Skills
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-gray-900">Frontend:</strong>
                      <p className="text-gray-700">React, Next.js, TypeScript, Tailwind CSS</p>
                    </div>
                    <div>
                      <strong className="text-gray-900">Backend:</strong>
                      <p className="text-gray-700">Node.js, Python, Express, FastAPI</p>
                    </div>
                    <div>
                      <strong className="text-gray-900">AI/ML:</strong>
                      <p className="text-gray-700">TensorFlow, PyTorch, OpenAI API</p>
                    </div>
                    <div>
                      <strong className="text-gray-900">Databases:</strong>
                      <p className="text-gray-700">MongoDB, PostgreSQL, Redis</p>
                    </div>
                  </div>
                </section>

                {/* Experience */}
                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-300 pb-1 mb-3">
                    Professional Experience
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-gray-900">Senior Fullstack Developer</h4>
                        <span className="text-sm text-gray-600">2022 - Present</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">TechCorp Solutions, Mumbai</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Developed 15+ responsive web applications using React and Node.js</li>
                        <li>• Implemented AI-powered features increasing user engagement by 40%</li>
                        <li>• Led a team of 4 developers in agile development practices</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Projects */}
                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-300 pb-1 mb-3">
                    Key Projects
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">CodeLixer - AI Code Assistant</h4>
                      <p className="text-sm text-gray-700">
                        VS Code extension with 10K+ downloads. Features intelligent code completion and bug detection.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">EduTwin - AI Learning Platform</h4>
                      <p className="text-sm text-gray-700">
                        Personalized learning platform using machine learning for adaptive content delivery.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Education */}
                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-300 pb-1 mb-3">
                    Education
                  </h3>
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900">Bachelor of Technology in Computer Science</h4>
                        <p className="text-sm text-gray-600">Mumbai University</p>
                      </div>
                      <span className="text-sm text-gray-600">2018 - 2022</span>
                    </div>
                  </div>
                </section>

                {/* Achievements */}
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-300 pb-1 mb-3">
                    Achievements & Certifications
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Winner - Smart India Hackathon 2023</li>
                    <li>• AWS Certified Solutions Architect</li>
                    <li>• Google Cloud Professional Developer</li>
                    <li>• 50+ contributions to open-source projects</li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeViewer;