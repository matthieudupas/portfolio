import styles from './Navbar.module.css';
import {useTranslation} from "react-i18next";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher.tsx";
import {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {getNavItems} from "./NavItems.ts";

export default function Navbar() {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const navItems = getNavItems(t);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className={styles.navbar}>
            {/* Logo always left */}
            <div className={styles.logo}>Matthieu Dupas</div>

            {/* Nav links - desktop only */}
            <ul className={styles.navLinks}>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.url}>
                            <i className={item.icon} /> {item.title}
                        </a>
                    </li>
            ))}
            </ul>

            {/* Language switcher - desktop only */}
            <div className={styles.languageDesktop}>
                <LanguageSwitcher />
            </div>

            {/* Burger - mobile only */}
            <button
                className={styles.burger}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile menu */}
            {/* Menu burger mobile */}
            {menuOpen && (
                <ul className={`${styles.mobileMenu} ${styles.open}`}>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.url} onClick={() => setMenuOpen(false)}>
                                <i className={item.icon} /> {item.title}
                            </a>
                        </li>
                    ))}
                    <li className={styles.languageMobile}>
                        <LanguageSwitcher />
                    </li>
                </ul>
            )}
        </nav>
    );
}