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
                        <dt>Skills</dt>
                        <dd>
                            <p><Image src='https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/HTML.svg' width={25} height={25} alt="htmlのアイコン"/><span className={styles.skillName}>Html</span></p>
                            <p><Image src='https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Sass.svg' width={25} height={25} alt="sassのアイコン"/><span className={styles.skillName}>Sass</span></p>
                            <p><Image src='https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/JavaScript.svg' width={25} height={25} alt="JavaScriptのアイコン"/><span className={styles.skillName}>Javascript</span></p>
                            <p><Image src='https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Photoshop.svg' width={25} height={25} alt="Photoshopのアイコン"/><span className={styles.skillName}>Photoshop</span></p>
                            <p><Image src='https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Illustrator.svg' width={25} height={25} alt="Illustratorのアイコン"/><span className={styles.skillName}>Illustrator</span></p>
                        </dd>
                    </dl>
                    <dl className={`${styles.profileSkill} ${styles.haveMargin}`}>
                        <dt>Learning</dt>
                        <dd>
                            <p><Image src='https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Light.svg' width={25} height={25} alt="Reactのアイコン"/><span className={styles.skillName}>React</span></p>
                            <p><Image src='https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TypeScript.svg' width={25} height={25} alt="Typescriptのアイコン"/><span className={styles.skillName}>Typescript</span></p>
                            <p><Image src='https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NextJS-Light.svg' width={25} height={25} alt="Next.jsのアイコン"/><span className={styles.skillName}>Next.js</span></p>
                            
                        </dd>
                    </dl>
                </div>
                {/* <dl className={styles.profileItem}>
                    <dt>趣味</dt>
                    <dd>ゲーム   /   読書</dd>
                </dl>
                <dl className={styles.profileItem}>
                    <dt>なにをしている人？</dt>
                    <dd>東京の企業でフロントエンドエンジニアとしてお仕事しています。</dd>
                </dl>
                <dl className={styles.profileItem}>
                    <dt>今年の目標</dt>
                    <dd>🌟個人開発でアプリケーションを作成する🌟</dd>
                </dl>
                <dl className={styles.profileItem}>
                    <dt>経歴</dt>
                    <dd>2525年:現在の会社にアルバイト入社(レポーター)</dd>
                    <dd>2521年:正社員登用(コーダーに転身)</dd>
                    <dd>2523年:フロントエンドエンジニアに転身</dd>
                </dl> */}
                

            </div>

        </>
    )
}