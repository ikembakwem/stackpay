import PrimaryButton, {
  SecondaryButton
} from './Button/Button';
import classes from './CTA.module.css';

const CTA = () => (
  <div className={classes.wrapper}>
    <SecondaryButton />
    <PrimaryButton />
  </div>
);

export default CTA;
