import classes from './Backdrop.module.css'

const Backdrop = ({ children }) => (
  <div className={classes.color}>{children}</div>
)

export default Backdrop
