import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';

const ResumeViewer = ({ resumeUrl ="https://swarajladke.github.io/portfolio/resume.pdf", onError }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [hasError, setHasError] = useState(false); // ✅ You missed declaring this state

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 25, 200));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 25, 50));
  const handleResetZoom = () => setZoomLevel(100);

  const handleIframeError = () => {
    setHasError(true); // ✅ Mark error occurred
    setIsLoading(false);
    if (onError) onError();
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex items-center justify-between p-4 bg-muted border-b">
        <div className="flex gap-2">
          <Button onClick={handleZoomOut} disabled={zoomLevel <= 50}>Zoom Out</Button>
          <span>{zoomLevel}%</span>
          <Button onClick={handleZoomIn} disabled={zoomLevel >= 200}>Zoom In</Button>
          <Button onClick={handleResetZoom}>Reset</Button>
        </div>
        <Button onClick={() => {
            const link = document.createElement('a');
            link.href = resumeUrl;
            link.download = 'Swaraj_Ladke_Resume.pdf'; // Give it a clean filename
            document.body.appendChild(link);
            link.click();
             document.body.removeChild(link);
          }}>
           Download
        </Button>

      </div>

      <div className="flex-1 overflow-auto bg-muted p-4">
        {isLoading ? (
          <p className="text-center text-muted">Loading resume...</p>
        ) : hasError ? (
          <p className="text-center text-red-500">
            Failed to load resume preview. You can still download it.
          </p>
        ) : (
          <iframe
            src="https://drive.google.com/file/d/1l-NXRPne-Y5NAznCbB7E-HpIePFd6YDe/preview"
            title="Resume"
            width="100%"
            height="1000px"
            style={{
              border: "1px solid #ccc",
              transform: `scale(${zoomLevel / 100})`,
              transformOrigin: 'top center',
            }}
            onError={handleIframeError}
          />
        )}
      </div>
    </div>
  );
};

export default ResumeViewer;
