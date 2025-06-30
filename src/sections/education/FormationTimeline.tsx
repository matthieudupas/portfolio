import React from "react";
import {formations} from "./formations.ts";
import styles from "./FormationTimeLine.module.css";
import FormationCard from "./FormationCard.tsx";

const FormationTimeline: React.FC = () => {
    return (
        <section className={styles.timelineContainer}>
            <div className={styles.timeline}>
                {formations.map((formation, index) => (
                    <FormationCard
                        key={index}
                        formation={formation}
                        isLast={index === formations.length - 1}
                    />
                ))}
            </div>
        </section>
    );
};

export default FormationTimeline;