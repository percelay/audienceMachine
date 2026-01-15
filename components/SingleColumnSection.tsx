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
      <div className="max-w-[900px] mx-auto text-center">
        <h3 className="text-[56px] font-bold text-black mb-[15px] tracking-[-1px] max-lg:text-[42px] max-md:text-[32px]">
          AI vs. <span className="text-brand">The Human Eye</span>
        </h3>
        <p className="text-2xl leading-[1.8] text-[#333333] mb-[30px] font-light max-lg:text-xl max-md:text-lg">
          Audiences are rapidly becoming desensitized to AI-generated video. We are doubling
          down on tactile reality—from ideation to production.
        </p>
        <p className="text-2xl leading-[1.8] text-[#333333] mb-[30px] font-light max-lg:text-xl max-md:text-lg">
          Keeping it real is going to be increasingly valuable as AI proliferates.
        </p>
      </div>
    </section>
  );
}
