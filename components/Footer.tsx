import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contact" className="px-20 py-20 bg-[#F5F5F5] max-lg:px-10">
      <div className="flex flex-col items-center text-center">
        <h3 className="text-[32px] text-black mb-8 font-bold max-md:text-[24px]">
          Ready to start the machine?
        </h3>

        <a
          href="mailto:info@audiencemachine.co"
          className="flex items-center gap-2 text-lg text-[#333333] no-underline mb-10 transition-colors duration-300 hover:text-brand"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          info@audiencemachine.co
        </a>

        <Image
          src="https://i.imgur.com/mtBu5Pf.png"
          alt="Audience Machine"
          width={100}
          height={100}
          className="h-[100px] w-auto"
          unoptimized
          referrerPolicy="no-referrer"
        />
      </div>
    </footer>
  );
}
