import React from "react";
import styles from "./ContactIcons.module.css";
export default function ContactIcons() {
  return (
    <div>
      <div className={styles.iconBox}>
        <div className={`${styles.iconImg} ${styles.map}`}></div>
        <h2>Address</h2>
      </div>
      <div className={styles.iconBox}>
        <div className={`${styles.iconImg} ${styles.phone}`}></div>
        <h2>927-409-769</h2>
      </div>
      <div className={styles.iconBox}>
        <div className={`${styles.iconImg} ${styles.instagram}`}></div>
        <h2><a href="https://www.instagram.com/mariselanails4u/">@mariselanails4u</a></h2>
      </div>
    </div>
  );
}
