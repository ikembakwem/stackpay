import classes from './LinkItem.module.css'

const LinkItem = ({ linkTitle, linkUrl }) => (
  <a href={linkUrl}>
    <div className={classes.item}>
      <span>{linkTitle}</span>
    </div>
  </a>
)

export default LinkItem
