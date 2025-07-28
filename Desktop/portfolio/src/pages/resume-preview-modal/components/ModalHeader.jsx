import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ModalHeader = ({ onClose, onDownload, onPrint, isLoading }) => {
  const handleDownload = () => {
    // Create a mock download
    const link = document.createElement('a');
    link.href = "/portfolio/resume.pdf";
    link.download ="resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    if (onDownload) {
      onDownload();
    }
  };

  const handlePrint = () => {
    window.print();
    if (onPrint) {
      onPrint();
    }
  };

  return (
    <div className="flex items-center justify-between p-6 border-b border-border bg-card/50 backdrop-blur-sm">
      {/* Left Section - Title and Info */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-elevation-1">
          <Icon name="FileText" size={24} color="currentColor" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground gradient-text">
            Resume Preview
          </h2>
          <div className="flex items-center space-x-4 mt-1">
            <p className="text-sm text-muted-foreground">
              Professional CV & Portfolio Summary
            </p>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Icon name="Calendar" size={12} />
              <span>Updated: July 28, 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Action Buttons */}
      <div className="flex items-center space-x-3">
        {/* Mobile Actions - Stacked */}
        <div className="flex md:hidden flex-col space-y-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrint}
            disabled={isLoading}
            iconName="Printer"
            iconPosition="left"
            className="btn-glow w-full"
          >
            Print
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={handleDownload}
            disabled={isLoading}
            iconName="Download"
            iconPosition="left"
            className="btn-glow w-full"
          >
            Download
          </Button>
        </div>

        {/* Desktop Actions - Horizontal */}
        <div className="hidden md:flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePrint}
            disabled={isLoading}
            iconName="Printer"
            iconPosition="left"
            className="btn-glow"
          >
            Print
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownload}
            disabled={isLoading}
            iconName="Share2"
            iconPosition="left"
            className="btn-glow"
          >
            Share
          </Button>
          
          <Button
            variant="default"
            size="sm"
            onClick={handleDownload}
            disabled={isLoading}
            loading={isLoading}
            iconName="Download"
            iconPosition="left"
            className="btn-glow"
          >
            Download PDF
          </Button>
        </div>

        {/* Close Button */}
        <div className="ml-2 pl-2 border-l border-border">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300"
          >
            <Icon name="X" size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalHeader;