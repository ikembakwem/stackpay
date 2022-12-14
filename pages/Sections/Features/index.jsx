import classes from './index.module.css'
import Container from '../../components/UI/Container/Container'
import Overview from './Overview/Overview'
import OverviewCard from './OverviewCard/OverviewCard'
import data from '../../../utils/features.json'

const Features = () => {
  return (
    <section>
      <Container>
        <div className={classes.overview}>
          <Overview />
          <div className={classes.app_features}>
            <div className={classes.feature_wrapper}>
              {data.map(res => (
                <OverviewCard
                  key={Math.random()}
                  imageUrl={res.imageUrl}
                  title={res.title}
                  text={res.text}
                />
              ))}
            </div>
            <div className={classes.img_wrapper}>
              <img
                src='/images/feature-img.webp'
                alt=''
                className={classes.cover_img}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Features
