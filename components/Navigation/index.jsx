import { useState } from 'react';
import Logo from '../components/Logo/Logo';
import CTA from './CTA/CTA';
import classes from './index.module.css';
import MobileNav from './MobileNav';
import NavMenu from './NavMenu/NavMenu';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={classes.header}>
      <div>
        <div className={classes.nav_wrapper}>
          <Logo />
          <NavMenu />
          <CTA />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
