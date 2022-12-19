import classes from './Typography.module.css';

const Title = () => (
  <h2 className={classes.title}>
    The most trusted cryptocurrency platform
  </h2>
);

export const Subtitle = () => (
  <p className={classes.subtitle}>
    Here are a few reasons why you should choose Cryptraffic
  </p>
);

export default Title;
