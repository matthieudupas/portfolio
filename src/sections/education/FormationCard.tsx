import type {Formation} from "./formations.ts";
import styles from "./FormationTimeLine.module.css";
import {useState} from "react";
import {useTranslation} from "react-i18next";

interface Props {
    formation: Formation;
    isLast: boolean;
}

const FormationCard = ({formation, isLast}: Props) => {
    const [showDetails, setShowDetails] = useState(false);
    const {t} = useTranslation();

    return (
        <div className={styles.timelineItem}>
            <div className={styles.timelineDot}/>
            {!isLast && <div className={styles.timelineLine}/>}
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

                <button
                    onClick={() => setShowDetails(!showDetails)}
                    className={styles.toggleDetailsBtn}
                >
                    {showDetails ? t('formation.showLess') : t('formation.showMore')}
                </button>

                {showDetails && <p>{formation.description}</p>}

            </div>
        </div>
    );
};

export default FormationCard;