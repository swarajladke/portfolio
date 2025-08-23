import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import ResumePreviewModal from '../../../components/ui/ResumePreviewModal';

const ResumeSection = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const resumeData = {
    lastUpdated: 'August 23 2025',
    fileSize: '2.4 MB',
    format: 'PDF',
    sections: [
      'Professional Summary',
      'Technical Skills',
      'Work Experience',
      'Projects Portfolio',
      'Education',
      'Certifications',
      'Achievements'
    ]
  };

  const handleDownload = () => {
    // Create a mock download
    const link = document.createElement('a');
    link.href = 'https://swarajladke.github.io/portfolio/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = () => {
    setIsPreviewOpen(true);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Swaraj Ladke - Resume',
        text: 'Check out my professional resume',
        url: window.location.href
      });
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  return (
    <>
      <section id="resume" className="section-padding section-margin">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4 gradient-text">Resume & CV</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive overview of my professional journey, skills, and achievements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Resume Preview */}
            <div className="relative">
              <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-elevation-2 hover:shadow-elevation-3 transition-all duration-300">
                {/* Resume Thumbnail */}
                <div className="relative bg-gradient-to-br from-muted to-card p-8 h-96 flex items-center justify-center">
                  <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="text-center border-b border-gray-200 pb-4">
                        <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2"></div>
                        <div className="h-4 bg-gray-800 rounded mb-1"></div>
                        <div className="h-3 bg-gray-600 rounded w-3/4 mx-auto"></div>
                      </div>
                      
                      {/* Content Sections */}
                      <div className="space-y-3">
                        <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                        <div className="space-y-1">
                          <div className="h-2 bg-gray-400 rounded"></div>
                          <div className="h-2 bg-gray-400 rounded w-5/6"></div>
                          <div className="h-2 bg-gray-400 rounded w-4/6"></div>
                        </div>
                        
                        <div className="h-3 bg-gray-700 rounded w-1/3"></div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-2 bg-gray-400 rounded"></div>
                          <div className="h-2 bg-gray-400 rounded"></div>
                          <div className="h-2 bg-gray-400 rounded"></div>
                          <div className="h-2 bg-gray-400 rounded"></div>
                        </div>
                        
                        <div className="h-3 bg-gray-700 rounded w-2/5"></div>
                        <div className="space-y-1">
                          <div className="h-2 bg-gray-400 rounded w-4/5"></div>
                          <div className="h-2 bg-gray-400 rounded w-3/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="default"
                      onClick={handlePreview}
                      iconName="Eye"
                      iconPosition="left"
                      className="btn-glow"
                    >
                      Preview Resume
                    </Button>
                  </div>
                </div>

                {/* Resume Info */}
                <div className="p-6 border-t border-border">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-sm text-muted-foreground">Last Updated</div>
                      <div className="font-medium text-foreground">{resumeData.lastUpdated}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">File Size</div>
                      <div className="font-medium text-foreground">{resumeData.fileSize}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Format</div>
                      <div className="font-medium text-foreground">{resumeData.format}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Details */}
            <div className="space-y-8">
              {/* Description */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                  <Icon name="FileText" size={24} className="mr-3 text-primary" />
                  Professional Resume
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  My comprehensive resume showcases my journey as a Fullstack Developer and AI/ML Enthusiast. 
                  It includes detailed information about my technical skills, professional experience, notable projects, 
                  educational background, and achievements in the field of technology and innovation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The document is regularly updated to reflect my latest accomplishments, certifications, 
                  and project contributions. It's designed to provide a complete overview of my capabilities 
                  and potential value to prospective employers and collaborators.
                </p>
              </div>

              {/* Resume Sections */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Icon name="List" size={20} className="mr-2 text-primary" />
                  What's Included
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {resumeData.sections.map((section, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg border border-border">
                      <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                      <span className="text-foreground">{section}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="default"
                    onClick={handleDownload}
                    iconName="Download"
                    iconPosition="left"
                    className="btn-glow flex-1"
                  >
                    Download PDF
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handlePreview}
                    iconName="Eye"
                    iconPosition="left"
                    className="btn-glow flex-1"
                  >
                    Preview Online
                  </Button>
                </div>
                <Button
                  variant="secondary"
                  onClick={handleShare}
                  iconName="Share2"
                  iconPosition="left"
                  className="btn-glow w-full"
                >
                  Share Resume
                </Button>
              </div>

              {/* Additional Info */}
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border">
                <div className="flex items-start space-x-3">
                  <Icon name="Info" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-foreground mb-2">Professional Format</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      This resume follows industry-standard formatting and includes all essential sections 
                      that recruiters and hiring managers expect. It's optimized for both ATS systems 
                      and human review, ensuring maximum compatibility and readability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resume Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Package" size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">4+</div>
              <div className="text-sm text-muted-foreground">Package Managers & Builds</div>
            </div>
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Puzzle" size={24} className="text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">2</div>
              <div className="text-sm text-muted-foreground">Extensions & Plugins</div>
            </div>
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Link" size={24} className="text-success" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">3+</div>
              <div className="text-sm text-muted-foreground">API Integrations Mastered</div>
            </div>
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border">
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Server" size={24} className="text-warning" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">2</div>
              <div className="text-sm text-muted-foreground">Backend Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Preview Modal */}
      <ResumePreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        resumeUrl="https://drive.google.com/file/d/15KAfOAtOownvhPr_oC3YnbtfZVriTPEj/preview"


      />
    </>
  );
};

export default ResumeSection;