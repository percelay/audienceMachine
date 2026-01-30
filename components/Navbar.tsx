'use client';

export default function Navbar() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full px-20 py-2 flex justify-end items-center z-[1000] bg-white/95 backdrop-blur-[10px] border-b border-black/5 max-lg:px-10 max-lg:py-2">
      <div className="flex gap-10 max-md:gap-5">
        <a
          href="#work"
          onClick={(e) => handleSmoothScroll(e, '#work')}
          className="text-black no-underline text-[15px] font-medium transition-colors duration-300 hover:text-brand"
        >
          Work
        </a>
        <a
          href="#about"
          onClick={(e) => handleSmoothScroll(e, '#about')}
          className="text-black no-underline text-[15px] font-medium transition-colors duration-300 hover:text-brand"
        >
          About
        </a>
        <a
          href="#contact"
          onClick={(e) => handleSmoothScroll(e, '#contact')}
          className="text-black no-underline text-[15px] font-medium transition-colors duration-300 hover:text-brand"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
