import classes from './Copy.module.css'
import Pill from '../Pill/Pill'
import {
  HeroSubtitle,
  HeroTitle
} from '../Typography/Typography'
import EmailCTA from '../EmailCTA/EmailCTA'

const Copy = () => (
  <div className={classes.left_section}>
    <Pill />
    <HeroTitle />
    <HeroSubtitle />
    <EmailCTA />
  </div>
)

export default Copy
