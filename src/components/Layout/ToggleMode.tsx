import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import styles from 'components/Layout/toggleMode.module.scss'

import React from 'react'

type Props = {}

export const ToggleMode = () => {
    const [mode,setMode] = useState(true);
    const handleMode =()=>{
      setMode(!mode)
      console.log(mode)
    }
  return (
    <div onClick={handleMode}>
        {mode ? <FontAwesomeIcon icon={faSun} className={styles.modeIcon}  /> : <FontAwesomeIcon icon={faMoon} className={styles.modeIcon} />}
    </div>
  )
}