import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ModalFooter = ({ onClose, onDownload, documentStats }) => {
  const stats = documentStats || {
    fileSize: "2.4 MB",
    format: "PDF",
    pages: 2,
    lastUpdated: "January 15, 2025"
  };

  const handleDownload = () => {
    // Create a mock download
    const link = document.createElement('a');
    link.href = "/resume.pdf";
    link.download = 'Swaraj_Ladke_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    if (onDownload) {
      onDownload();
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 border-t border-border bg-card/30 backdrop-blur-sm">
      {/* Document Statistics */}
      <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-4 md:mb-0">
        <div className="flex items-center space-x-2">
          <Icon name="Calendar" size={14} className="text-primary" />
          <span>Last Updated: {stats.lastUpdated}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Icon name="FileType" size={14} className="text-primary" />
          <span>{stats.format} Format</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Icon name="HardDrive" size={14} className="text-primary" />
          <span>{stats.fileSize}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Icon name="FileText" size={14} className="text-primary" />
          <span>{stats.pages} Pages</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-3">
        {/* Mobile Layout */}
        <div className="flex md:hidden space-x-2 w-full">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="flex-1"
          >
            Close
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={handleDownload}
            iconName="Download"
            iconPosition="left"
            className="btn-glow flex-1"
          >
            Download
          </Button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="hover:bg-muted/50 transition-colors duration-300"
          >
            Close Preview
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open('mailto:?subject=Swaraj Ladke Resume&body=Please find attached resume.', '_blank')}
            iconName="Mail"
            iconPosition="left"
            className="btn-glow"
          >
            Email Resume
          </Button>
          
          <Button
            variant="default"
            size="sm"
            onClick={handleDownload}
            iconName="Download"
            iconPosition="left"
            className="btn-glow shadow-elevation-1"
          >
            Download PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalFooter;