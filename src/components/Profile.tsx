import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChanlangesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/cesarguilherme.png" alt="César Guilherme" />
            <div>
                <strong>César Guilherme</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}