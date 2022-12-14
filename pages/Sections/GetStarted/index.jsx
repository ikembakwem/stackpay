import classes from './index.module.css'
import Container from '../../components/UI/Container/Container'
import SectionTitle from './SectionTitle/SectionTitle'
import SectionSubtitle from './SectionSubtitle/SectionSubtitle'
import Step from './Step/Step'
import Line from '../../components/UI/Line/Line'

const GettingStarted = () => {
  return (
    <section>
      <Container>
        <div className={classes.wrapper}>
          <SectionTitle />
          <SectionSubtitle />
          <div className={classes.steps}>
            <Step
              iconUrl='/images/create-user.svg'
              title='Create an account'
            />
            <Line />
            <Step
              iconUrl='/images/bank-icon.svg'
              title='Link your bank account'
            />
            <Line />
            <Step
              iconUrl='/images/trade-icon.svg'
              title='Start buying and selling'
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default GettingStarted
