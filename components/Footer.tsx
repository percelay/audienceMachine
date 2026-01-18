export default function Footer() {
  return (
    <footer id="contact" className="px-20 pt-20 pb-10 bg-black text-white max-lg:px-10">
      <div className="flex justify-between mb-[50px] max-lg:flex-col max-lg:gap-10">
        <div className="footer-left">
          <h3 className="text-[28px] text-brand mb-5 font-bold">Ready to Create?</h3>
          <p className="text-base text-[#999999] max-w-[400px] font-light">
            Let&apos;s engineer content that earns attention and drives <em>real</em> results for your
            brand.
          </p>
        </div>
        <div className="flex gap-20 max-lg:gap-10">
          <div className="footer-column">
            <h4 className="text-base mb-5 text-white font-bold">Contact</h4>
            <a
              href="mailto:hello@percelay.com"
              className="block text-[#999999] no-underline mb-3 text-[15px] transition-colors duration-300 font-light hover:text-brand"
            >
              hello@percelay.com
            </a>
            <a
              href="tel:+15551234567"
              className="block text-[#999999] no-underline mb-3 text-[15px] transition-colors duration-300 font-light hover:text-brand"
            >
              +1 (555) 123-4567
            </a>
          </div>
          <div className="footer-column">
            <h4 className="text-base mb-5 text-white font-bold">Follow</h4>
            <a
              href="#"
              className="block text-[#999999] no-underline mb-3 text-[15px] transition-colors duration-300 font-light hover:text-brand"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="block text-[#999999] no-underline mb-3 text-[15px] transition-colors duration-300 font-light hover:text-brand"
            >
              Twitter
            </a>
            <a
              href="#"
              className="block text-[#999999] no-underline mb-3 text-[15px] transition-colors duration-300 font-light hover:text-brand"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="text-center pt-10 border-t border-[#222222] text-[#666666] text-sm font-light">
        <p>&copy; 2025 James Percelay. All rights reserved.</p>
      </div>
    </footer>
  );
}
