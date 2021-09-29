import styles from '../styles/pages/Home.module.css'

import Navbar from '../components/Navbar'
import Leftsidebar from '../components/Leftsidebar'

export default function Home() {
  return ( 
    <>
      <Navbar/>
      <div className={styles.mainContainer}>
        <aside className={styles.aside}>
          <Leftsidebar/>
        </aside>
        <main className={styles.middle}>
          <h1>ola</h1>
        </main>
      </div>
      
    </>
  )
}
