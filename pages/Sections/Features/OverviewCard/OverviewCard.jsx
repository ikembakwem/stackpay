import classes from './OverviewCard.module.css'

const OverviewCard = ({ imageUrl, title, text }) => {
  return (
    <div className={classes.card}>
      <div className={classes.icon}>
        <img src={imageUrl} alt='' />
      </div>
      <div>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.text}>{text}</p>
      </div>
    </div>
  )
}

export default OverviewCard
