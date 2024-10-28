// Experience.jsx
import React from 'react';
import styles from './experience.module.scss'; // Импортируем стили из CSS-модуля

const Experience = ({ experiences }) => {
    return (
        <div className={styles.experience}>
            {experiences.map((exp, index) => (
                <div key={index} className={styles.experienceItem}>
                    {exp.image && <img src={exp.image} alt={exp.title} className={styles.experienceItemImage} />}
                    <div className={styles.experienceItemBlock}>
                        <div className={styles.experienceItemBlockTitle}>{exp.title}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Experience;