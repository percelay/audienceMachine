'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      id="about"
      className={`px-20 py-20 flex items-center gap-[100px] bg-white max-lg:flex-col max-lg:px-10 scroll-animate ${
        isVisible ? 'visible' : ''
      }`}
    >
      <div className="flex-1">
        <div className="text-lg font-bold text-brand uppercase tracking-[3px] mb-[30px]">
          CHIEF ENGINEER
        </div>
        <p className="text-lg leading-[1.8] text-[#333333] mb-5 font-light max-md:text-base">
          James Percelay loves building things. He&apos;s also a best-selling author, WGA/ PGA
          Member, co-founder of Thinkmodo, head of Jelly Media, and former SNL commercial
          parody producer. James created some of the most iconic viral videos of the last
          decade - often featuring machines he invented. His award-winning work redefined
          branded conteht, and has delivered global audience engagement, valuable media
          coverage, and activation.
        </p>

        <div className="flex items-center gap-4 mt-8 max-md:flex-col">
          <Image
            src="https://i.imgur.com/RQgktzf.png"
            alt="Featured in Variety, Backstage, CNBC, Today, Entrepreneur, Fast Company, Forbes, Adweek, Bloomberg Businessweek, Fox Business, The New York Times, WSJ, NPR, ET, Yahoo, Inc, The Hollywood Reporter, Mashable"
            width={500}
            height={150}
            className="h-[150px] w-auto"
            unoptimized
            referrerPolicy="no-referrer"
          />
          <Image
            src="https://i.imgur.com/iMHjgqu.png"
            alt="Project image 1"
            width={40}
            height={50}
            className="h-[50px] w-auto object-cover"
            unoptimized
            referrerPolicy="no-referrer"
          />
          <Image
            src="https://i.imgur.com/CN4gSf9.png"
            alt="Project image 2"
            width={130}
            height={90}
            className="h-[90px] w-auto object-cover"
            unoptimized
            referrerPolicy="no-referrer"
          />
          <Image
            src="https://i.imgur.com/McdvOEP.png"
            alt="Project image 3"
            width={130}
            height={90}
            className="h-[90px] w-auto object-cover"
            unoptimized
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}
