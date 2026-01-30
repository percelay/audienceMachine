import Image from 'next/image';

export default function FixedLogo() {
  return (
    <div
      style={{
        position: 'fixed',
        top: '48px',
        left: '80px',
        zIndex: 1001,
      }}
    >
      <Image
        src="https://i.imgur.com/3YvnLTv.png"
        alt="Percelay"
        width={200}
        height={200}
        className="h-[200px] w-auto max-lg:left-10"
        unoptimized
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
