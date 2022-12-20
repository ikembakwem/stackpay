import classes from './index.module.css';
import Backdrop from '../components/UI/Backdrop/Backdrop';
import Stat from './Stat/Stat';
import Container from '../components/UI/Container/Container';

const Stats = () => {
  return (
    <Backdrop>
      <Container>
        <div className={classes.wrapper}>
          <Stat
            title='$159B'
            description='Quaterly volume traded'
          />
          <Stat
            title='100+'
            description='Countries supported'
          />
          <Stat
            title='108M+'
            description='Verified users'
          />
        </div>
      </Container>
    </Backdrop>
  );
};

export default Stats;
