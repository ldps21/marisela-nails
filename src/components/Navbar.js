import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
      setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }
      window.addEventListener('resize', changeWidth)

      return () => {
        window.removeEventListener('resize', changeWidth)
      }

  }, [])  

  return (
    <nav>
      <label>Marisela Nail's</label>
      {(toggleMenu || screenWidth > 500) && (
        <ul className={styles.menu}>
          <li className={styles.menuItem}>home</li>
          <li className={styles.menuItem}>serviços</li>
          <li className={styles.menuItem}>contactos</li>
        </ul>
      )}

      <button onClick={toggleNav} type="button" className={styles.btn}>
        BTN
      </button>
    </nav>
  );
}
