import Link from 'next/link'

import { useState } from 'react'
import axios from 'axios'

import styles from '../styles/pages/Login.module.css'

export default function Login(){

    //Create a new state that will store the username 
    const [username,setUsername] =useState([])

    //Function that will be handled when user submit
    async function handleSubmit(e) {

        //Prevent the default page behavor
        e.preventDefault();

        e.target.textContent='signing in...'
        e.target.style.background='#83e09d'

        const resp = await axios.get(`https://api.github.com/users/${username}`)


        console.log(resp)
    }


    return (
        <div className={styles.loginContainer}>
            <header>
                <img 
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                    alt="logo" 
                />
                <h2>Sign in to GitHub</h2>                 
            </header>
            <form action=""  >
                <label htmlFor="username">Username or email address</label>
                <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    onChange={e=> setUsername(e.target.value)}
                />

                <label htmlFor="password">Password <a href="#">Forgot password?</a> </label>
                <input type="password" name="password" id="password" />

                <button 
                    type="submit"  
                    onClick={handleSubmit}                                 
                >
                    Sign in
                </button> 
            </form>
            <div className={styles.createAccount}>
                <p>New to GitHub? <a href="#">Create an account</a></p>
            </div>
            <footer>
                <ul>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Security</a></li>
                    <li><a href="#">Contact GitHub</a></li>
                </ul>
            </footer>
        </div>
    )
}