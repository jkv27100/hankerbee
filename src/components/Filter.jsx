import React from "react";
import styles from "../css/filter.module.css";
export default function Filter() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>124 restaurants</div>
      <div className={styles.filterOption}>
        <div className={styles.item}>Relevance</div>
        <div className={styles.item}>Cost For Two</div>
        <div className={styles.item}>Delivery Time</div>
        <div className={styles.item}>Rating</div>
      </div>
    </div>
  );
}
