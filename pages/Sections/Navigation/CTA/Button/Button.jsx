import classes from './Button.module.css';

const PrimaryButton = () => (
  <button className={classes.btn}>Get started</button>
);

export const SecondaryButton = () => (
  <a href='#'>
    <span className={classes.sec_label}>Login</span>
  </a>
);

export default PrimaryButton;
