import { ReactNode } from "react"
import styles from "components/Ui/button.module.scss"
import Link from "next/link";

type Props ={
    children:ReactNode;
}
export const Button =({children}:Props)=>{
    return(
        <Link href='/about'>
                <div className={styles.button}>
            {children}
        </div>
        </Link>

    )
}