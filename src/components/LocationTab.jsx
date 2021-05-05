import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import styles from "../css/locationtab.module.css";
import logo from "../assets/logo.png";

export default function LocationTab({ setVisible, visible }) {
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <div className={styles.container} onClick={handleClick}>
      <img className={styles.logo} src={logo} />
      <p className={styles.address}>HOME</p>
      <p className={styles.text}>5-122-118/44,Trichambram,..</p>
      <KeyboardArrowDownIcon />
    </div>
  );
}
