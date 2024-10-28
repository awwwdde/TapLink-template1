import React from 'react';
import styles from './work.module.scss'; // Импортируем стили из CSS-модуля

const Work = ({ works }) => {
    return (
        <div className={styles.work}>
            {works.map((work, index) => (
                <div key={index} className={styles.workItem}>
                    <div className={styles.workItemF}>
                        <img src={work.icon} style={{ width: '50px', height: '50px', marginBottom: '10px', borderRadius: '5px' }} />
                        <div className={styles.workItemFTitle}>{work.title}</div>
                    </div>
                    <div className={styles.workItemS}>
                        <div className={styles.workItemSDate}>{work.date}</div>
                        <div className={styles.workItemSPosition}>{work.position}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Work;