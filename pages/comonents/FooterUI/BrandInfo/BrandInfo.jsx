import classes from './BrandInfo.module.css'

const BrandInfo = () => {
  return (
    <div className={classes.brand_info}>
      <div className={classes.copyright}>
        © 2022 cryptraffic
      </div>
      <div>
        <a className={classes.brand_link} href=''>
          Blog
        </a>
        <span>•</span>
        <a className={classes.brand_link} href=''>
          Twitter
        </a>
        <span>•</span>
        <a className={classes.brand_link} href=''>
          Facebook
        </a>
      </div>
    </div>
  )
}

export default BrandInfo
