import styles from '../styles/components/Floatmenuavatar.module.css'
import {FiFacebook} from 'react-icons/fi'



export default function Floatmenuavatar(){
    return(
        <div className={styles.Floatmenu}>
            <p>Signed in as <strong>wwinner</strong></p>
            <div className={styles.focus}> 
                <p> <FiFacebook/>  Focusing</p>
            </div>
            
            <ul>
               <li><a href="#">Your profile</a></li> 
               <li><a href="#">Your repositories</a></li> 
               <li><a href="#">Your codespaces</a></li> 
               <li><a href="#">Your projects</a></li> 
               <li><a href="#">Your stars</a></li> 
               <li><a href="#">Your gists</a></li> 
            </ul>
            <ul>
                <li><a href="#">Upgrade</a></li>
                <li><a href="#">Featuring preview</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
            <div className={styles.signOut}>
                <a href="">Sign out</a>
            </div>
        </div>
    );
}

export function FloatPlus(){
    return(
        <div className={styles.Floatmenu}> 
            <ul>
               <li><a href="#">New repositories</a></li> 
               <li><a href="#">Import repositories</a></li> 
               <li><a href="#">New gists</a></li> 
               <li><a href="#">New organization</a></li> 
               <li><a href="#">New project</a></li> 
            </ul> 
        </div>
    );
}