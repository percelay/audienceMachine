'use client';

import { useState } from 'react';
import { projects } from '@/lib/data';
import PortfolioCard from './PortfolioCard';
import VideoModal from './VideoModal';
import { Project } from '@/lib/types';

export default function PortfolioGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="work" className="px-20 py-20 bg-white max-lg:px-10 max-md:px-5 max-md:py-[60px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-[60px]">
          <h2 className="text-lg font-bold text-brand uppercase tracking-[3px] mb-[10px]">
            what we do
          </h2>
          <p className="text-lg text-[#666666] font-light">
            Click for some case studies
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-10 max-w-[1200px] mx-auto max-lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] max-lg:gap-[30px] max-md:grid-cols-1">
          {projects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              onClick={() => handleOpenModal(project)}
            />
          ))}
        </div>
      </div>

      <VideoModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
