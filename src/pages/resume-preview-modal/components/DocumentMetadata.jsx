import React from 'react';
import Icon from '../../../components/AppIcon';

const DocumentMetadata = ({ resumeData }) => {
  const metadata = {
    fileName: "Swaraj_Ladke_Resume.pdf",
    fileSize: "2.4 MB",
    lastModified: "January 15, 2025",
    pageCount: 2,
    format: "PDF",
    version: "v2.1",
    downloads: 847,
    views: 3421
  };

  const stats = [
    { label: "File Size", value: metadata.fileSize, icon: "HardDrive" },
    { label: "Pages", value: metadata.pageCount, icon: "FileText" },
    { label: "Format", value: metadata.format, icon: "File" },
    { label: "Version", value: metadata.version, icon: "GitBranch" }
  ];

  const analytics = [
    { label: "Total Views", value: metadata.views.toLocaleString(), icon: "Eye" },
    { label: "Downloads", value: metadata.downloads.toLocaleString(), icon: "Download" },
    { label: "Last Updated", value: metadata.lastModified, icon: "Calendar" },
    { label: "Status", value: "Current", icon: "CheckCircle" }
  ];

  return (
    <div className="w-80 bg-card border-l border-border p-6 overflow-y-auto">
      {/* Document Info */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Icon name="Info" size={20} className="mr-2 text-primary" />
          Document Information
        </h3>
        
        <div className="space-y-3">
          <div className="p-3 bg-muted/50 rounded-lg border border-border">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="FileText" size={16} className="text-primary" />
              <span className="text-sm font-medium text-foreground">File Name</span>
            </div>
            <p className="text-sm text-muted-foreground break-all">{metadata.fileName}</p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {stats.map((stat, index) => (
              <div key={index} className="p-3 bg-muted/30 rounded-lg border border-border">
                <div className="flex items-center space-x-2 mb-1">
                  <Icon name={stat.icon} size={14} className="text-primary" />
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
                <p className="text-sm font-medium text-foreground">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Analytics */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Icon name="BarChart3" size={20} className="mr-2 text-primary" />
          Analytics
        </h3>
        
        <div className="space-y-3">
          {analytics.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border hover:bg-muted/50 transition-colors duration-300">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Icon name={item.icon} size={16} className="text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </div>
              <span className="text-sm font-medium text-foreground">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Icon name="Zap" size={20} className="mr-2 text-primary" />
          Quick Actions
        </h3>
        
        <div className="space-y-2">
          <button className="w-full flex items-center space-x-3 p-3 bg-muted/30 rounded-lg border border-border hover:bg-muted/50 hover:border-primary/50 transition-all duration-300 text-left">
            <Icon name="Share2" size={16} className="text-primary" />
            <span className="text-sm text-foreground">Share Resume</span>
          </button>
          
          <button className="w-full flex items-center space-x-3 p-3 bg-muted/30 rounded-lg border border-border hover:bg-muted/50 hover:border-primary/50 transition-all duration-300 text-left">
            <Icon name="Copy" size={16} className="text-primary" />
            <span className="text-sm text-foreground">Copy Link</span>
          </button>
          
          <button className="w-full flex items-center space-x-3 p-3 bg-muted/30 rounded-lg border border-border hover:bg-muted/50 hover:border-primary/50 transition-all duration-300 text-left">
            <Icon name="Mail" size={16} className="text-primary" />
            <span className="text-sm text-foreground">Email Resume</span>
          </button>
        </div>
      </div>

      {/* Contact Information */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Icon name="User" size={20} className="mr-2 text-primary" />
          Contact Details
        </h3>
        
        <div className="space-y-3">
          <div className="p-3 bg-muted/30 rounded-lg border border-border">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Mail" size={14} className="text-primary" />
              <span className="text-xs text-muted-foreground">Email</span>
            </div>
            <p className="text-sm text-foreground">swarajladke20@gmail.com</p>
          </div>
          
          <div className="p-3 bg-muted/30 rounded-lg border border-border">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Phone" size={14} className="text-primary" />
              <span className="text-xs text-muted-foreground">Phone</span>
            </div>
            <p className="text-sm text-foreground">+91 9359123490</p>
          </div>
          
          <div className="p-3 bg-muted/30 rounded-lg border border-border">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="MapPin" size={14} className="text-primary" />
              <span className="text-xs text-muted-foreground">Location</span>
            </div>
            <p className="text-sm text-foreground">Pune, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentMetadata;