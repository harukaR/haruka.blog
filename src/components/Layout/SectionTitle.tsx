import styles from 'components/Layout/sectionTitle.module.scss'
import { ReactNode } from 'react';


type Props ={
    children:ReactNode
}

export const SectionTitle =({children}:Props)=>{
    return(
    
         <h2 className={styles.h2}>{children}</h2>

    )
}