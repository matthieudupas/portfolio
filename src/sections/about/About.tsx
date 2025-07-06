import styles from "./About.module.css";
import {useTranslation} from "react-i18next";

export default function About() {
    const {t} = useTranslation();

    return (
        <section id="about" className={styles.about}>
            <h1>{t('about.title')}</h1>
            <p>{t('about.content')}</p>
        </section>
    )
}