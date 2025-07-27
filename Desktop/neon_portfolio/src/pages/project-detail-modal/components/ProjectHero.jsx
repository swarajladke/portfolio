import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectHero = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const images = project.gallery || [project.image];
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleVideoToggle = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div className="mb-8">
      {/* Main Image/Video Display */}
      <div className="relative group">
        <div className="relative overflow-hidden rounded-xl border border-border shadow-elevation-2">
          {project.demoVideo && isVideoPlaying ? (
            <div className="relative">
              <iframe
                src={project.demoVideo}
                className="w-full h-64 md:h-80 lg:h-96"
                title={`${project.title} Demo Video`}
                allowFullScreen
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={handleVideoToggle}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
              >
                <Icon name="X" size={20} />
              </Button>
            </div>
          ) : (
            <>
              <Image
                src={images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Image Navigation Arrows */}
              {hasMultipleImages && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Icon name="ChevronLeft" size={24} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Icon name="ChevronRight" size={24} />
                  </Button>
                </>
              )}

              {/* Video Play Button Overlay */}
              {project.demoVideo && (
                <Button
                  variant="ghost"
                  onClick={handleVideoToggle}
                  className="absolute inset-0 bg-black/30 hover:bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center glow-primary">
                    <Icon name="Play" size={24} />
                  </div>
                </Button>
              )}
            </>
          )}
        </div>

        {/* Image Counter */}
        {hasMultipleImages && (
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {hasMultipleImages && (
        <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentImageIndex
                  ? 'border-primary shadow-glow'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <Image
                src={image}
                alt={`${project.title} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectHero;