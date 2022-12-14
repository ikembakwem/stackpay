import classes from './Footer.module.css'

const Footer = ({ children }) => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.w_full}>
          <div className={classes.content}>{children}</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
