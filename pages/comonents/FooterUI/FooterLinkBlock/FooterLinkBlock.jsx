import classes from './FooterLinkBlock.module.css'

const FooterLinkBlock = () => {
  return (
    <div className={classes.wrapper}>
      <div>
        <div>
          <h2 className={classes.title}>Company</h2>
          <ul>
            <li>Careers</li>
            <li>About</li>
            <li>Affiliates</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Security</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FooterLinkBlock
