import React from 'react';
import Image from 'next/image';
import { Divider } from '@blueprintjs/core';
import Link from 'next/link';

const Footer = (): JSX.Element => {
  return (
    <footer className="p-4 bg-darkest w-full text-white mt-auto">
      <div className="flex flex-row items-center w-full">
        <div className="flex items-center justify-center flex-1">
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
        <div className="flex-1 text-center">
          <h4 className="pb-2">Information</h4>
          <p className="m-0">
            <Link href="/instructions">Instructions</Link>
          </p>
          <p className="m-0">
            <Link href="/example-question">Example question</Link>
          </p>
          <p className="m-0" id="faq-link">
            <Link href="/faqs">FAQs</Link>
          </p>
        </div>
        <div className="flex-1 text-center">
          <h4 className="pb-2">Contact us</h4>
          <p className="m-0">help@successible.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
