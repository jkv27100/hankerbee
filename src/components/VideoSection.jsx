import React from "react";
import styles from "../css/videosection.module.css";
import video from "../assets/video.mp4";
import Button from "@material-ui/core/Button";

export default function VideoSection() {
  return (
    <div className={styles.showcase}>
      <div className={styles.video}>
        <video
          src={video}
          muted="true"
          loop="true"
          autoplay="true"
          width="100%"
          height="500px"
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.header}>Hankerbee</h1>
        <div className={styles.text}>
          <h2>Hanker for solutions...</h2>
          <p>Checkout restaurents...</p>
          <Button variant="contained" className={styles.btn}>
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
