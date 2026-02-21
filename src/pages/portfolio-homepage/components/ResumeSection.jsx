import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import ResumePreviewModal from '../../../components/ui/ResumePreviewModal';

const RESUME_DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=12ikHCOnQBWnZz6pTDDmi3nG1vFvn20en';
const RESUME_PREVIEW_URL = 'https://drive.google.com/file/d/12ikHCOnQBWnZz6pTDDmi3nG1vFvn20en/preview';

const ResumeSection = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const resumeData = {
    lastUpdated: 'Jan 14 2026',
    fileSize: '148 KB',
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

  // Auto-hide toast after 3 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = RESUME_DOWNLOAD_URL;
    link.download = 'Swaraj-Ladke-Resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
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
      navigator.clipboard.writeText(window.location.href).then(() => {
        setShowToast(true);
      });
    }
  };

  return (
    <>
      <section id="resume" className="section-padding section-margin bg-transparent">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading animate-underline">Resume & CV</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive overview of my professional journey, skills, and achievements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Resume Preview */}
            <div className="relative">
              <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-elevation-2 hover:shadow-elevation-3 transition-all duration-300">
                {/* Resume Thumbnail */}
                <div className="relative bg-gradient-to-br from-[#0a0a1a] to-[#0d1025] p-8 h-96 flex items-center justify-center">
                  <div className="w-full max-w-sm bg-gradient-to-b from-[#111827] to-[#0f172a] rounded-lg shadow-2xl p-5 transform rotate-2 hover:rotate-0 transition-all duration-500 border border-white/10 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(0,191,255,0.15)]">
                    <div className="space-y-3">
                      {/* Header */}
                      <div className="text-center border-b border-white/10 pb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(0,191,255,0.3)]">SL</div>
                        <div className="text-white font-bold text-sm">Swaraj Ladke</div>
                        <div className="text-primary/80 text-[10px] font-medium tracking-wider uppercase">Fullstack Developer & AI/ML Enthusiast</div>
                      </div>

                      {/* Skills Preview */}
                      <div className="space-y-2">
                        <div className="text-[10px] font-semibold text-primary/90 uppercase tracking-widest">Technical Skills</div>
                        <div className="flex flex-wrap gap-1">
                          {['React', 'Node.js', 'Python', 'Django', 'TensorFlow', 'AWS'].map((skill) => (
                            <span key={skill} className="px-1.5 py-0.5 bg-primary/10 text-primary/80 text-[8px] rounded border border-primary/20 font-medium">{skill}</span>
                          ))}
                        </div>
                      </div>

                      {/* Experience Preview */}
                      <div className="space-y-1.5">
                        <div className="text-[10px] font-semibold text-primary/90 uppercase tracking-widest">Experience</div>
                        <div className="space-y-1">
                          <div className="h-1.5 bg-white/20 rounded-full w-full"></div>
                          <div className="h-1.5 bg-white/15 rounded-full w-5/6"></div>
                          <div className="h-1.5 bg-white/10 rounded-full w-4/6"></div>
                        </div>
                      </div>

                      {/* Projects Preview */}
                      <div className="space-y-1.5">
                        <div className="text-[10px] font-semibold text-primary/90 uppercase tracking-widest">Projects</div>
                        <div className="grid grid-cols-2 gap-1">
                          <div className="h-1.5 bg-accent/20 rounded-full"></div>
                          <div className="h-1.5 bg-accent/15 rounded-full"></div>
                          <div className="h-1.5 bg-accent/20 rounded-full"></div>
                          <div className="h-1.5 bg-accent/15 rounded-full"></div>
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
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-[0_0_20px_rgba(0,191,255,0.2)] transition-shadow duration-300">
                <Icon name="Briefcase" size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-accent/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-[0_0_20px_rgba(0,128,255,0.2)] transition-shadow duration-300">
                <Icon name="FolderGit2" size={24} className="text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-success/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-shadow duration-300">
                <Icon name="Code2" size={24} className="text-success" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Technologies Mastered</div>
            </div>
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-warning/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-[0_0_20px_rgba(255,184,0,0.2)] transition-shadow duration-300">
                <Icon name="Award" size={24} className="text-warning" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Certifications Earned</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Preview Modal */}
      <ResumePreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        resumeUrl={RESUME_PREVIEW_URL}
        downloadUrl={RESUME_DOWNLOAD_URL}
      />

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
          <div className="flex items-center gap-3 px-5 py-3 bg-[#111827] border border-primary/30 rounded-xl shadow-[0_0_30px_rgba(0,191,255,0.15)] backdrop-blur-md">
            <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="Check" size={16} className="text-success" />
            </div>
            <span className="text-sm font-medium text-foreground">Link copied to clipboard!</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeSection;