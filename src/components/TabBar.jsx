import React from "react";
import styles from "../css/tabitem.module.css";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

export default function TabBar() {
  return (
    <div className={styles.container}>
      <div className={styles.tabitem}>
        <SearchIcon />
        <p className={styles.icontext}>Search</p>
      </div>
      <div className={styles.tabitem}>
        <HelpOutlineIcon />
        <p className={styles.icontext}>Help</p>
      </div>
      <div className={styles.tabitem}>
        <PersonOutlineIcon />
        <p className={styles.icontext}>Jagannath</p>
      </div>
      <div className={styles.tabitem}>
        <AddShoppingCartIcon />
        <p className={styles.icontext}>Cart</p>
      </div>
    </div>
  );
}
