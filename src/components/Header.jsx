import React, { useState } from "react";
import styles from "../css/header.module.css";
import LocationTab from "./LocationTab";
import TabBar from "./TabBar";
import { Transition, animated, Spring, Trail } from "react-spring";
import LocationSelector from "./LocationSelector";
import Container from "@material-ui/core/Container";
export default function Header() {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <div className={styles.container}>
        <LocationTab setVisible={setVisible} visible={visible} />
        <Spring opacity={visible ? 1 : 0}>
          {(props) =>
            visible && (
              <animated.div style={props}>
                <LocationSelector setVisible={setVisible} visible={visible} />
              </animated.div>
            )
          }
        </Spring>

        <TabBar />
      </div>
    </Container>
  );
}
