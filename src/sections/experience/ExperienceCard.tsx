import React from "react";
import styles from "./Experience.module.css";
import type {Experience} from "./experiences.ts";

interface Props {
    experience: Experience;
}

const ExperienceCard: React.FC<Props> = ({ experience }) => {
    return (
        <div className={styles.card}>
            <h3>{experience.title}</h3>
            <span className={styles.date}>{experience.date}</span>
            <h4>
                {experience.url ? (
                    <a
                        href={experience.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.companyLink}
                    >
                        {experience.company}
                    </a>
                ) : (
                    experience.company
                )}
            </h4>
            <p>{experience.description}</p>
            {experience.technologies && (
                <ul className={styles.techList}>
                    {experience.technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ExperienceCard;
