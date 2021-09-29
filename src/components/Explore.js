import { FiStar } from 'react-icons/fi'
import styles from '../styles/components/Explore.module.css'

export default function Explore(){
    return(

        <div className={styles.exploreContainer}> 
            <strong>SerenityOS/serenity</strong>
            <p>bare bones demo of svelte-three</p>
            <div className={styles.bottomInfo}>
                <div className={styles.langInfo}>
                    <div className={styles.circle}></div>
                    <p>JavaScript</p>
                </div> 
                <p><FiStar/> 10</p>  
            </div> 
        </div>
    );
}