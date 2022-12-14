import classes from './EmailCTA.module.css'

const Button = () => (
  <button className={classes.btn}>
    <sapn className={classes.btn_content}>
      <div className={classes.btn_content_padding}>
        Get started
      </div>
    </sapn>
  </button>
)

const EmailCTA = () => (
  <div className={classes.container}>
    <form action='' className={classes.form_cta}>
      <div className={classes.email_wrapper}>
        <input
          aria-label='Email address'
          placeholder='Email address'
          type='text'
        />
      </div>
      <div className={classes.btn_wrapper}>
        <Button />
      </div>
    </form>
  </div>
)

export default EmailCTA
