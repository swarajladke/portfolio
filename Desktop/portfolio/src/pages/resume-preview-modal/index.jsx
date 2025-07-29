import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ResumeViewer from './components/ResumeViewer';
import DocumentMetadata from './components/DocumentMetadata';
import ModalHeader from './components/ModalHeader';
import ModalFooter from './components/ModalFooter';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';



const ResumePreviewModal = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showMetadata, setShowMetadata] = useState(false);

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      document.body.style.overflow = 'unset';
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleClose = () => {
    navigate('/portfolio-homepage');
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleDownload = () => {
    // Analytics tracking could be added here
    console.log('Resume downloaded');
  };

  const handlePrint = () => {
    // Analytics tracking could be added here
    console.log('Resume printed');
  };

  const handleError = () => {
    setError(true);
    setIsLoading(false);
  };

  const toggleMetadata = () => {
    setShowMetadata(!showMetadata);
  };

  const documentStats = {
    fileSize: "2.4 MB",
    format: "PDF",
    pages: 2,
    lastUpdated: "July 28, 2025"
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm animate-fade-in">
      {/* Modal Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleBackdropClick}
      />
      
      {/* Modal Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-7xl max-h-[95vh] bg-card border border-border rounded-2xl shadow-elevation-3 flex flex-col overflow-hidden animate-fade-in">
          
          {/* Header */}
          <ModalHeader
            onClose={handleClose}
            onDownload={handleDownload}
            onPrint={handlePrint}
            isLoading={isLoading}
          />

          {/* Main Content */}
          <div className="flex-1 flex overflow-hidden">
            {/* Resume Viewer */}
            <div className="flex-1 flex flex-col">
              {error ? (
                <div className="flex-1 flex flex-col items-center justify-center space-y-6 p-8">
                  <div className="w-20 h-20 bg-error/20 rounded-full flex items-center justify-center">
                    <Icon name="AlertCircle" size={40} className="text-error" />
                  </div>
                  <div className="text-center max-w-md">
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      Unable to Load Resume
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The resume preview is currently unavailable. You can still download the PDF file directly or try refreshing the page.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button
                        variant="default"
                        onClick={handleDownload}
                        iconName="Download"
                        iconPosition="left"
                        className="btn-glow"
                      >
                        Download Resume PDF
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => window.location.reload()}
                        iconName="RefreshCw"
                        iconPosition="left"
                        className="btn-glow"
                      >
                        Retry Loading
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <ResumeViewer
                  resumeUrl="/assets/resume.pdf"
                  onError={handleError}
                />
              )}
            </div>

            {/* Metadata Panel - Desktop Only */}
            {showMetadata && (
              <DocumentMetadata resumeData={documentStats} />
            )}
          </div>

          {/* Footer */}
          <ModalFooter
            onClose={handleClose}
            onDownload={handleDownload}
            documentStats={documentStats}
          />

          {/* Mobile Metadata Toggle */}
          <button
            onClick={toggleMetadata}
            className="md:hidden fixed bottom-20 right-4 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-elevation-2 flex items-center justify-center btn-glow z-20"
            aria-label="Toggle document information"
          >
            <Icon name={showMetadata ? "X" : "Info"} size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Metadata Overlay */}
      {showMetadata && (
        <div className="md:hidden fixed inset-0 z-30 bg-black/50 backdrop-blur-sm" onClick={toggleMetadata}>
          <div className="absolute bottom-0 left-0 right-0 bg-card border-t border-border rounded-t-2xl max-h-[70vh] overflow-y-auto">
            <DocumentMetadata resumeData={documentStats} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumePreviewModal;