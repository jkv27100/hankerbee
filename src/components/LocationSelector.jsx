import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import HomeIcon from "@material-ui/icons/Home";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import styles from "../css/locationselector.module.css";

export default function LocationSelector({ setVisible, visible }) {
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <div className={styles.modal}>
      <div className={styles.item}>
        <div className={styles.container}>
          <CloseIcon className={styles.closeicon} onClick={handleClick} />

          <input
            type="text"
            className={styles.textarea}
            placeholder="Search for area, Street name.."
          />

          <div className={styles.currentlocation}>
            <GpsFixedIcon style={{ margin: 20 }} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <p
                className={styles.p}
                style={{ fontWeight: 500, marginBottom: 0 }}
              >
                Get current location
              </p>
              <div style={{ fontWeight: 100 }}>using GPS</div>
            </div>
          </div>

          <div className={styles.savedaddress}>
            <p style={{ fontWeight: 100, marginLeft: 100, fontSize: 20 }}>
              saved address
            </p>

            <div className={styles.home}>
              <HomeIcon style={{ margin: 20 }} />
              <div className={styles.content}>
                <p
                  className={styles.p}
                  style={{ fontWeight: 500, marginBottom: 0 }}
                >
                  Home
                </p>
                <div style={{ fontWeight: 100, textAlign: "left" }}>
                  Vani Apartment Room No. 002, 5-12-1118/44, Kodailbail,
                  Mangaluru, Karnataka 575003, India
                </div>
              </div>
            </div>

            <div className={styles.home}>
              <LocationOnIcon style={{ margin: 20 }} />
              <div className={styles.content}>
                <p
                  className={styles.p}
                  style={{ fontWeight: 500, marginBottom: 0 }}
                >
                  Other
                </p>
                <div style={{ fontWeight: 100, textAlign: "left" }}>
                  Vaishali Nivas, 2-18-1524/8, Kapikad, Mangaluru, Karnataka
                  575004, India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
