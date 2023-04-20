import styles from 'components/Layout/sectionTitle.module.scss'


type Props ={
    children:string
}

export const SectionTitle =({children}:Props)=>{
    return(
            <h2 className={styles.h2}>
                {children}
            </h2>
        
    )
}