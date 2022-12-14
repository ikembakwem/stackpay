import Copy from './Copy/Copy'
import Image from './Image/Image'
import classes from './index.module.css'

const Hero = () => (
  <section className={classes.container}>
    <div className={classes.content}>
      <Copy />
      <Image />
    </div>
  </section>
)

export default Hero
