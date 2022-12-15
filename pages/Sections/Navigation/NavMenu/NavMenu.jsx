import LinkItem from '../LinkItem/LinkItem'
import classes from './NavMenu.module.css'
import data from '../../../../utils/links.json'

const NavMenu = () => {
  return (
    <div className={classes.menu}>
      {data.map(res => (
        <LinkItem
          key={Math.random()}
          linkTitle={res.linkTitle}
          linkUrl={res.linkUrl}
        />
      ))}
    </div>
  )
}

export default NavMenu
