import React from 'react';
import styles from './home.module.css'
import {  Link,  } from 'react-router-dom' 


const Home = () => {
    return (
        
        <div className={styles.main}>
            <header className={styles.header}>
                <div className={styles.logoCnt}>
                  <Link to='/' className={styles.logo}>Cover</Link>
                </div>
                <div className={styles.linksCnt}>
                    <Link to='/' className={styles.home} >Home</Link>
                    <Link to='/features' className={styles.features}>Features</Link>
                    <Link to='/contact' className={styles.contacts}>Contact</Link>
                </div>
            </header>
            <div className={styles.body}>
                <div className={styles.title}>Cover your page.</div>
                <div className={styles.text}>Cover is a one-page template for building simple and beautiful home pages.
                 Download, edit the text, and add your own fullscreen background photo to make it your own.
                </div>
                <button className={styles.btn}>Learn more</button>
            </div>
            <footer className={styles.footer}>
                <div className={styles.fText}>
                    Cover template for <a href='https://getbootstrap.com/'>Bootstrap</a> by <a href='x'>@mdo.</a>
                </div>
            </footer>
        </div>
    );
};

export default Home;