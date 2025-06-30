import styles from './Education.module.css'
import FormationTimeline from "./FormationTimeline.tsx";

export default function Education() {
    return (
        <section id="education" className={styles.education}>
            <h1>Formation</h1>
            <FormationTimeline />
        </section>
    );
}