import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamburger from "hamburger-react";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isOpen, setOpen] = useState(false)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  const handleClick = () => {
    toggleNav();
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <>
      <nav
        className={toggleMenu ? `${styles.active} ${styles.nav}` : styles.nav}
      >
        <label>Marisela Nail's</label>
        {(toggleMenu || screenWidth > 810) && (
          <ul className={styles.menu}>
            <li className={styles.menuItem}>home</li>
            <li className={styles.menuItem}>serviços</li>
            <li className={styles.menuItem}>contactos</li>
          </ul>
        )}

        <button onClick={handleClick} className={styles.btn} type="button">
          <Hamburger toggled={isOpen} toggle={setOpen} rounded distance="md"/>
        </button>
      </nav>
    </>
  );
}
