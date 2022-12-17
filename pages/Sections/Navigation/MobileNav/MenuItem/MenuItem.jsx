import classes from './MenuItem.module.css';

const MenuItem = ({ text, link }) => (
  <div className={classes.item}>
    <a href={link}>{text}</a>
  </div>
);

export default MenuItem;
