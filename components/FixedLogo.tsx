'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function FixedLogo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logo = (
    <div
      style={{
        position: 'fixed',
        top: '48px',
        left: '80px',
        zIndex: 9999,
      }}
    >
      <Image
        src="https://i.imgur.com/3YvnLTv.png"
        alt="Percelay"
        width={200}
        height={200}
        className="h-[200px] w-auto"
        unoptimized
        referrerPolicy="no-referrer"
      />
    </div>
  );

  if (!mounted) return null;

  return createPortal(logo, document.body);
}
