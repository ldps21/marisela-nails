import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav>
            <label>Marisela Nail's</label>
            <ul className={styles.menu}>
                <li className={styles.menuItem}>home</li>
                <li className={styles.menuItem}>serviços</li>
                <li className={styles.menuItem}>contactos</li>
            </ul>
            <button type="button" className={styles.btn}>BTN</button>
        </nav>
    )
}
