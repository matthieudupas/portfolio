import {experiences} from "./experiences";
import ExperienceCard from "./ExperienceCard";
import styles from "./Experience.module.css";
import {Link} from "react-router-dom";

const ExperienceList = () => {
    return (
        <section className={styles.section}>
            <div className={styles.cardList}>
                {experiences.map((exp) => (
                    <Link key={exp.id} to={`/experience/${exp.id}`} className={styles.cardLink}>
                        <ExperienceCard experience={exp}/>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ExperienceList;