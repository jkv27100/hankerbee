import React, { useState } from "react";
import styles from "../css/restaurent.module.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import Button from "@material-ui/core/Button";
import Skeleton from "@material-ui/lab/Skeleton";

export default function Restaurent({ hotelList }) {
  const [btnVisible, setBtnVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleMouseEnter = () => {
    setBtnVisible(true);
  };

  const handleMouseLeave = () => {
    setBtnVisible(false);
  };
  return (
    <>
      {loading ? (
        <Skeleton variant="rect" className={styles.skeleton} />
      ) : (
        <div
          className={styles.cardContainer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={hotelList.url} width="256px" height="160px" />
          <div className={styles.cardContents}>
            <div className={styles.title}>{hotelList.title}</div>
            <div className={styles.subtitle}>{hotelList.subTitle}</div>
            <div className={styles.details}>
              <div className={styles.rating}>
                <span>
                  <StarRateIcon />
                </span>
                <span>{hotelList.rating}</span>
              </div>
              <p>-</p>
              <div style={{ color: "#686b78" }}>{hotelList.time}</div>
              <p>-</p>
              <div style={{ color: "#686b78" }}>{hotelList.value}</div>
            </div>
          </div>

          {btnVisible && (
            <div className={styles.foot}>
              <div className={styles.btn}>
                <Button color="primary" style={{ fontWeight: "550" }}>
                  Quick View
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
