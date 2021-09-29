import styles from '../styles/components/Navbar.module.css'

import {FiBell, FiPlus} from 'react-icons/fi'
import {FaSortDown} from 'react-icons/fa'

export default function Navbar(){

    return ( 
        <div className={styles.NavbarContainer}>
            <header>
                <div className={styles.leftSideBar}>
                    <img src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png' alt="" />
                    <div className={styles.searchArea}>
                        <input type="search" name="search" id="search" placeholder='Search or jump to...' />
                        <a href="">/</a>
                    </div>
                    <nav>
                        <ul className={styles.menus}>
                            <li><a href="#">Pull requests</a></li>
                            <li><a href="#">Issues</a></li>
                            <li><a href="#">Marketplace</a></li>
                            <li><a href="#">Explore</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.rightSideBar}>
                    <ul>
                        <li><a href=""><FiBell size={18} color='#fff'/></a></li> 
                        <li>                             
                            <FiPlus color='#fff' size={18}/>
                            <a><FaSortDown size={14} color='white'/> </a>
                        </li>
                        <li> 
                            <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="avatar" className={styles.avatarBar} />    
                            <a><FaSortDown size={14} color='white'/></a>    
                        </li>
                        
                    </ul>
                </div>
            </header> 
        </div>
        
    )
}