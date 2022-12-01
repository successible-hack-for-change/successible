import React, { useState } from 'react';
import { Navbar, Button, Drawer, Position } from '@blueprintjs/core';
import Link from 'next/link';
import Image from 'next/image';

const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (state: boolean) => {
    setIsMenuOpen(!state);
    console.log(!state);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <Navbar className="hidden md:block">
        <Navbar.Group>
          <Image
            src="/successible-logo.svg"
            alt="Successible logo"
            height={30}
            width={30}
          />
          <Navbar.Heading className="pl-2">Successible</Navbar.Heading>
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
      <Navbar className="md:hidden">
        <Navbar.Group>
          <Button
            className="bp4-minimal"
            icon="menu"
            onClick={() => toggleMenu(isMenuOpen)}
          />
          <Navbar.Divider />
          <Image
            src="/successible-logo.svg"
            alt="Successible logo"
            height={30}
            width={30}
          />
          <Navbar.Heading className="pl-2">Successible</Navbar.Heading>
        </Navbar.Group>
      </Navbar>
      <Drawer
        isOpen={isMenuOpen}
        onClose={closeMenu}
        position={(Position.LEFT = Position.LEFT)}
        size={'200px'}
        canEscapeKeyClose
        canOutsideClickClose
        isCloseButtonShown
        title="Menu"
        hasBackdrop={false}
      >
        <Link href="/">
          <Button className="bp4-minimal mt-2" icon="home" text="Home" />
        </Link>
        <Link href="/instructions">
          <Button
            className="bp4-minimal mt-2"
            icon="manual"
            text="Instructions"
          />
        </Link>
        <Link href="/example-question">
          <Button
            className="bp4-minimal mt-2"
            icon="learning"
            text="Example question"
          />
        </Link>
        <Link href="/faq">
          <Button className="bp4-minimal mt-2" icon="help" text="FAQs" />
        </Link>
        <Link href="/start-test">
          <Button className="bp4-minimal mt-2" icon="play" text="Start test" />
        </Link>
      </Drawer>
    </header>
  );
};

export default Header;
