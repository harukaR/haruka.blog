import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';

import styles from 'components/Layout/footer.module.scss'
export const Footer =()=>{
    return(
        <>
        <footer>
            <div className={styles.footerInner}>
                <p>© 2023 haruka</p>
                <ul className={styles.snsIcons}>
    
                <Link href="https://github.com/harukaR">
                    <li>
                    <FontAwesomeIcon icon={faGithub} width={23} height={23} />
                    </li>
                </Link>

                <Link href="https://twitter.com/harukao85010999">
                    <li>
                        <FontAwesomeIcon icon={faTwitter} width={23} height={23} />
                    </li>
                </Link>                                 
                </ul>
            </div>

        </footer>
        </>
    )
}