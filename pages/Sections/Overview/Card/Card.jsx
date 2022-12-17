import classes from './Card.module.css';

const Card = ({ icon, title, description, link }) => {
  return (
    <div className={classes.card}>
      <div className={classes.card__icon}>
        <img src={icon} alt='' />
      </div>
      <h2 className={classes.card__title}>{title}</h2>
      <p className={classes.card__description}>
        {description}
      </p>
      <a href='#' className={classes.card__link}>
        {link}
      </a>
    </div>
  );
};

export default Card;
