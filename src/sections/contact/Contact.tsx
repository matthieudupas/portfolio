import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import styles from './Contact.module.css';
import {useTranslation} from "react-i18next";

export default function Contact() {
    const {t} = useTranslation();

    return (
        <section id='contact' className={styles.contact}>
            <h2>{t('contact.title')}</h2>
            <div className={styles.icons}>
                <a
                    href="https://www.linkedin.com/in/matthieudupas"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className={styles.icon}
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/matthieudupas"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className={styles.icon}
                >
                    <FaGithub />
                </a>
                <a
                    href="mailto:matthieudupas@outlook.fr"
                    aria-label="Email"
                    className={styles.icon}
                >
                    <FaEnvelope />
                </a>
            </div>
        </section>
    );
}
