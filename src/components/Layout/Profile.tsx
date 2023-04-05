import Image from "next/image"
import styles from "components/Layout/profile.module.scss"
export const Profile = ()=>{
    return(
        <>
            
            <div className={styles.profileWrap}>
                <Image src='/avatar.png' width={100} height={100} className={styles.profileThm} alt='アバターの画像'/>
                <p className={styles.profileName}>haruka</p>
                <dl className={styles.profileSkill}>
                    <dt>skills</dt>
                    <dd>
                        <p><Image src='https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/HTML.svg' width={30} height={30} alt="htmlのアイコン"/>Html</p>
                        <p><Image src='https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Sass.svg' width={30} height={30} alt="sassのアイコン"/>Sass</p>
                        <p><Image src='https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/JavaScript.svg' width={30} height={30} alt="JavaScriptのアイコン"/>Javascript</p>
                        <p><Image src='https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Photoshop.svg' width={30} height={30} alt="Photoshopのアイコン"/>Photoshop</p>
                        <p><Image src='https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Illustrator.svg' width={30} height={30} alt="Illustratorのアイコン"/>Illustrator</p>
                    </dd>
                </dl>
                <dl className={`${styles.profileSkill} ${styles.haveMargin}`}>
                    <dt>learning</dt>
                    <dd>
                        <p><Image src='https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Light.svg' width={30} height={30} alt="Reactのアイコン"/>React</p>
                        <p><Image src='https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TypeScript.svg' width={30} height={30} alt="Typescriptのアイコン"/>Typescript</p>
                        <p><Image src='https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NextJS-Light.svg' width={30} height={30} alt="Next.jsのアイコン"/>Next.js</p>
                        
                    </dd>
                </dl>
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
                    <dd>2020年:現在の会社にアルバイト入社(レポーター)</dd>
                    <dd>2021年:正社員登用(コーダーに転身)</dd>
                    <dd>2023年:フロントエンドエンジニアに転身</dd>
                </dl> */}

            </div>

        </>
    )
}