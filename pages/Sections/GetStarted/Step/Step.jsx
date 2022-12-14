import classes from './Step.module.css'

const Step = ({ title, children }) => {
  return (
    <div className={classes.step}>
      <div className={classes.icon_wrapper}>{children}</div>
      <p className={classes.step_title}>{title}</p>
    </div>
  )
}

export default Step
