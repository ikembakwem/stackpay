import FooterLinkBlock from '../FooterLinkBlock/FooterLinkBlock';
import classes from './PageLinks.module.css';

const PageLinks = () => {
  return (
    <div className={classes.container}>
      <FooterLinkBlock />
    </div>
  );
};

export default PageLinks;
