import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useTheme } from "lib/theme";

import styles from 'components/Ui/toggleMode.module.scss'
import React from 'react'


export const ToggleMode = () => {
  const {  toggleTheme,setMode,mode,theme } = useTheme(); 
  if(theme === "dark"){
    setMode(false)
  }
  return (
    <div onClick={toggleTheme}> 
      
        {mode ? <FontAwesomeIcon icon={faSun} className={styles.modeIcon}  /> : <FontAwesomeIcon icon={faMoon} className={styles.modeIcon} />}
    </div>
  )
}