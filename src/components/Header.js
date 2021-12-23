import React from 'react'
import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.mainImage}>
              <div className={styles.upperText}>
                <h1>Estilo</h1>
                <h3>na ponta dos dedos</h3>
              </div>
              <div className={styles.bottomText}>
                <h1>Make Yourself beautiful</h1>
                <h3 className={styles.subTitle}>
                  {/* <a href='#'>...marca já!</a> */}
                  ...marca já!
                  </h3>
              </div>
                
                
            </div>
        </div>
    )
}
