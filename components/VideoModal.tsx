'use client';

import { useEffect, useCallback } from 'react';
import { Project } from '@/lib/types';

interface VideoModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ project, isOpen, onClose }: VideoModalProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [handleEscape]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <div
      className={`fixed inset-0 z-[2000] flex items-center justify-center bg-black/[0.92] backdrop-blur-[8px] p-10 transition-all duration-300 max-lg:p-5 max-md:p-5 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      onClick={handleBackgroundClick}
    >
      <button
        className="absolute top-5 right-5 z-10 w-[45px] h-[45px] bg-white border-none rounded-full flex items-center justify-center cursor-pointer text-2xl text-black transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:bg-brand hover:text-white hover:rotate-90"
        onClick={onClose}
      >
        ×
      </button>
      <div
        className={`w-full max-w-[1200px] max-h-[90vh] bg-white flex rounded-xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.4)] transition-transform duration-300 max-lg:flex-col max-lg:max-h-[85vh] ${
          isOpen ? 'scale-100' : 'scale-95'
        }`}
      >
        {/* Video Section */}
        <div className="flex-[2] bg-black flex items-center justify-center relative min-h-[400px] max-lg:min-h-[300px]">
          {project.videoUrl ? (
            <div className="video-wrapper">
              {isOpen && (
                <iframe
                  src={project.videoUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
          ) : (
            <div className="text-center">
              <div className="modal-play-icon w-20 h-20 border-4 border-white rounded-full flex items-center justify-center mx-auto mb-5 text-white text-[30px] transition-all duration-300 cursor-pointer hover:bg-brand hover:border-brand" />
              <p className="text-white text-base font-bold uppercase tracking-[2px] mb-[10px]">
                Video Coming Soon
              </p>
              <p className="text-[#666666] text-xs">(Add videoUrl to projects data)</p>
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="flex-1 p-[50px] overflow-y-auto bg-white max-lg:p-[30px] max-md:p-[25px]">
          <h2 className="text-4xl font-bold leading-[1.2] mb-[10px] text-black max-md:text-[28px]">
            {project.title}
          </h2>
          <p className="text-sm font-bold text-brand uppercase tracking-[2px] mb-[30px]">
            {project.client}
          </p>

          <div>
            <p className="text-base leading-[1.7] text-[#333333] mb-5 font-light">
              {project.description}
            </p>
            {project.press.length > 0 && (
              <ul className="modal-press list-none p-0 mb-[30px]">
                {project.press.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm text-[#666666] italic mb-3 pl-[25px] relative"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="bg-[#FAFAFA] p-[25px] rounded-lg">
            {project.stats.map((stat, index) => (
              <div
                key={index}
                className={`${
                  index < project.stats.length - 1
                    ? 'mb-5 pb-5 border-b border-[#E5E5E5]'
                    : ''
                }`}
              >
                <p className="text-[11px] text-[#999999] uppercase tracking-[1.5px] font-bold mb-[5px]">
                  {stat.label}
                </p>
                <p className="text-xl font-bold text-brand">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
