import FooterLinkBlock from '../FooterLinkBlock/FooterLinkBlock'
import classes from './PageLinks.module.css'
import data from '../../../../utils/data.json'

const PageLinks = () => {
  return (
    <div className={classes.container}>
      {data.map(data => (
        <FooterLinkBlock key={Math.random()} data={data} />
      ))}
    </div>
  )
}

export default PageLinks
