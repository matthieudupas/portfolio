import {experiences} from "./experiences";
import ExperienceCard from "./ExperienceCard";
import styles from "./Experience.module.css";

const ExperienceList = () => {
    return (
        <section className={styles.section}>
            <div className={styles.cardList}>
                {experiences.map((exp, i) => (
                    <ExperienceCard key={i} experience={exp}/>
                ))}
            </div>
        </section>
    );
};

export default ExperienceList;