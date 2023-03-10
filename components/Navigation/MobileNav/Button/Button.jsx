import classes from './Button.module.css';

const Primary = () => (
  <button className={classes.btn}>Get started</button>
);

export const Secondary = () => (
  <button className={`${classes.btn} ${classes.secondary}`}>
    Login
  </button>
);

export default Primary;
