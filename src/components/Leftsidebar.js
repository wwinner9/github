import styles from '../styles/components/Leftsidebar.module.css'

import {FiBookmark} from 'react-icons/fi'


export default function Leftsidebar(){
    return(
        <div className={styles.leftSideContainer}>
            <aside>
                <div className={styles.firstHalf}>
                    <div className={styles.topLeftSide}>
                        <div className={styles.upTop}>                        
                            <h4>Repositories</h4>
                            <button className={styles.btnNewRepo} >
                                <FiBookmark/>
                                New
                            </button>
                        </div>
                        <div className={styles.findRep}>
                            <input 
                                type="search"  
                                name="search" 
                                id={styles.searchRepo} 
                                placeholder="Find a repository..."
                            />
                        </div>
                    </div>
                    <div className={styles.mainRepo}>
                        <ul>
                            <li>
                                <img src="imgg.png" alt="user Avatar"/>
                                <a href="">wwinner/incicle</a>
                            </li> 
                        </ul>
                        <a href="">Show more</a>
                    </div>
                </div>

                <div className={styles.secondHalf}>

                    <h4>Recent activity</h4>

                    <p>When you take actions across GitHub, we’ll provide
                         links to that activity here.
                    </p>
                    
                </div>
            </aside>
        </div>
    );
}