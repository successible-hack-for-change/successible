import React from 'react';
import { Navbar, Button } from '@blueprintjs/core';
import Link from 'next/link';

const Header = (): JSX.Element => {
  return (
    <header>
      <Navbar>
        <Navbar.Group>
          <Navbar.Heading>Successible</Navbar.Heading>
          <Navbar.Divider />
          <Link href="/">
            <Button className="bp4-minimal" icon="home" text="Home" />
          </Link>
          <Link href="/instructions">
            <Button className="bp4-minimal" icon="manual" text="Instructions" />
          </Link>
          <Link href="/example-question">
            <Button
              className="bp4-minimal"
              icon="learning"
              text="Example question"
            />
          </Link>
          <Link href="/start-test">
            <Button className="bp4-minimal" icon="play" text="Start test" />
          </Link>
        </Navbar.Group>
      </Navbar>
    </header>
  );
};

export default Header;
