import Container from '../../components/UI/Container/Container';
import Card from './Card/Card';
import classes from './index.module.css';
import Title, { Subtitle } from './Typography/Typography';
import data from '../../../utils/overview.json';

const Overview = () => (
  <section>
    <Container>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <Title />
        </div>
        <div className={classes.content}>
          <Subtitle />
        </div>
        <div className={classes.content}>
          <div className={classes.cards}>
            {data.map(d => (
              <Card
                icon={d.icon}
                title={d.title}
                description={d.description}
                link={d.link}
                key={Math.random()}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default Overview;
