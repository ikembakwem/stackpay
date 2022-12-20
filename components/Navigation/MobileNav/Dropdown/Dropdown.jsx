import classes from './Dropdown.module.css';

const Dropdown = ({ children }) => {
  return <div className={classes.wrapper}>{children}</div>;
};

export default Dropdown;
