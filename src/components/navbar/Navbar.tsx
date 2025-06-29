import styles from './Navbar.module.css';
import {useTranslation} from "react-i18next";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher.tsx";

export default function Navbar() {
    const { t } = useTranslation();

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Matthieu Dupas</div>
            <ul className={styles.navLinks}>
                <li><a href="#hero">{t('navbar.home')}</a></li>
                <li><a href="#about">{t('navbar.about')}</a></li>
                <li><a href="#education">{t('navbar.education')}</a></li>
                <li><a href="#experience">{t('navbar.experience')}</a></li>
            </ul>
            <LanguageSwitcher />
        </nav>
    );
}