import classes from './index.module.css'
import BrandColumn from './BrandColumn/BrandColumn'
import PageLinks from './PageLinks/PageLinks'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.w_full}>
          <div className={classes.content}>
            <BrandColumn />
            <PageLinks />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
