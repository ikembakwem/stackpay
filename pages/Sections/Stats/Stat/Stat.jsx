import classes from './Stat.module.css'

const Stat = ({ title, description }) => {
  return (
    <div className={classes.stat}>
      <div className={classes.title}>{title}</div>
      <div className={classes.details}>{description}</div>
    </div>
  )
}

export default Stat
