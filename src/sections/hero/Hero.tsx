import styles from './Hero.module.css';
import {useTranslation} from "react-i18next";

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section id="hero" className={styles.hero}>
            <h1>{t('hero.greeting')}</h1>
            <p>{t('hero.subtitle')}</p>
            <a href="#projects" className={styles.cta}>Voir mes projets</a>
        </section>
    );
}