import React, { useState, useEffect } from "react";
import Card from "./Card";
import styles from "../css/carousel.module.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Carousel() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    delay();
  }, []);

  const delay = () => {
    setTimeout(() => setLoader(false), 1000);
  };
  const data = [
    {
      src:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/sytbloaftzoqthdlpsl6",
    },
    {
      src:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/bgv6lthkfz1ji6n5malz",
    },
    {
      src:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/wjdep5xo4samqhemg59r",
    },
    {
      src:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/qh5eguuhaoh54ntnlpoa",
    },
  ];
  return (
    <div className={styles.container}>
      {loader ? (
        <div className={styles.loader}>
          <CircularProgress />
          <p> Loading Restaurents Near you...</p>
        </div>
      ) : (
        <div className={styles.content}>
          {data.map((item) => (
            <Card key={item.src} src={item.src} />
          ))}
          <div className={styles.btn}>
            <ArrowRightAltIcon />
          </div>
        </div>
      )}
    </div>
  );
}
