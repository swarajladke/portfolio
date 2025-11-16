import React, { useEffect, useState } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const ResumePreviewModal = ({ isOpen, onClose, resumeUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsLoading(true);
      setError(false);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl || '/assets/resume.pdf';
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    const iframe = document.getElementById('resume-iframe');
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.print();
    }
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setError(true);
  };

  return (
    <div className="modal-backdrop animate-fade-in" onClick={handleBackdropClick}>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="modal-content w-full max-w-5xl max-h-[95vh] flex flex-col animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border flex-shrink-0">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Icon name="FileText" size={24} color="currentColor" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Resume Preview</h2>
                <p className="text-muted-foreground">Professional CV & Portfolio Summary</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrint}
                iconName="Printer"
                iconPosition="left"
                className="btn-glow"
              >
                Print
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={handleDownload}
                iconName="Download"
                iconPosition="left"
                className="btn-glow"
              >
                Download
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground"
              >
                <Icon name="X" size={24} />
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-hidden">
            {error ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <div className="w-16 h-16 bg-error/20 rounded-full flex items-center justify-center">
                  <Icon name="AlertCircle" size={32} className="text-error" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Unable to Load Resume</h3>
                  <p className="text-muted-foreground mb-4">
                    The resume preview is currently unavailable. You can still download the PDF file.
                  </p>
                  <Button
                    variant="default"
                    onClick={handleDownload}
                    iconName="Download"
                    iconPosition="left"
                    className="btn-glow"
                  >
                    Download Resume PDF
                  </Button>
                </div>
              </div>
            ) : (
              <div className="relative h-full">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted/50 rounded-xl">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                      <p className="text-muted-foreground">Loading resume preview...</p>
                    </div>
                  </div>
                )}
                <iframe
                  id="resume-iframe"
                  src={resumeUrl || '/assets/resume.pdf'}
                  className="w-full h-full rounded-xl border border-border"
                  title="Resume Preview"
                  onLoad={handleIframeLoad}
                  onError={handleIframeError}
                />
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-6 border-t border-border flex-shrink-0">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={16} />
                <span>Last Updated: {new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="FileType" size={16} />
                <span>PDF Format</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
              >
                Close
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={handleDownload}
                iconName="Download"
                iconPosition="left"
                className="btn-glow"
              >
                Download
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreviewModal;