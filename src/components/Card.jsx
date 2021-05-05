import React from "react";
import styles from "../css/card.module.css";

export default function Card({ src }) {
  return (
    <div className={styles.container}>
      <img src={src} style={{ width: "260px", height: "260px" }} />
    </div>
  );
}
