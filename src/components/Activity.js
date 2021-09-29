import { FiStar } from 'react-icons/fi'
import styles from '../styles/components/Activity.module.css'

export default function Activity(){
    return(

        <div className={styles.activityContainer}>
            <div className={styles.postInfo}>
                <img src="/imgg.png" alt="" />
                <div className={styles.topContent}>
                    <strong>gabrieldejesus</strong>
                    <p>starred</p>
                    <strong>Rich-Harris/svelte-thee-demo</strong>
                    <p>2 hours ago</p>
                </div>
            </div>
            <div className={styles.activityContent}> 
                <div className={styles.topInfo}>
                    <h4>Rich-Harris/svelte-thee-demo</h4>
                    <button>
                        <FiStar size={14} />
                        <p>Star</p>
                    </button>
                </div>
                <p>bare bones demo of svelte-three</p>
                <div className={styles.bottomInfo}>
                    <div className={styles.langInfo}>
                        <div className={styles.circle}></div>
                        <p>JavaScript</p>
                    </div> 
                    <a><FiStar size={13}/> <p>10</p></a> 
                    <p>Updated Sep 28</p>
                </div>
            </div> 
        </div>

    );
}