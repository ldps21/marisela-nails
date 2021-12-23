import React from "react";
import styles from "./ServiceCards.module.css";
export default function ServiceCards() {
  return (
    <div>
      <div className={styles.card}>
        <div className={`${styles.cardImg} ${styles.manicure}`}></div>
        <div className={styles.cardText}>
          <p>Manicure</p>
          <p>Francesa e Clássica</p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={`${styles.cardImg} ${styles.nailArt}`}></div>
        <div className={styles.cardText}>
          <p>Nail Art</p>
          <p>Ofertas especiais</p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={`${styles.cardImg} ${styles.ig}`}></div>
        <div className={styles.cardText}>
          <p>Nosso trabalho!</p>
          <p><a href="https://www.instagram.com/mariselanails4u/">@mariselanails4u</a></p>
        </div>
      </div>
    </div>
  );
}
