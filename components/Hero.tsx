'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroComplete(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center px-20 pt-[120px] pb-10 relative max-lg:flex-col max-lg:px-10 max-lg:py-20">
      <div className="flex items-center gap-20 mb-[60px] w-full max-lg:flex-col max-lg:gap-10">
        {/* Hero Content */}
        <div className="flex-1 max-w-[600px] z-[2] max-lg:text-center max-lg:mb-[50px] max-lg:pr-0 max-lg:max-w-full">
          <h1 className="text-[81px] font-bold leading-[1.1] mb-0 text-black tracking-[-2px] max-lg:text-[48px] max-md:text-[36px]">
            Why pay for attention when you can{' '}
            <span className="text-brand">earn it?</span>
          </h1>
        </div>

        {/* Hero Visual */}
        <div className="flex-1 flex flex-col justify-center items-center relative">
          <div
            className={`effect-container ${introComplete ? 'intro-complete' : ''}`}
          >
            <Image
              src="https://i.imgur.com/ltqfQvG.jpeg"
              alt="James Percelay Studio"
              fill
              className="img-2 object-cover"
              unoptimized
              referrerPolicy="no-referrer"
            />
            <Image
              src="https://i.imgur.com/7VebNQp.png"
              alt="Viral Stunt Action"
              fill
              className="img-1 object-cover"
              unoptimized
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-center mt-5 text-sm text-[#666666]">
            <strong className="font-bold">HUM RIDER</strong> | Verizon
          </p>
        </div>
      </div>

      {/* Hero Bottom */}
      <div className="w-full text-left max-w-[1200px] mx-auto mr-[15%]">
        <div className="text-lg font-bold text-brand uppercase tracking-[3px] mb-[25px]">
          Under The Hood
        </div>
        <p className="text-xl leading-[1.7] text-[#333333] font-light max-w-[900px] max-md:text-lg">
          People prefer what they discover over what they&apos;re sold. We bridge that gap by
          engineering content that sparks interest and engagement, without feeling branded.
          Through immersive scenarios, inventive storytelling, and custom-built machines, we
          turn messaging into cultural moments that the media, and your audience, can&apos;t
          help but find & share.
        </p>
      </div>
    </section>
  );
}
