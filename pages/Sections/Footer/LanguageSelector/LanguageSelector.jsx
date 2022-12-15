import React from 'react'
import classes from './LanguageSelector.module.css'

const LanguageSelector = () => {
  return (
    <React.Fragment>
      <select className={classes.slect_form} name='' id=''>
        <option value='en'>English</option>
        <option value='de'>Deutsch</option>
        <option value='es'>Español - España</option>
        <option value='es-LA'>
          Español - Latinoamérica
        </option>
        <option value='fr'>Français - France</option>
        <option value='ja'>日本語</option>
        <option value='it'>Italiano</option>
        <option value='pl'>Polski</option>
        <option value='pt'>Português - Brasil</option>
        <option value='pt-PT'>Português - Portugal</option>
        <option value='ru'>Pусский</option>
        <option value='th'>ไทย</option>
        <option value='tr'>Türkçe</option>
      </select>
    </React.Fragment>
  )
}

export default LanguageSelector
