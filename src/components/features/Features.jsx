import React from 'react';
import styles from './features.module.css'
import {  Link,  } from 'react-router-dom' 

const Features = () => {
    return (
        <div>
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
                <h1>MONKE POWER</h1>
            </div>
            </div>
            <footer className={styles.footer}>
                <div className={styles.fText}>
                    Cover template for <a href='https://getbootstrap.com/'>Bootstrap</a> by <a href='x'>@mdo.</a>
                </div>
            </footer>
        </div>
    );
};

export default Features;