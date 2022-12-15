import classes from './Image.module.css'

const Image = () => (
  <div className={classes.container}>
    <img
      src='/images/feature-img.webp'
      alt=''
      style={{ width: '100%' }}
    />
  </div>
)

export default Image
