import React from "react";
import styles from "./ServiceIcons.module.css";

export default function ServiceIcons() {
  return (
    <div className={styles.serviceSection}>
      <div className={styles.iconBox}>
        <div className={`${styles.iconImg} ${styles.nailPolish}`}></div>
        <h2>Verniz gel</h2>
      </div>
      <div className={styles.iconBox}>
        <div className={`${styles.iconImg} ${styles.manicure}`}></div>
        <h2>Manicure</h2>
      </div>
      <div className={styles.iconBox}>
        <div className={`${styles.iconImg} ${styles.nailDryer}`}></div>
        <h2>Manutenção</h2>
      </div>
      <div className={styles.iconBox}>
        <div className={`${styles.iconImg} ${styles.pedicure}`}></div>
        <h2>Pedicure</h2>
      </div>
    </div>
  );
}
