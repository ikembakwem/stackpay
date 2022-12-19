import Primary, { Secondary } from './Button/Button';
import Dropdown from './Dropdown/Dropdown';
import classes from './index.module.css';
import MenuItem from './MenuItem/MenuItem';
import data from '../../../../utils/links.json';
import { useState } from 'react';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownHandler = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className={classes.nav__wrapper}>
      <div
        className={classes.menu}
        onClick={dropdownHandler}
      >
        <img src='/images/hamburger-menu.svg' alt='' />
        {isOpen && (
          <Dropdown>
            <div className={classes.menu__wrapper}>
              {data.map(d => (
                <MenuItem
                  key={Math.random()}
                  text={d.linkTitle}
                  link={d.linkUrl}
                />
              ))}
              <div className={classes.cta__wrapper}>
                <Primary />
                <Secondary />
              </div>
            </div>
          </Dropdown>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
