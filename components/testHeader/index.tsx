import React from 'react';
import { Navbar } from '@blueprintjs/core';
import Image from 'next/image';

const TestHeader = (): JSX.Element => {
  return (
    <header>
      <Navbar>
        <Navbar.Group>
          <Image
            src="/successible-logo.svg"
            alt="Successible logo"
            height={30}
            width={30}
          />
          <Navbar.Heading className="pl-2">Successible</Navbar.Heading>
        </Navbar.Group>
      </Navbar>
    </header>
  );
};

export default TestHeader;
