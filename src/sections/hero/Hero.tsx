import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            <h1>Salut, je suis Matthieu Dupas</h1>
            <p>Développeur Backend, spécialisé en Java.</p>
            <a href="#projects" className={styles.cta}>Voir mes projets</a>
        </section>
    );
}