import React from 'react'
import classes from './Overview.module.css'

const Overview = () => {
  return (
    <React.Fragment>
      <h2 className={classes.title}>
        Create your cryptocurrency portfolio today
      </h2>
      <p className={classes.subtitle}>
        Cryptraffic has a variety of features that make it
        the best place to start trading
      </p>
    </React.Fragment>
  )
}

export default Overview
