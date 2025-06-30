import styles from "./About.module.css";

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <h1>À Propos De Moi</h1>
            <p>
                Développeur avec une expertise en développement logiciel (Java, C#, React). Expérimenté en
                DevOps (Docker, Kubernetes), orienté qualité logicielle et architecture moderne (Clean Code, architecture
                hexagonale). Curieux, autonome et capable d’apprendre rapidement de nouvelles technologies, je m’intègre
                facilement dans des équipes pluridisciplinaires et collaboratives.
            </p>
        </section>
    )
}