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
            <Step title='Create an account'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='64'
                height='60'
                fill='none'
              >
                <path
                  fill='#56B4FC'
                  d='M32 16a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM32 20c-11.05 0-20 7.16-20 16v18h40V36c0-8.84-8.95-16-20-16Z'
                />
                <path
                  fill='#BFE9FF'
                  d='M64 36H0v24h64V36Z'
                />
                <path
                  fill='#1652F0'
                  d='M52 36H12v24h40V36Z'
                />
                <path fill='#fff' d='M33 42h-2v12h2V42Z' />
                <path fill='#fff' d='M38 49v-2H26v2h12Z' />
              </svg>
            </Step>
            <Line />
            <Step title='Link your bank account'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='65'
                height='56'
                fill='none'
              >
                <path
                  fill='#BFE9FF'
                  d='M57.03 20h-50v24h50V20Z'
                />
                <path
                  fill='#56B4FC'
                  d='M60.03 52v-4h-8V16.06L64 16.1l.01-4.1L32.06 0 .01 12 0 15.9l12.03.04V48h-8v4h-4v4h64v-4h-4Zm-16-4h-8V16.01l8 .03V48Zm-24-32.04 8 .03V48h-8V15.96Z'
                />
                <path
                  fill='#1652F0'
                  d='M52.03 20h-40v24h40V20Z'
                />
                <path
                  fill='#fff'
                  d='M36.41 34.38c0-2.34-1.42-3.12-4.17-3.5-2.03-.29-2.42-.77-2.42-1.72 0-.9.69-1.54 2.01-1.54 1.34 0 2.04.52 2.26 1.75h1.99c-.19-1.86-1.26-2.96-3.06-3.28V24h-2v2.05c-1.98.28-3.26 1.6-3.26 3.29 0 2.19 1.32 3.04 4.12 3.42 1.9.31 2.44.72 2.44 1.8s-.92 1.8-2.21 1.8c-1.98 0-2.45-.98-2.6-2.16h-2.09c.14 1.94 1.2 3.4 3.61 3.72V40h2v-2.08c2.06-.33 3.38-1.77 3.38-3.54Z'
                />
              </svg>
            </Step>
            <Line />
            <Step title='Start buying and selling'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='61'
                height='56'
                fill='none'
              >
                <path
                  fill='#56B4FC'
                  d='M40 40.5v-.99c0-.89-.59-1.68-1.45-1.92l-9.21-2.63a7.975 7.975 0 0 0-6.31.83L16 40v12h15.65c2.88 0 5.73-.52 8.43-1.53L60 43c.9-2.26-.93-4.67-3.35-4.39L40 40.5Z'
                />
                <path
                  fill='#BFE9FF'
                  d='M16 36H0v20h16V36Z'
                />
                <path
                  fill='#1652F0'
                  d='M16 40H0v12h16V40Z'
                />
                <path
                  fill='#56B4FC'
                  d='M28 20c5.523 0 10-4.477 10-10S33.523 0 28 0 18 4.477 18 10s4.477 10 10 10Z'
                />
                <path
                  fill='#1652F0'
                  d='M48 36c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z'
                />
                <path
                  fill='#fff'
                  d='M32 9h-3V6h-2v3h-3v2h3v3h2v-3h3V9ZM52 27v-2h-8v2h8Z'
                />
              </svg>
            </Step>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default GettingStarted
