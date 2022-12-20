import classes from './Step.module.css'

const Step = ({ title, iconUrl }) => {
  return (
    <div className={classes.step}>
      <div className={classes.icon_wrapper}>
        <img src={iconUrl} alt='' />
      </div>
      <p className={classes.step_title}>{title}</p>
    </div>
  )
}

export default Step
