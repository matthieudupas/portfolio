import type {Formation} from "./formations.ts";
import styles from "./FormationTimeLine.module.css";
import React from "react";

interface Props {
    formation: Formation;
    isLast: boolean;
}

const FormationCard: React.FC<Props> = ({ formation, isLast }) => {
    return (
        <div className={styles.timelineItem}>
            <div className={styles.timelineDot} />
            {!isLast && <div className={styles.timelineLine} />}
            <div className={styles.timelineContent}>
                <h3>{formation.title}</h3>
                <span className={styles.date}>{formation.date}</span>
                {formation.url ? (
                    <h4>
                        <a
                            href={formation.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.schoolLink}
                        >
                            {formation.school}
                        </a>
                    </h4>
                ) : (
                    <h4>{formation.school}</h4>
                )}
                <p>{formation.description}</p>
            </div>
        </div>
    );
};

export default FormationCard;