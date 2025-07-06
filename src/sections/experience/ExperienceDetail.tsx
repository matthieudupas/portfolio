import {useParams} from "react-router-dom";
import {experiences} from "./experiences.ts";
import styles from './ExperienceDetail.module.css';
import {useTranslation} from "react-i18next";

const ExperienceDetail = () => {
    const {id} = useParams<{ id: string }>();
    const experience = experiences.find((exp) => exp.id === Number(id));
    const {t} = useTranslation();

    if (!experience) {
        return <p>{t('experienceDetail.notfound')}</p>;
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{experience.title}</h2>
            <h3 className={styles.company}>{experience.company}</h3>
            <p className={styles.date}><strong>{t('experienceDetail.date')}</strong> {experience.date}</p>
            <p className={styles.description}>{experience.description}</p>
            <p>
                <a className={styles.link} href={experience.url} target="_blank" rel="noopener noreferrer">
                    {t('experienceDetail.website')}
                </a>
            </p>

            <h2>Missions</h2>

            {experience.missions?.map((mission, index) => (
                <div key={index} className={styles.mission}>
                    <h4 className={styles.title}>{mission.title}</h4>
                    <h5 className={styles.objective}>{t('experienceDetail.objective')} {mission.objective}</h5>
                    {mission.context && (
                        <p className={styles.context}>
                            <strong>{t("experienceDetail.context")}</strong> {mission.context}
                        </p>
                    )}
                    <p className={styles.actionsLabel}><strong>{t("experienceDetail.actions")}</strong></p>
                    <ul className={styles.actions}>
                        {mission.actions.map((action, i) => (
                            <li key={i} className={styles.actionItem}>{action}</li>
                        ))}
                    </ul>
                    {mission.result && (
                        <p className={styles.result}>
                            <strong>{t("experienceDetail.result")}</strong> {mission.result}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ExperienceDetail;