import styles from '../styles/pages/Home.module.css'

import Navbar from '../components/Navbar'
import Leftsidebar from '../components/Leftsidebar'
import Activity from '../components/Activity'
import Explore from '../components/Explore'


import store from '../store/index'
import { Provider } from 'react-redux'

export default function Home() {
  return ( 
    <>
      <Provider store={store}>
      <Navbar/>
      <div className={styles.mainContainer}>
        <aside className={styles.aside}>
          <Leftsidebar/>
        </aside>
        <main className={styles.middle}>
          <div className={styles.activityMain}>
            <p>All activity</p>
            <ul>
              <li><Activity/></li> 
              <li><Activity/></li> 
              <li><Activity/></li> 
              <li><Activity/></li> 
              <li><Activity/></li>  
            </ul>
          </div>
          <div className={styles.exploreMain}>
            <p>Explore repositories</p>
            <ul>
              <li><Explore/></li>
              <li><Explore/></li>
              <li><Explore/></li>
              <li><Explore/></li>
              <li><Explore/></li> 
            </ul>
          </div>

        </main>
      </div>
      </Provider>
      
    </>
  )
}
