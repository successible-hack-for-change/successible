import React from 'react';
import Image from 'next/image';

const Footer = (): JSX.Element => {
  return (
    <footer className="p-4 bg-darkest w-full text-white mt-auto">
      <div className="flex items-center justify-center">
        <Image
          src="/successible-logo-white.svg"
          alt="Successible logo"
          height={40}
          width={40}
        />
        <div className="pl-3">
          <p className="p-0 m-0 text-base">Successible</p>
          <p className="p-0 m-0 text-xs">Opportunity for everyone</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
