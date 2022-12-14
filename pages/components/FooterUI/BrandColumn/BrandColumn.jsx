import classes from './BrandColumn.module.css'
import Logo from '../../Logo/Logo'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import BrandInfo from '../BrandInfo/BrandInfo'

const BrandColumn = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.inner_wrapper}>
        <Logo />
        <div className={classes.mb_3}></div>
        <LanguageSelector />
        <BrandInfo />
      </div>
    </div>
  )
}

export default BrandColumn
