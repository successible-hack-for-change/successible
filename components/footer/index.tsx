import React from 'react';
import Image from 'next/image';

const Footer = (): JSX.Element => {
  return (
    <footer className="p-4 bg-darkest w-full text-white mt-auto">
      <div className="mx-auto">
        <p className="text-center">
          To contact Successible, email us at info@successible.com
        </p>
        <p className="text-center">
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
