'use client';

import Image from 'next/image';
import { Project } from '@/lib/types';

interface PortfolioCardProps {
  project: Project;
  onClick: () => void;
}

export default function PortfolioCard({ project, onClick }: PortfolioCardProps) {
  return (
    <div
      className="cursor-pointer transition-all duration-[400ms] hover:-translate-y-2 group"
      onClick={onClick}
    >
      <div className="relative aspect-video mb-5 overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-[400ms] group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-[400ms] group-hover:scale-105"
            unoptimized
            loading="lazy"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-[60px] font-bold text-white/20 select-none"
            style={{ backgroundColor: project.color }}
          >
            {project.client.split(' ')[0]}
          </div>
        )}
        <div className="absolute inset-0 bg-brand/90 backdrop-blur-[2px] flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="play-button w-[70px] h-[70px] border-[3px] border-white rounded-full flex items-center justify-center text-white text-2xl" />
        </div>
      </div>
      <div className="px-[5px]">
        <div className="flex justify-between items-start mb-2 gap-[15px]">
          <h3 className="text-[22px] font-bold text-black leading-[1.3] transition-colors duration-300 group-hover:text-brand">
            {project.title}
          </h3>
        </div>
        <p className="text-[15px] text-[#666666] font-light">{project.client}</p>
      </div>
    </div>
  );
}
