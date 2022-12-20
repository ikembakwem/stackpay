import classes from './FooterLinkBlock.module.css';
import data from '../../../../utils/data.json';
import React from 'react';

const FooterLinkBlock = () => {
  return (
    <React.Fragment>
      {data.map(dObj => {
        const { title, links } = dObj;

        return (
          <div
            key={Math.random}
            className={classes.wrapper}
          >
            <div>
              <h2 className={classes.title}>{title}</h2>
              <ul>
                {links.map(link => {
                  const { id, name, href } = link;

                  return (
                    <li key={id}>
                      <a href={href}>{name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default FooterLinkBlock;
