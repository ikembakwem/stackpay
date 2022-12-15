import Logo from '../../components/Logo/Logo'
import CTA from './CTA/CTA'
import classes from './index.module.css'
import NavMenu from './NavMenu/NavMenu'

const Navigation = () => {
  return (
    <header className={classes.header}>
      <div>
        <div className={classes.nav_wrapper}>
          <Logo />
          <NavMenu />
          <CTA />
        </div>
      </div>
    </header>
  )
}

export default Navigation
