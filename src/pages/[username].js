import Navbar from "../components/Navbar";

import styles from '../styles/pages/profile.module.css'

import {FiFeather} from 'react-icons/fi'


export default function username(){
    return(
        <div className={styles.profileContainer}>
            <Navbar/>
            <article>
                <nav>
                    <ul>
                        <li><FiFeather/><a href="#">Overview</a></li>
                        <li><FiFeather/><a href="#">Repositories</a></li>
                        <li><FiFeather/><a href="#">Projects</a></li>
                        <li><FiFeather/><a href="#">Packages</a></li>
                    </ul>
                    <div />
                </nav>
            </article>

            <div className={styles.midleContainer}>
                <aside>
                    <div className={styles.leftSideProf}>
                        <img src="imgg.png" alt="user avatar" />
                        <div className={styles.userInfo}>
                            <h2>Fernando Wanda</h2>
                            <p>wwinner9</p>
                        </div>
                        
                        <p id={styles.bios}>Learn + than ate Begining </p>
                        <button type='button' id={styles.btnEdit} >Edit profile</button>
                        <div className={styles.socialInfo}>
                            <p><FiFeather/><strong>2</strong>Followers</p>
                            <p><strong>15</strong>Following</p>
                            <p><FiFeather/><strong> 28</strong></p>
                        </div>
                        <div className={styles.userMoreInfo}>                            
                            <p><FiFeather/>Freelancer</p>
                            <p><FiFeather/>Angola</p>
                            <p><FiFeather/>fernandowwinner.97@gmail.com</p> 
                        </div>
                    </div>
                </aside>

                <main>
                    <div className={styles.top}>
                        <h3>Popular repositories</h3>
                        <p>Customized your pins</p>
                    </div>
                    <ul>
                        <li></li>
                    </ul>

                    <article>
                        <div className={styles.top}>
                            <h3>51 Contributions in The last year</h3>
                            <p>Contributions settings</p>
                        </div>
                        <div className={styles.calender}>

                        </div>
                    </article>
                </main>
            </div>
        </div>
    );
}