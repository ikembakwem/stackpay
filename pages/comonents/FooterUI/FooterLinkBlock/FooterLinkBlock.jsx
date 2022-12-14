import classes from './FooterLinkBlock.module.css'

const FooterLinkBlock = ({ data }) => {
  return (
    <div className={classes.wrapper}>
      <div>
        <div>
          <h2 className={classes.title}>{data.title}</h2>
          <ul>
            {data.links.map(link => (
              <li key={link.id}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FooterLinkBlock
