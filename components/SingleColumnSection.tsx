'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function SingleColumnSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`px-20 py-20 bg-[#FAFAFA] max-lg:px-10 scroll-animate ${
        isVisible ? 'visible' : ''
      }`}
    >
      <div className="max-w-[900px] text-left">
        <h3 className="text-[56px] font-bold text-black mb-[15px] tracking-[-1px] max-lg:text-[42px] max-md:text-[32px]">
          AI vs. <span className="text-brand">The Human Eye</span>
        </h3>
        <p className="text-xl leading-[1.8] text-[#333333] mb-[30px] font-light max-lg:text-lg max-md:text-base">
          We&apos;re doubling down on actual reality, from human ideation to physical production.
        </p>
        <p className="text-xl leading-[1.8] text-[#333333] mb-[30px] font-light max-lg:text-lg max-md:text-base">
          Keeping it real will become increasingly valuable as AI generated content proliferates.
        </p>
      </div>
    </section>
  );
}
