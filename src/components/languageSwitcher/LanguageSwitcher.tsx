import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
];

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <select
            value={i18n.language}
            onChange={handleChange}
            className={styles.select}
            aria-label="Select language"
        >
            {languages.map(({ code, label, flag }) => (
                <option key={code} value={code}>
                    {flag} {label}
                </option>
            ))}
        </select>
    );
}
