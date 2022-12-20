import Copy from './Copy/Copy';
import Image from './Image/Image';
import classes from './index.module.css';

const Hero = () => {
  return (
    <section className={classes.container}>
      <div className={classes.content}>
        <Copy />
        <div className={classes.img_wrapper}>
          <Image />
        </div>
      </div>
    </section>
  );
};

export default Hero;
