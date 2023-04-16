import Image from "next/image"
import styles from "components/Layout/profile.module.scss"
export const Profile = ()=>{
    return(
        <>
            
            <div className={styles.profileWrap}>
                <Image src='/avatar.png' width={100} height={100} className={styles.profileThm} alt='アバターの画像'/>
                <p className={styles.profileName}>haruka</p>
                <div className={styles.profileSkillMap}>
                    <dl className={styles.profileSkill}>
                        <dt className={styles.skills}>Skills</dt>
                        <dd className={styles.skillsList}>
                            <div className={styles.skillsItem}><Image src='https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/HTML.svg' width={25} height={25} alt="htmlのアイコン"/><span className={styles.skillName}>Html</span></div>
                            <div className={styles.skillsItem}><Image src='https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Sass.svg' width={25} height={25} alt="sassのアイコン"/><span className={styles.skillName}>Sass</span></div>
                            <div className={styles.skillsItem}><Image src='https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/JavaScript.svg' width={25} height={25} alt="JavaScriptのアイコン"/><span className={styles.skillName}>Javascript</span></div>
                            <div className={styles.skillsItem}><Image src='https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Photoshop.svg' width={25} height={25} alt="Photoshopのアイコン"/><span className={styles.skillName}>Photoshop</span></div>
                            <div className={styles.skillsItem}><Image src='https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Illustrator.svg' width={25} height={25} alt="Illustratorのアイコン"/><span className={styles.skillName}>Illustrator</span></div>
                        </dd>
                    </dl>
                    <dl className={`${styles.profileSkill} ${styles.haveMargin}`}>
                        <dt className={styles.skills}>Learning</dt>
                        <dd className={styles.skillsList}>
                            <div className={styles.skillsItem}><Image src='https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Light.svg' width={25} height={25} alt="Reactのアイコン"/><span className={styles.skillName}>React</span></div>
                            <div className={styles.skillsItem}><Image src='https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TypeScript.svg' width={25} height={25} alt="Typescriptのアイコン"/><span className={styles.skillName}>Typescript</span></div>
                            <div className={styles.skillsItem}><Image src='https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NextJS-Light.svg' width={25} height={25} alt="Next.jsのアイコン"/><span className={styles.skillName}>Next.js</span></div>
                            
                        </dd>
                    </dl>
                </div>

            </div>

        </>
    )
}